import { Image } from "react-bootstrap";
import Story from "../../image/story-thubnail.png"
import "../../style/story.css"
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import ImagePrompt from "./ImagePrompt";
import { Modal } from "react-bootstrap";

import { useState } from "react";
import { useSelector, useStore } from "react-redux";
import { getData } from "../../redux/UserSlice";
function Storylist() {

    const Story = useSelector(getData);
    console.log("story", Story)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    const handleShowContinue = () => setShowContinue(true);


    return (
        <>

            <AuthLayout>
                <div className="content-wrapper">
                    {/* start content */}
                    <div className="content ">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="story-list">
                                    <h2>Chapter 1: The Pirate's Legacy</h2>
                                    <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                    <div className="thubnail">
                                        <Image src={Story} alt="story" onClick={handleShow} />
                                    </div>

                                </div>
                                <div className="story-list">
                                    <h2>Chapter 2: The Pirate's Legacy</h2>
                                    <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                    <div className="thubnail">
                                        <Image src={Story} alt="story" onClick={handleShow} />
                                    </div>

                                </div>
                                <div className="btn-list">
                                    <button className="btn blue-gradient-btn">
                                        <span>Regenerate Story</span>
                                    </button>
                                    <button className="btn blue-gradient-btn" onClick={handleShowContinue}>
                                        <span>Continue</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <ImagePrompt show={show} handleClose={handleClose} />

                    <Modal show={showContinue} onHide={handleCloseContinue} id="generat-story">
                        <Modal.Header closeButton style={{ borderTop: "1px solid rgba(255,255,255, 0.1)" }}>
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
                            <h5 className="text-center m-5">Are you sure you have read this story?</h5>
                            <div className="text-center">
                                <div className="btn blue-gradient-btn" >
                                    <span>
                                        Confirm & Continue
                                    </span>
                                </div>
                            </div>
                        </Modal.Body>
                        {/* <Modal.Footer> */}
                        {/* Your modal footer content */}
                        {/* </Modal.Footer> */}
                    </Modal>
                </div>
            </AuthLayout>

        </>



    );
}

export default Storylist;