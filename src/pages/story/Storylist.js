import { Image } from "react-bootstrap";
import Story from "../../image/story-thubnail.png";
import "../../style/story.css";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import ImagePrompt from "./ImagePrompt";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Storylist(props) {

    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    console.log("users",users)
    const data = {
        title: "Tit for Tat in Space",
        cover_image: "Image of a starry sky with a small spaceship",
        story_info: {
            character_info: ["DummyBoy", "DummyGirl"],
            theme: "Space",
            moral: "What goes around comes around",
        },
        chapters: [
            {
                chapter_no: 1,
                title: "'A Spatial Ride'",
                content:
                    "DummyBoy and DummyGirl set off on their first interstellar adventure, exploring the wonders of the cosmos in their spaceship.",
                image_prompt: "Image of a spaceship taking off into a starry sky",
            },
            {
                chapter_no: 2,
                title: "'Star Tip Discovery'",
                content:
                    "When they finally find the Star Tip, they are delighted to discover its unique properties. DummyBoy, always curious and inventive, wants to take a small piece of it back home.",
                image_prompt: "Image of the toddlers looking at the Star Tip in awe",
            },
            {
                chapter_no: 3,
                title: "'The Warning'",
                content:
                    "Suddenly, a space creature appears, warning them not to take anything from the Star Tip. However, the toddlers, eager and stubborn, ignored the warning and took a piece anyway.",
                image_prompt: "Image of the space creature warning the toddlers",
            },
            {
                chapter_no: 4,
                title: "'The Consequence'",
                content:
                    "As soon as they reached home, their spaceship would not function as usual – a consequence of taking from the Star Tip.",
                image_prompt: "Image of a broken down spaceship",
            },
            {
                chapter_no: 5,
                title: "'The Lesson Learned'",
                content:
                    "They finally understood the space creature's warning and realized that everything in the universe is interconnected. You cannot take without giving in return.",
                image_prompt: "Image of the toddlers returning the piece",
                moral:
                    "This incident taught DummyBoy and DummyGirl an important lesson, especially when they guard the balance of the universe.",
            },
        ],
    };

    console.log("data", data);

    const [show, setShow] = useState(false);
    const [imagePrompt, setImagePrompt] = useState("");

    const handleClose = () => setShow(false);

    const handleShow = (image_prompt) => {

        setImagePrompt(image_prompt);
        setShow(true);
    };

    console.log("imagePrompt", imagePrompt)
    const handleGenerateImage = (image_prompt) => {
        console.log("Generated Image Prompt:", image_prompt);
    };

    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    const handleShowContinue = () => setShowContinue(true);

    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content ">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                {data.chapters.map((item, key) => (
                                    <div className="story-list" key={key}>
                                        <h2>

                                            Chapter {item.chapter_no}:-{item.title}
                                        </h2>
                                        <p>{item.content}</p>
                                        <div className="thubnail">
                                            <Image
                                                src={Story}
                                                alt="story"
                                                onClick={() => handleShow(item.image_prompt)}
                                            />
                                        </div>
                                    </div>
                                ))}

                                <div className="btn-list">
                                    <button className="btn blue-gradient-btn">
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
                    {/* data={imagepropmt}  */}
                    <ImagePrompt
                        show={show}
                        handleClose={handleClose}
                        onGenerateImage={handleGenerateImage}
                        imagePrompt={imagePrompt}
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
                                <div className="btn blue-gradient-btn">
                                    <span>Confirm & Continue</span>
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
