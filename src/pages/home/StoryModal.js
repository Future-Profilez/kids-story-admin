import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "../../style/model.css"
import Ai from "../../Apis/Ai"
import genres from '../../Data/genre.json'
import agegroup from "../../Data/Age.json"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { adduser } from "../../Redux/UserSlice";
import toast from 'react-hot-toast';

function StoryModal({ show, handleClose }) {
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');
    const [Name, setName] = useState("")
    const [userTitle, setUserTitle] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [genre, setGenre] = useState('');
    const [loading, setLoading] = useState(false)
    const handleOptionSelect = (nextStep, user) => {
        if (nextStep >= 1 && nextStep <= 4) {
            setCurrentStep(nextStep);
            setSelectedUser(user);
            if (nextStep === 4) {
                setShowSuccess(true);
            } else {
                setShowSuccess(false);
            }

        }
    };
    useEffect(() => {
        if (gender === "boy") {
            setName("DummyBoy");
        } else {
            setName("DummyGirl");
        }
    }, [gender]);
    
    const handleAgeChange = (age) => {
        setAge(age);
        handleOptionSelect(3);
    };
    const navigate = useNavigate()

    const [card, setCard] = useState(null)
    let storyres = null;

    function genrateAiStory() {
        try {
            if (userTitle && age && gender && genre) {
                setLoading(true);
                const promptData = {
                    message: "Generate a children's story with the following parameters",
                    title: userTitle,
                    age: age,
                    gender: gender,
                    genre: genre,
                    name: Name,
                    minimum_character_length: "500 words",
                    description: "Please provide the content for five chapters, including subtitles, content, and an image prompt. Ensure that the fifth chapter always has a moral of the story. Store the data in one variable 'data' where inside 'data', there should be 'title','name','age', 'gender', 'genre', and 'chapters'. 'chapters' should be an array containing objects for each chapter with the properties: chapternumber, title, content, and imageprompt. Provide the response in JSON format",
                };
                console.log("promptData",promptData);
                const requestData = {
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a storyteller.',
                        },
                        {
                            role: 'user',
                            content: JSON.stringify(promptData),
                        },
                    ],
                };
                 Ai.post("/completions", requestData)
                    .then((res) => {
                        const storyResponse = res.data.choices[0].message.content;
                        console.log("storyResponse", storyResponse);
                        try {
                            const jsonMatch = storyResponse.match(/\{(.|\n)*\}/);
                            if (jsonMatch && jsonMatch.length > 0) {
                              const jsonData = JSON.parse(jsonMatch[0]);
                              const dataField = jsonData.data;
                              const Parstory = JSON.parse(storyResponse);
                              console.log("parstory", Parstory);
                              storyres = Parstory;
                              const datastory = dispatch(adduser(storyres));
                              console.log("datastory", datastory);
                              const data = setCard(storyres);
                              console.log("data", data);
                              setTimeout(() => {
                                navigate('/list');
                              }, 1000);
                              console.log(dataField);
                            } else {
                              const Parstory = JSON.parse(storyResponse);
                              storyres = Parstory;
                              const datastory = dispatch(adduser(storyres));
                              console.log("datastory", datastory);
                              const data = setCard(storyres);
                              console.log("data", data);
                              navigate('/list');
                            }
                          }   catch (error) {
                            console.log("Error parsing JSON:", error);
                        }
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.log("error", error);
                        setLoading(false);
  toast.error("Failed to complete the API request. Please try again.");
                    });
            }
        } catch (error) {
            console.log("Error", error);
            setLoading(false);
  toast.error("Failed to complete the API request. Please try again.");
        }
    }


// Ai.post("/completions", requestData)
// .then((res) => {
//   const storyResponse = res.data.choices[0].message.content;
//   console.log("storyResponse", storyResponse);

