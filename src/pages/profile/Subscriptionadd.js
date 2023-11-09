import { useState } from "react";
import { Modal } from "react-bootstrap";
import Story from "../../api/Story";

function Subscriptionadd({ show, handleClose }) {

  const initialRegs = {
    package_name: "",
    price: "",
    story_time_period: "",
    story_per_day:"",
    access_profiles:"",
    story_expire_days:"",
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
        const main = new Story();
        console.log("main", main);
        const response = await main.Subscription(Regs);
        console.log("res", response);
        // if (response.data.status === "true") {
        //     toast.success(response.data.message);
        //     setRegs(initialRegs);
        //     navigate("/")
        // }else{
        //     toast.error(response.data.message)
        // }
    } catch (error) {
        console.log("error", error);
     //   toast.error("An error occurred. Please try again.");
    }
}


  return (
    <>
      <Modal show={show} onHide={handleClose} id="generat-story">
        <Modal.Header closeButtonv id="subscription-header">
          <Modal.Title className="modal-title">When do you want to publish this story?</Modal.Title>
          <div className="add-line"></div>
        </Modal.Header>
        <Modal.Body>
          <div className="subscription-add">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Package Name</label>
                <input type="text" className="form-control" placeholder="" name="package_name" value={Regs.package_name} onChange={handleInputs} />
              </div>
              <div className="form-group ">
                <label for="exampleInputPassword1" >Price(in week)</label>
                <input type="text" className="form-control" placeholder=""  name="price" value={Regs.price} onChange={handleInputs}  />
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">How Many Stories per day?</label>
                <input type="text" className="form-control" placeholder=""  name="story_per_day" value={Regs.story_per_day} onChange={handleInputs} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">How many access to kids profile? </label>
                <input type="text" className="form-control " placeholder="" name="access_profiles" value={Regs.access_profiles} onChange={handleInputs}  />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">How many days later story will expire ? </label>
                <input type="text" className="form-control" placeholder=""  name="story_time_period" value={Regs.story_time_period} onChange={handleInputs} />
              </div>

              <div className="text-center">
                <button type="submit" className="btn blue-gradient-btn" onClick={handleForms}><span>Add Subscription   </span></button>
              </div>
            </form>

          </div>

        </Modal.Body>

      </Modal>

    </>);
}

export default Subscriptionadd;