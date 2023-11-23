import React, { useContext, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "../../style/model.css"
import Ai from "../../Apis/Ai"
import genres from '../../Data/genre.json'
import agegroup from "../../Data/Age.json"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";
function StoryModal({ show, handleClose }) {

    const { setList, setName, name } = useContext(UserContext);
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

            if (user === 'boy') {
                setBoys('DummyBoy');
                setGirls('');
                setGender("DummyBoy")
            } else if (user === 'girl') {
                setGirls('DummyGirl');
                setBoys('');
                setGender("DummyGirl")

            }
        }
    };
    console.log("ss", Boys, girl);
    // const storyJSON = JSON.stringify(genres, null, 2);
    const handleAgeChange = (age) => {
        setAge(age);
        handleOptionSelect(3);
    };
    console.log("selectedUser", selectedUser)
    const [userTitle, setUserTitle] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [genre, setGenre] = useState('');
    const [loading, setLoading] = useState(false)

    // const storyRsponse = {
    //     "story": [
    //         {
    //             "chapter": "1",
    //             "subtitle": "The Cosmic Heist",
    //             "content": "In a far away galaxy, where advanced civilizations co-existed with alien species, our protagonists, DummyBoy, a seasoned space police officer passionately committed to upholding justice, and DummyGirl, a notorious inter-galactic thief known for her complicated heists, come into view. The chapter sets the stage revealing a heist in process, with DummyGirl attempting to steal precious celestial gems from a famed Space Museum.",
    //             "imageprompt": "A museum in outer space with shimmering celestial gem exhibits and two figures, one approaching stealthily, the other observing vigilantly."
    //         },
    //         {
    //             "chapter": "2",
    //             "subtitle": "The Chase",
    //             "content": "Upon the Space Police's alert, DummyBoy arrives at the scene only to find out that DummyGirl has successfully completed her heist. An intense chase begins, with DummyBoy using his cutting-edge spacecraft and space gadgets in attempt to capture the elusive DummyGirl. Despite his best efforts, the clever thief manages to escape his pursuit.",
    //             "imageprompt": "An action filled scene with two spaceships, engaged in a high speed chase amidst a dazzling display of pulsating nebulae and alien worlds."
    //         },
    //         {
    //             "chapter": "3",
    //             "subtitle": "The Confrontation",
    //             "content": "DummyBoy, finally manages to corner DummyGirl on the ice moon of a distant gas giant. With nowhere else to run, DummyGirl is confronted by DummyBoy. Despite facing arrest, DummyGirl remains stubbornly defiant and teases DummyBoy for his inability to apprehend her sooner.",
    //             "imageprompt": "A dramatic showdown on an icy moon, a bold silhouette of DummyGirl standing across DummyBoy."
    //         },
    //         {
    //             "chapter": "4",
    //             "subtitle": "A Change of Heart",
    //             "content": "In a surprising twist, DummyGirl confesses as to why she chose the life of a thief: she was doing it to provide for her impoverished family back in her home galaxy. This revelation prompts compassion in DummyBoy. He makes a choice - he decides to help DummyGirl and her family, by providing them a chance of legitimate means of survival, thus securing her promise of never resorting to stealing again.",
    //             "imageprompt": "A warm conversation scene on a colder moon, with a feeling of empathy, change, and a new hope."
    //         },
    //         {
    //             "chapter": "5",
    //             "subtitle": "The Redemption",
    //             "content": "This chapter revolves around the redemption of DummyGirl. With the help of DummyBoy, she and her family get a new lease of life based on a honest livelihood. DummyGirl's transformation serves as an inspiration for others, showing that it's never too late to rectify one's mistakes. The moral firmly communicated is, 'Everyone deserves a second chance. Understanding, compassion and help can change a person's life.'",
    //             "imageprompt": "A picturesque image of DummyGirl and her family living happily in their peaceful home, with an aura of contentment and satisfaction, signifying the end of a journey and the beginning of a new one."
    //         }
    //     ]
    // }
    //    console.log("storyRsponse", storyRsponse.story)
    //     const redd = setList(storyRsponse);
    //       console.log("redd", redd);
    const [card, setCard] = useState(null)
    const navigate = useNavigate()


    let storyres = null;
    const generateStory = async () => {
        try {
            if (userTitle && age && gender && genre) {
                setLoading(true);


                const promptData = {
                    message: "Generate a children's story with the following parameters",
                    title: userTitle,
                    age: age,
                    gender: gender,
                    genre: genre,

                    description: " Please provide the content for five chapters, including subtitles, content, and an image prompt. Ensure that the fifth chapter always has a moral of the story. Store the data in one variable 'data' where inside 'data', there should be 'title','','age', 'gender', 'genre', and 'chapters'. 'chapters' should be an array containing objects for each chapter with the properties: chapternumber, title, content, and imageprompt. Provide the response in JSON format",
                };

                // const promptData = {
                //     title: userTitle,
                //     age: age,
                //     gender: gender,
                //     genre: genre,
                //     boy:Boys,
                //     girl:girl,
                //     description: "Please provide the content for five chapters, including subtitles, content, and an image prompt. Ensure that the fifth chapter always has a moral of the story. Store the data  in  one variable 'data'in this variable inside age , gender,genre  one variable named 'chapter' and include all chapter details following this pattern: chapternumber, title, content, and imageprompt. Finally, provide the response in JSON format.",
                // };
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
                            const Parstory = JSON.parse(storyResponse);
                            console.log("parstory", Parstory);
                            storyres = Parstory;
                            const datastory = setList(Parstory);
                            console.log("datastory", datastory);
                            const data = setCard(storyres);
                            console.log("data", data);
                            setTimeout(() => {
                                navigate('/list');
                            }, 1000);
                        } catch (error) {
                            console.log("Error parsing JSON:", error);
                        }
                    })
                    .catch((error) => {
                        console.log("error", error);
                        setLoading(false);
                    });
            }
        } catch (error) {
            console.log("Error", error);
        }
    };


    useEffect(() => {
        setLoading(false);
    }, [userTitle, age, gender, genre]);



    useEffect(() => {
        console.log("Card =>>>>>>>>>>>>>>>>>>:", card);
    }, [card]);

    // const addStory= () => { 

    //     console.log("prev",generatedStory);
    // }

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
                                <h2>StoryScape! {name}</h2>
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
                    <button className="addStory" onClick={() => setName("Hello 4")}>{name}Add Stroy</button>

                </Modal>
            </>
        </>


    );
}

export default StoryModal;
