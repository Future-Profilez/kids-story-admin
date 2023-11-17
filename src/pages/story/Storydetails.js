import { Image, Modal } from "react-bootstrap";
import Data from "../../image/list.png";
import story from "../../image/card.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Story from "../../Apis/Story";

function Storydetails({ show, handleClose, uuid }) {
    console.log("UUID received in Storydetails:", uuid);
    const [content, setContent] = useState({})

    useEffect(() => {
        const fetchStoryDetails = () => {
            if (uuid) {
                const main = new Story();
                const response = main.Storydetilas(uuid);
                response.then((res) => {
                    setContent(res?.data?.data);
                }).catch((error) => {
                    console.log("error", error)
                })
            }
        };

        fetchStoryDetails();
    }, [uuid]);


    const fetchStoryDelete = () => {
        if (uuid) {
            const main = new Story();
            const response = main.storydelete(uuid);
            response.then((
                res
            ) => {console.log("res",res)
                handleClose();
            }).catch((error) => {
                console.log("error", error)
            })
            handleClose();
        }
    };




    return (
        <>
            <Modal show={show} onHide={handleClose} id="reschedule-popup">
                <Modal.Body>
                    <div className="reschedule-story">
                        <div className="row">
                            <div className="col-md-6">
                                <Image src={content?.story_img } alt="img" />
                            </div>
                            <div className="col-md-6">
                                <div className="heading d-flex justify-content-between">
                                    <div className="closebtn" onClick={handleClose}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                            <circle cx="21" cy="21" r="21" fill="#0B1024" />
                                            <path d="M15.4 28L14 26.6L19.6 21L14 15.4L15.4 14L21 19.6L26.6 14L28 15.4L22.4 21L28 26.6L26.6 28L21 22.4L15.4 28Z" fill="white" />
                                        </svg>
                                    </div>
                                    <div className="heading-graph">
                                        <h6><span> {content?.genre_name} </span> </h6>
                                        <p>{content?.title}</p>
                                    </div>

                                </div>
                                <div className="add-line">
                                </div>
                                <div className="description">
                                    <h5>Description</h5>
                                    <p>
                                        {content?.story_description}
                                    </p>
                                </div>
                                <div className="reschedule-action">
                                    <div className="btn blue-gradient-btn">
                                        <span>
                                            Reschedule Story
                                        </span>
                                    </div>
                                   <button button className="delete-button" onClick={fetchStoryDelete}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {content && content?.story_chapter && content?.story_chapter?.map((item, index) => (
                                <div className="story-list" key={index}>

                                    <h2>Chapter {item?.chapter_no}: {item?.title}</h2>
                                    <p>
                                        {item?.description}
                                    </p>
                                    <Image src={item?.image } alt="story" />
                                </div>
                            ))}
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Storydetails;
