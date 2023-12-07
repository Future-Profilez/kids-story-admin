import { Modal } from "react-bootstrap";
import Story from "../../Apis/Story"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

function Schedule({record,getStoryUID }) {
    const navigate = useNavigate();
    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    const handleShowContinue = () => setShowContinue(true);

    const [loading, setLoading] = useState(null);
    const users = useSelector(state => state.users.users);
    let chaptersdata = [];
    if (users.length > 0) {
      chaptersdata = users.at(-1);
    } else {
      chaptersdata = users[0];
    }
    console.log("chaptersdata",chaptersdata)

  
    let extractdata =[];
  if (chaptersdata) {
      extractdata = chaptersdata;
    } else {
      extractdata = chaptersdata.data;
  }

  console.log("extractdata",extractdata)
    const [Regs, setRegs] = useState({
        "age": extractdata.age,
        "title":extractdata.title,
        "gender":  extractdata.gender,
        "genre":  extractdata.genre,
        "schedule_at": "",
        "name":  extractdata.name,
        "stories":extractdata.chapters,
    });


    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(()=>{
        console.table(Regs);
    },[Regs]);

    async function handleForms(e) {
        e.preventDefault();
        setLoading(true);
        const main = new Story();
        try {
            const response = await main.Scheduledate(Regs);
            if (response.data.status) {
                handleCloseContinue();
                toast.success("Story added successfully.");
                getStoryUID(response.data.data.id);
            } else {
                toast.error("Failed to add story !!");
            }
        } catch (error) {
            console.error("API Error:", error);
            toast.error("An error occurred while adding the story.");
        } finally {
            setLoading(false);
        }
    }
    

    return (
        <>
            <button className="btn blue-gradient-btn" onClick={handleShowContinue}>
                <span>Schedule</span>
            </button>
            <Modal show={showContinue} onHide={handleCloseContinue} id="generat-story">
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>StoryScape!</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="body-popup-title"><h3>When do you want to publish this story?</h3></div>
                    <div className="date-field-story" >
                        <input type="date" placeholder="Year/Month/Date" className="input_field  form-control" name="schedule_at"
                            id="password_field" value={Regs.schedule_at} onChange={handleInputs} />
                    </div>
                    <div className="text-center">
                        <div className="btn blue-gradient-btn" onClick={handleForms} >
                            <span>{loading ? "Adding..." : 'Schedule'}  </span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Schedule;