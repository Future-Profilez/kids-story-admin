import { Image } from "react-bootstrap";
import "../../style/story.css";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import { Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReStory from "./ReStroy";
import record from "../../Data/data.json"
import ImagePrompt from "./ImagePrompt";
import { genraorimage } from "../../Redux/UserSlice";
import Schedule from "./Schedule";

function Storylist() {

    const [storyUID, setStoryUID] = useState(null);

    const getStoryUID = (uid) =>{
        setStoryUID(uid);
        console.log("uid", uid);
    }
    const [story, setStory] = useState(record && record.data);
    const navigate = useNavigate();
    const users = useSelector(state => state.users.users);
    console.log("users", users.at(-1));
    let chaptersdata = [];

    if (users.length > 0) {
        chaptersdata = users.at(-1);
    } else {
        chaptersdata = users[0];
    }

    console.log("chaptersdata",chaptersdata)

    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    function Schedulecontinue() {
        navigate('/schedule')
    }
    const [shows, setShows] = useState(false);
    const handleCloses = () => setShows(false);
    const handleShows = () => setShows(true);

    const handleFinal  = () => { 
        navigate('/card');
    }

    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content ">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <h1 className="mb-3"> Title :- {chaptersdata && chaptersdata.title}   </h1>
                                {chaptersdata && chaptersdata.chapters && chaptersdata.chapters.map((item, key) => (
                                    <div className="story-list" key={key}>
                                        <h2> Chapter {item.chapternumber} :- {item.title} </h2>
                                        <p>{item.content}</p>
                                        {storyUID ?<> <div className="thubnail" >
                                            <ImagePrompt uid={storyUID} chapter={item && item.chapternumber} imageprompt={item.imageprompt} />
                                        </div></> :<div className="thubnail" >Please click the sechedule button  and schedule the story then after show imageprompt</div>}
                                       
                                    </div>
                                ))}

                                <div className="btn-list">
                                    {storyUID ? 
                                    <button className="btn blue-gradient-btn" onClick={ handleFinal}>
                                        <span>Done</span>
                                    </button>
                                    : <>
                                    <button className="btn blue-gradient-btn" onClick={() => handleShows()}>
                                        <span>Regenerate Story</span>
                                    </button>
                                    {/* <button
                                        className="btn blue-gradient-btn"
                                        onClick={handleShowContinue} >
                                        <span>Continue</span>
                                    </button> */}
                                    <Schedule getStoryUID={getStoryUID} record={story}  />
                                    </> 
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <ReStory shows={shows} handleCloses={handleCloses} />
                    <Modal
                        show={showContinue}
                        onHide={handleCloseContinue}
                        id="generat-story" >
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
