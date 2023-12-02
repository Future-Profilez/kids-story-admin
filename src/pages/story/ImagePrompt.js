import { Modal } from "react-bootstrap";
import "../../style/model.css";
import { useState, useRef } from "react";
import recordimage from "../../image/story-thubnail.png";
import Story from "../../Apis/Story";

function ImagePrompt({ imageprompt }) {
    const [prompt, setPrompt] = useState(imageprompt);
    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isClicked, setIsClicked] = useState(false);
    const [imageBase64, setImageBase64] = useState('');
    const imageRef = useRef(null);
    const [updatedImage, setUpdatedImage] = useState(recordimage);

    const fetchData = async () => {
        const bearerToken = 'vk-1qfZB3V2De7daqhYUCXV2280hF89d3ac2gMzFZ5ILp7OAFE2oB';
        const url = 'https://api.vyro.ai/v1/imagine/api/generations';
        const formData = new FormData();
        formData.append('model_version', '1');
        formData.append('prompt', `${prompt} also modify image prompt`);
        formData.append('style_id', '30');
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { Authorization: `Bearer ${bearerToken}` },
                body: formData,
            });

            if (response.ok) {
                const blob = await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setUpdatedImage(imageUrl);
                setIsLoading(false);
                setIsClicked(true);

                const reader = new FileReader();
                reader.onload = () => {
                    const base64data = reader.result;
                    setImageBase64(base64data);
                };
                reader.readAsDataURL(blob);
            } else {
                console.error('Error in image converting:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleRegenerate = () => {
        setIsLoading(true);
        fetchData();
    };

    const handleContinue = () => {
        setModalShow(false);
    };

    return (
        <>
            <div onClick={() => setModalShow(true)}>
                <img src={updatedImage} alt="story" />
            </div>

            <Modal show={modalShow} onHide={() => setModalShow(false)} id="generat-story" className="image-generate modal-dialog-image">
                <div className="closebtn" onClick={() => setModalShow(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <circle cx="21" cy="21" r="21" fill="#0B1024" />
                        <path d="M15.4 28L14 26.6L19.6 21L14 15.4L15.4 14L21 19.6L26.6 14L28 15.4L22.4 21L28 26.6L26.6 28L21 22.4L15.4 28Z" fill="white" />
                    </svg>
                </div>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-image">
                        <div className="body-popup-title"><h3>Generate Image</h3></div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoading ? (
                        <>
                            <div className="date-field-story">
                                <input
                                    type="text"
                                    placeholder="Image Prompt"
                                    name="data"
                                    defaultValue={prompt}
                                    className="input_field form-control"
                                    id="password_field"
                                />
                            </div>
                            <div className="text-center">
                                <button className="btn blue-gradient-btn" onClick={fetchData}>
                                    Generate
                                </button>
                            </div>
                        </>
                    ) : (
                        isClicked ? (
                            <div className="thumbnail-generating">
                                <img src={updatedImage} alt="story" />
                                </div>
                        ) : (
                            <div className="thumbnail-generating">
                                <div className="image-loader">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5C6.41015 3.5 3.5 6.41015 3.5 10Z" fill="url(#paint0_angular_563_396)" />
                                        <defs>
                                            <radialGradient id="paint0_angular_563_396" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(90) scale(10)">
                                                <stop stop-color="#9054D9" />
                                                <stop offset="1" stop-color="#A04DFF" stop-opacity="0" />
                                            </radialGradient>
                                        </defs>
                                    </svg>
                                    Image Generating...
                                </div>
                                <img ref={imageRef} src={Story} alt="story" />
                            </div>
                        )
                    )}
                    <div className="d-flex justify-content-around gap-3">
                        {isClicked && (
                            <div className="btn-list">
                                <button className="btn blue-gradient-btn" onClick={handleRegenerate}>
                                    <span>Regenerate</span>
                                </button>
                                <button className="btn blue-gradient-btn" onClick={handleContinue}>
                                    <span>Continue</span>
                                </button>
                            </div>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImagePrompt;
