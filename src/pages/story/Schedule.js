import { Image } from "react-bootstrap";
import data from "../../image/story-thubnail.png"
import "../../style/story.css"
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import { Modal } from "react-bootstrap";
import "../../style/model.css"
import Story from  "../../Apis/Story"


import { useState } from "react";
import toast from "react-hot-toast";

function Schedule() {

    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    const handleShowContinue = () => setShowContinue(true);
    const initialRegs = {
        age: 8,
        title: 'My Story',
        prompt: 'Write a story',
        genre_id: 1,
        gender: 'm',
        schedule_at: '',
        stories: [
          {
            title: 'Chapter 1',
            description: 'This is the first chapter',
            chapter_no: 1,
            image_prompt: 'Provide an image for this chapter',
           // image: 'chapter1.jpg',
          },
          {
            title: 'Chapter 1',
            description: 'This is the first chapter',
            chapter_no: 1,
            image_prompt: 'Provide an image for this chapter',
         //   image: 'chapter1.jpg',
          },
          {
            title: 'Chapter 1',
            description: 'This is the first chapter',
            chapter_no: 1,
            image_prompt: 'Provide an image for this chapter',
           // image: 'chapter1.jpg',
          },
          {
            title: 'Chapter 1',
            description: 'This is the first chapter',
            chapter_no: 1,
            image_prompt: 'Provide an image for this chapter',
           // image: 'chapter1.jpg',
          },
          {
            title: 'Chapter 1',
            description: 'This is the first chapter',
            chapter_no: 1,
            image_prompt: 'Provide an image for this chapter',
           // image: 'chapter1.jpg',
          }

        ],
      };
    
    
      const [Regs, setRegs] = useState(initialRegs);
    
      const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
        console.table(Regs);
      };
      async function handleForms(e) {
        e.preventDefault();
        try {
            console.log("Submitting data:", Regs);
            const main = new Story();
            const response = await main.Scheduledate(Regs);
            console.log("API Response:", response);
            handleCloseContinue();
            return false;
        } catch (error) {
            console.error("API Error:", error);
        }
    }
    



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
                                        <Image src={data} alt="story" />
                                    </div>

                                </div>
                                <div className="story-list">
                                    <h2>Chapter 2: The Pirate's Legacy</h2>
                                    <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                    <div className="thubnail">
                                        <Image src={data} alt="story" />
                                    </div>

                                </div>
                                <div className="btn-list">
                                    <button className="btn blue-gradient-btn" onClick={handleShowContinue}>
                                        <span>Schedule</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Modal show={showContinue} onHide={handleCloseContinue} id="generat-story">
                        <Modal.Header closeButton style={{ borderTop: "1px solid rgba(255,255,255, 0.1)" }}>
                            <Modal.Title> 
                                <h2>StoryScape!</h2>
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div class="body-popup-title"><h3>When do you want to publish this story?</h3></div>  
                            <div className="date-field-story" >
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="white" />
                                </svg>
                                </span>
                                <input type="date" placeholder="Year/Month/Date" className="input_field  form-control" name="schedule_at"
                                    id="password_field"  value={Regs.schedule_at} onChange={handleInputs}/>
                            </div>

                            <div className="text-center">
                                <div className="btn blue-gradient-btn" onClick={handleForms} >
                                    <span>
                                        Schedule
                                    </span>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </AuthLayout>

        </>);
}

export default Schedule;