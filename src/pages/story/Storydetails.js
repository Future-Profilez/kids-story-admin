import { Image, Modal } from "react-bootstrap";
import Data from "../../image/list.png";
import story from "../../image/card.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Story from "../../Api/Story";

function Storydetails({ show, handleClose }) {
const{uuid}=useParams();

console.log("uuid",uuid);

useEffect(()=>{
const main= Story();
const response= main.Storydetails(uuid);
console.log("response",response);
response.then((res)=>(
    console.log("res",res)
)).catch((error)=>(
    console.log("error",error)
))

},[uuid])

    return (
        <>
            <Modal show={show} onHide={handleClose} id="reschedule-popup">
                <Modal.Body>
                    <div className="reschedule-story">
                        <div className="row">
                            <div className="col-md-6">
                                <Image src={Data} alt="img" />
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
                                        <h6><span>Fairy Tales</span> </h6>
                                        <p>Pirate Story</p>
                                    </div>
                                    
                                </div>
                                <div className="add-line">
                                </div>
                                <div className="description">
                                    <h5>Description</h5>
                                    <p>
                                        Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always...
                                    </p>
                                </div>
                                <div className="reschedule-action">
                                    <div className="btn blue-gradient-btn">
                                        <span>
                                            Reschedule Story
                                        </span>
                                    </div>  
                                    <a href="#" className="delete-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white" />
                                        </svg>
                                    </a>
                                    </div> 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="story-list">
                                <h2>Chapter 1: The Pirate's Legacy</h2>
                                <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                <Image src={story} alt="story" />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Storydetails;
