import { Image } from "react-bootstrap";
import Story from "../../image/story-thubnail.png";
import "../../style/story.css";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReStory from "./ReStroy";
import record from "../../Data/data.json"
import ImagePrompt from "./ImagePrompt";

function Storylist() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [imageprompt, setImagePrompt] = useState("");
    const navigate = useNavigate();
    const users = useSelector(state => state.users.users);
    console.log("users", users.at(-1));
    let chaptersdata = [];

    if (users.length > 0) {
        chaptersdata = users.at(-1);
    } else {
        chaptersdata = users[0];
    }
    //const records = chaptersdata.chapters;
    const records = record.chapters;
    console.log("chaptersdata", chaptersdata)
    const [imageUrl, setImageUrl] = useState("");
    console.log("ImageUrl", imageUrl)

    const handleShow = (imageprompt) => {
        setImagePrompt(imageprompt);
        setShow(true);
    };

    console.log("imageprompt", imageprompt)
    const [showContinue, setShowContinue] = useState(false);

    const handleCloseContinue = () => setShowContinue(false);

    const handleShowContinue = () => setShowContinue(true);

    console.log("imagePrompt", imageprompt)
    function Schedulecontinue() {
        navigate('/schedule')
    }
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content ">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                {records && records.map((item, key) => (
                                    <div className="story-list" key={key}>
                                        <h2>
                                            Chapter {item.chapternumber} :- {item.title}
                                        </h2>
                                        <p>{item.content}</p>
                                        <div className="thubnail">
                                            <img
                                                src={Story}
                                                alt="story"
                                                onClick={() => handleShow(item.imageprompt)}
                                            />
                                        </div>
                                    </div>
                                ))}
                                <div className="btn-list">
                                    <button className="btn blue-gradient-btn" onClick={() => handleShows()}>
                                        <span>Regenerate Story</span>
                                    </button>
                                    <button
                                        className="btn blue-gradient-btn"
                                        onClick={handleShowContinue}
                                    >
                                        <span>Continue</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReStory shows={shows}
                        handleCloses={handleCloses}
                    />
                    <ImagePrompt
                        show={show}
                        handleClose={handleClose}
                        imageprompt={imageprompt}
                    />
                    <Modal
                        show={showContinue}
                        onHide={handleCloseContinue}
                        id="generat-story"
                    >
                        <Modal.Header
                            closeButton
                            style={{ borderTop: "1px solid rgba(255,255,255, 0.1)" }}
                        >
                            <Modal.Title>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="48"
                                    height="48"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                >
                                    <g opacity="0.5">
                                        <path
                                            d="M18 31H21V25H27V31H30V22L24 17.5L18 22V31ZM16 33V21L24 15L32 21V33H25V27H23V33H16Z"
                                            fill="white"
                                        />
                                        <rect
                                            x="0.5"
                                            y="0.5"
                                            width="47"
                                            height="47"
                                            rx="23.5"
                                            stroke="white"
                                        />
                                    </g>
                                </svg>
                                <h2>StoryScape!</h2>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h5 className="text-center m-5">
                                Are you sure you have read this story?
                            </h5>
                            <div className="text-center">
                                <div className="btn blue-gradient-btn" onClick={Schedulecontinue}>
                                    <span>Confirm & Continue</span>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </AuthLayout>
        </>
    );
}

export default Storylist;
