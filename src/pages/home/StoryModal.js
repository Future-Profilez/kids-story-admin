import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../../style/model.css"
function StoryModal({ show, handleClose }) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <g opacity="0.5">
                            <path d="M18 31H21V25H27V31H30V22L24 17.5L18 22V31ZM16 33V21L24 15L32 21V33H25V27H23V33H16Z" fill="white" />
                            <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="white" />
                        </g>
                    </svg>
                    <h2>StoryScape!</h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h2 className="title_container">Enter Prompt </h2>
                <div className="input_container">
                    <input
                        placeholder="Email"
                        name="email"
                        // onChange={handleInputs}
                        // value={Regs.email}
                        type="text"
                        className="input_field"
                        id="email_field"
                    />
                </div>

            </Modal.Body>
            <Modal.Footer>

            </Modal.Footer>
        </Modal>
    );
}

export default StoryModal;