//   try {
//     const jsonMatch = storyResponse.match(/\{(.|\n)*\}/);
//     if (jsonMatch && jsonMatch.length > 0) {
//       const jsonData = JSON.parse(jsonMatch[0]);
//       const dataField = jsonData.data;
//       const Parstory = JSON.parse(storyResponse);
//       console.log("parstory", Parstory);
//       storyres = Parstory;
//       const datastory = dispatch(adduser(storyres));
//       console.log("datastory", datastory);
//       const data = setCard(storyres);
//       console.log("data", data);
//       setTimeout(() => {
//         navigate('/list');
//       }, 1000);
//       console.log(dataField);
//     } else {
//       const Parstory = JSON.parse(storyResponse);
//       storyres = Parstory;
//       const datastory = dispatch(adduser(storyres));
//       console.log("datastory", datastory);
//       const data = setCard(storyres);
//       console.log("data", data);
//       navigate('/list');
//     }
//   } catch (error) {
//     console.log("Error parsing JSON:", error);
//     toast.error("Failed to generate or parse story. Please try again.");
//   }
//   setLoading(false);
// })
// .catch((error) => {
//   console.error("Error:", error);
//   setLoading(false);
//   toast.error("Failed to complete the API request. Please try again.");
// });
            

    const generateStory = async () => {
  genrateAiStory()
  //   navigate("/list");
    };

    useEffect(() => {
        setLoading(false);
    }, [userTitle, age, gender, genre]);
    useEffect(() => {
        console.log("Card =>>>>>>>>>>>>>>>>>>:", card);
    }, [card]);
    return (
        <>
            <>
                <Modal centered show={show} onHide={handleClose} id="generat-story">
                    <div className={`step${currentStep}`}>
                        <Modal.Header closeButton >
                            <Modal.Title>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                    <g opacity="0.5">
                                        <path d="M18 31H21V25H27V31H30V22L24 17.5L18 22V31ZM16 33V21L24 15L32 21V33H25V27H23V33H16Z" fill="white" />
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" />
                                    </g>
                                </svg>
                                <h2>StoryScape!</h2>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {currentStep === 1 && (

                                <div className="story-step-form" id="step1"  >
                                    <div className="body-popup-title">
                                        <h3>Who do you want to generate it for </h3>
                                    </div>
                                    <div className="button-list-form">
                                        <ul>
                                            <li>
                                                <div className="button-block" value={gender} onClick={(e) => { setGender(e.target.value) }}>
                                                    <input type="radio" value="boy" name="boy"
                                                        onClick={() => handleOptionSelect(2)} />
                                                    <button>👦 Boy</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="button-block" value={gender} onClick={(e) => { setGender(e.target.value) }}>
                                                    <input type="radio" value="girl" name="girl"
                                                        onClick={() => handleOptionSelect(2)} />
                                                    <button>👧 Girl</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="progresbar-block">
                                        <div className="progress-bar">
                                            <div style={{ width: 25 + '%' }}></div>
                                        </div>

                                        <span>Step 1 of 4</span>
                                    </div>
                                </div>
                            )}
                            {currentStep === 2 && (
                                <div className="story-step-form" id="step2" >
                                    <div className="body-popup-title">
                                        <h3>Select Age</h3>
                                    </div>
                                    <div className="button-list-form">
                                        <ul>
                                            {agegroup && agegroup.map((item, index) => (
                                                <li key={index}>
                                                    <div className="button-block" value={item.name} onChange={() => handleAgeChange(item.name)} >
                                                        <input type="radio"
                                                            value={item.name} name={item.name}
                                                            onClick={() => handleOptionSelect(3)} />
                                                        <button>{item.name} yrs </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="progresbar-block">
                                        <div className="progress-bar">
                                            <div style={{ width: 50 + '%' }}></div>
                                        </div>
                                        <span>Step 2 of 4</span>
                                    </div>
                                </div>
                            )}
                            {currentStep === 3 && (
                                <div className="story-step-form" id="step3" >
                                    <div className="body-popup-title">
                                        <h3>Select Genre </h3>
                                    </div>
                                    <div className="button-list-form">
                                        <ul>
                                            {genres && genres.map((item, index) => (
                                                <li key={index}>
                                                    <div className="button-block" value={item.name} onChange={(e) => setGenre(e.target.value)}>
                                                        <input type="radio" value={item.name} name={item.name}
                                                            onClick={() => handleOptionSelect(4)} />
                                                        <button>{item.name}</button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="progresbar-block" >
                                        <div className="progress-bar">
                                            <div style={{ width: 75 + '%' }}></div>
                                        </div>
                                        <span>Step 3 of 4</span>
                                    </div>
                                </div>
                            )}
                            {currentStep === 4 && (
                                loading ? (
                                    showSuccess && (
                                        <div className="succes" id="successpopup" >
                                            <Modal.Body>
                                                <div className="story-step-form">
                                                    <div className="body-popup-title">
                                                        <svg width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M105.438 13.9374C90.2517 14.0025 78.9628 16.0936 70.7938 19.7076C64.6979 22.4029 62.3125 24.4424 62.3125 31.3513V103.781C71.6495 95.3583 79.9354 92.9999 112.625 92.9999V13.9374H105.438ZM12 13.9374C27.1858 14.0025 38.4747 16.0936 46.6438 19.7076C52.7397 22.4029 55.125 24.4424 55.125 31.3513V103.781C45.788 95.3583 37.5021 92.9999 4.8125 92.9999V13.9374H12Z" fill="url(#paint0_linear_109_238)" />
                                                            <defs>
                                                                <linearGradient id="paint0_linear_109_238" x1="1.14541" y1="30.2726" x2="117.174" y2="39.3206" gradientUnits="userSpaceOnUse">
                                                                    <stop stop-color="#4B69E2" />
                                                                    <stop offset="1" stop-color="#9054D9" />
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                        <h3>Please wait! while your story is being generated </h3>
                                                    </div>
                                                </div>

                                            </Modal.Body>
                                        </div>
                                    )
                                ) : (
                                    <div className="story-step-form" id="step4">
                                        <div className="body-popup-title">
                                            <h3>Enter Prompt</h3>
                                        </div>
                                        <div className="button-list-form">
                                            <div className="email-field">
                                                <input
                                                    placeholder="Enter Prompt"
                                                    name="title"
                                                    value={userTitle}
                                                    type="text"
                                                    onChange={(e) => setUserTitle(e.target.value)}
                                                    className="input_field"
                                                    id=" "
                                                />
                                                <button type="submit" name="Generate" onClick={() => generateStory()}> Generate </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}

                        </Modal.Body>
                    </div>
                </Modal>
            </>
        </>


    );
}
export default StoryModal;
