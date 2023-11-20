import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "../../style/model.css"
import Ai from "../../Apis/Ai"
import genres from '../../Data/genre.json'
import agegroup from "../../Data/Age.json"
import { useNavigate } from "react-router-dom";
function StoryModal({ show, handleClose }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [selectedUser, setSelectedUser] = useState('');

    const [Boys, setBoys] = useState("DummyBoy")
    const [girl, setGirls] = useState("DummyGirl")

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



    const storyJSON = JSON.stringify(genres, null, 2);


    const handleAgeChange = (age) => {
        setAge(age);
        handleOptionSelect(3);
    };

    const [userTitle, setUserTitle] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [genre, setGenre] = useState('');
    const [loading, setLoading] = useState(false)

    const [card, setCard] = useState(null)
    const navigate = useNavigate()


    let storyres = null
    const generateStory = async () => {
        try {
            if (userTitle && age && gender && genre) {
                setLoading(true);
                const prompt =
                    `Title: ${userTitle}\nAs an  boyname: ${Boys}  girlname:${girl} age : ${age}year ,gender :${gender}, 
                    I would like to read a ${genre} story. ${userTitle} . 
                    Please provide five chapters with subtitles, content, and imageprompt, 
                    ensuring that the fifth chapter always conveys the moral of the story five chapert in one variable store the data . give response in json format.`
                //const prompt = `what is capital of india. Format it in JSON.`;
                const requestData = {
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a storyteller.',
                        },
                        {
                            role: 'user',
                            content: prompt,
                        },
                    ],
                };
                Ai.post("/completions", requestData)
                    .then((res) => {
                        const storyResponse = res.data.choices[0].message.content;
                        console.log("storyResponse", storyResponse);
                        const Parstory = JSON.parse(storyResponse);
                        localStorage.setItem("cart",Parstory)
                        console.log("Parstory", Parstory);
                        storyres = Parstory;
                        setCard(storyres);
                        navigate('/list');
                    }).catch((error) => {
                        console.log("error", error);
                        setLoading(false);
                    });
            }
        } catch (error) {

            console.log("Error", error)
        }

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
                <Modal show={show} onHide={handleClose} id="generat-story">
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
                                                <button type="submit" name="Generate" onClick={() => generateStory()}>Generate</button>
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
