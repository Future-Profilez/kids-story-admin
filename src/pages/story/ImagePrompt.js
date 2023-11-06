import { Modal } from "react-bootstrap";

function ImagePrompt({ show, handleClose }) {
    return (

        <>
            <Modal show={show} onHide={handleClose} id="generat-story">
                <Modal.Header closeButton>
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
                            <div className="form-data">
                                <div className="form-group">
                                    <label for="exampleInputPassword1" >Price</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" ></label>
                                    <input type="text" className="form-control data" placeholder="Week" />
                                </div>
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

                            <button type="submit" className="button"><span>Add Subscription   </span></button>
                        </form>

                    </div>

                </Modal.Body>
                {/* <Modal.Footer> */}

                {/* </Modal.Footer> */}
            </Modal>

        </>);
}

export default ImagePrompt;