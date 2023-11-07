import { Modal } from "react-bootstrap";

function Subscriptionadd({ show, handleClose }) {
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
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group ">
                <label for="exampleInputPassword1" >Price(in week)</label>
                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">How Many Stories per day?</label>
                <input type="text" className="form-control" placeholder="" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">How many access to kids profile? </label>
                <input type="text" className="form-control " placeholder="" />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">How many days later story will expire ? </label>
                <input type="text" className="form-control" placeholder="" />
              </div>

              <div className="text-center">
                <button type="submit" className="btn blue-gradient-btn"><span>Add Subscription   </span></button>
              </div>
            </form>

          </div>

        </Modal.Body>

      </Modal>

    </>);
}

export default Subscriptionadd;