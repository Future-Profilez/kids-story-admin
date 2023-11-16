import { useState } from "react";
import { Modal } from "react-bootstrap";
import Story from "../../Api/Story";
import { Toaster, toast } from 'react-hot-toast';


function Subscriptionadd({ show, handleClose, onSubscriptionAdded }) {

  const initialRegs = {
    package_name: "",
    price: "",
    story_time_period: "1",
    story_per_day: "",
    access_profiles: "",
    story_expire_days: "",
    story_period_type: "day"
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
        const response = await main.Subscription(Regs);
        console.log("API Response:", response);
        toast.success(response.data.message);

        if (onSubscriptionAdded) {
            onSubscriptionAdded(response.data.data); 
        }
    } catch (error) {
        console.error("API Error:", error);
    }
}



  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Modal show={show} onHide={handleClose} id="generat-story">
        <Modal.Header closeButton id="subscription-header">
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
              <div className="form-group" >
                <label for="exampleInputPassword1">Price</label>
                <div className="row">
                  <div className="form-group  col-md-8">
                    <input type="text" className="form-control" placeholder="" name="price" value={Regs.price} onChange={handleInputs} />
                  </div>
                  <div className="form-group  col-md-4">
                    <select className="form-control" name="story_period_type" value={Regs.story_period_type} onChange={handleInputs} >
                      <option value="day" className="custom-option">Day </option>
                      <option value="week" className="custom-option">Week </option>
                      <option value="month" className="custom-option">Month</option>
                      <option value="year" className="custom-option">Year</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">How Many Stories per day?</label>
                <input type="text" className="form-control" placeholder="" name="story_per_day" value={Regs.story_per_day} onChange={handleInputs} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">How many access to kids profile? </label>
                <input type="text" className="form-control " placeholder="" name="access_profiles" value={Regs.access_profiles} onChange={handleInputs} />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">How many days later story will expire ? </label>
                <input type="text" className="form-control" placeholder="" name="story_expire_days" value={Regs.story_expire_days} onChange={handleInputs} />
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