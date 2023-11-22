import { Image, Modal } from "react-bootstrap";
import "../../style/model.css";
import { useState, useRef, useEffect } from "react"; // Import useRef
import Story from "../../image/story-thubnail.png";
import imageAi from "../../Apis/imageAi";
import prompt from "../../Data/image.json";
function Regenerate({shows, handleCloses,  }) {
    const[data,setData]= useState();
    function handleGenerate(){
    }
    return ( <>
     <Modal show={shows} onHide={handleCloses} id="generat-story" className="modal-dialog-image">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-image">
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
                <div className="story-step-form" id="step4">
                                        <div className="body-popup-title">
                                            <h3>Enter Prompt</h3>
                                        </div>
                                        <div className="button-list-form">
                                            <div className="email-field">
                                                <input
                                                    placeholder="Enter Prompt"
                                                    name="title"
                                                    // value={userTitle}
                                                    type="text"
                                                    // onChange={(e) => setUserTitle(e.target.value)}
                                                    className="input_field"
                                                    id=" "
                                                />
                                                <button type="submit" name="Generate" onClick={() => handleGenerate()}>Generate</button>
                                            </div>
                                        </div>
                                    </div>

                </Modal.Body>
            </Modal>
    </> );
}

export default Regenerate;