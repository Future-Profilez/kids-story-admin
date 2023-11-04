import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "../../style/model.css"
function StoryModal({ show, handleClose }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const handleOptionSelect = (nextStep) => {
        if (nextStep >= 1 && nextStep <= 4) {
            setCurrentStep(nextStep);
            if (nextStep === 4) {
                setShowSuccess(true);
            } else {
                setShowSuccess(false);
            }

        }


    };

    const handleGenerateClick = () => {
        setShowSuccess(true);
    };




    const [userPrompt, setUserPrompt] = useState('');
    const [age, setAge] = useState('child');
    const [gender, setGender] = useState('boy');
    const [genre, setGenre] = useState('adventure');
    const [storyData, setStoryData] = useState(null);



    return (
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
                                        <div className="button-block">
                                            <input checked type="radio" value="1" name="male"

                                                onClick={() => handleOptionSelect(2)} />
                                            <button>👦 Boy</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="1" name="male"

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
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="years1" name="years"
                                                onClick={() => handleOptionSelect(3)} />
                                            <button>3 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="years2" name="years" />
                                            <button>4 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="years3" name="years" />
                                            <button>5 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="years4" name="years" />
                                            <button>6 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="years5" name="years" />
                                            <button>7 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="years6" name="years" />
                                            <button>8 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="1" name="years" />
                                            <button>9 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="1" name="years" />
                                            <button>10 yrs </button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="1" name="years" />
                                            <button>11 yrs </button>
                                        </div>
                                    </li>
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
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="Genre1" name="Genre"
                                                onClick={() => handleOptionSelect(4)} />
                                            <button>Space</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="Genre2" name="Genre" />
                                            <button>Adventure</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="Genre3" name="Genre" />
                                            <button>Animals</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="Genre4" name="Genre" />
                                            <button>Fairy Tales</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="Genre5" name="Genre" />
                                            <button>Superhero</button>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="button-block">
                                            <input type="radio" value="Genre6" name="Genre" />
                                            <button>Pirates</button>
                                        </div>
                                    </li>
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
                        <div className="story-step-form" id="step4" >
                            <div className="body-popup-title">
                                <h3>Enter Prompt</h3>
                            </div>
                            <div className="button-list-form">
                                <div className="email-field">
                                    <input
                                        placeholder="Enter Prompt"
                                        name="email"
                                        // onChange={handleInputs}
                                        // value={Regs.email}
                                        type="email"
                                        className="input_field"
                                        id=" "
                                    />
                                    <button type="submit" name="Generate" onClick={handleGenerateClick} > Generate </button>
                                </div>
                            </div>
                            <div className="progresbar-block" >
                                <div className="progress-bar">
                                    <div style={{ width: 100 + '%' }}></div>
                                </div>
                                <span>Step 4 of 4</span>
                            </div>
                        </div>
                    )}


                </Modal.Body>
            </div>
            {showSuccess && (
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
            )}

            {/* <Modal.Footer>

            </Modal.Footer> */}
        </Modal>
    );
}

export default StoryModal;
