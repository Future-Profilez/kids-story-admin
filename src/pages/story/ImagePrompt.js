import { Modal } from "react-bootstrap";
import "../../style/model.css";
import { useState, useRef } from "react";
import recordimage from "../../image/story-thubnail.png";
import Story from "../../Apis/Story";
import toast from "react-hot-toast";


function ImagePrompt({ image_url, customclass, custom, imageprompt, uid, chapter,showImagePromptModal }) {
    const [prompt, setPrompt] = useState(imageprompt);
    console.log("Prompt ", prompt);
    const [modalShow, setModalShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [imageBase64, setImageBase64] = useState('');
    const imageRef = useRef(null);
    const [updatedImage, setUpdatedImage] = useState(recordimage);
    const [finalImage, setFinalImage] = useState(recordimage);
    const imagekey = process.env.REACT_APP_IMAGE;
    const [uploading, setUploading] = useState(false);
    
    const [showPrompt, setShowPrompt] = useState(false);

    const [existed,setexisted] = useState(image_url);
   
    async function addImage(base64) {
        setUploading(true);
    
        const main = new Story();
    
        try {
            const resp = await main.saveimage({
                "story_uuid": uid,
                "chapter_no": chapter,
                "imageBase64": base64,
            });
    
            if (resp.data.status) {
                console.log("res", resp);
                setModalShow(false);
                setFinalImage("final image url.");
            } else {
                toast.error("Error");
            }
        } catch (error) {
            console.error("API Error:", error);
            toast.error("An error occurred while saving the image.");
        } finally {
            setUploading(false);
        }
    }
    
    const usethis = () => {
        addImage(imageBase64);
        setFinalImage(updatedImage);
        setexisted(updatedImage)
    }

    const fetchData = async () => {
        // usethis();
        // console.log("uid",uid);
        // return false;
        if(uid){
            toast.error("Please schedule story first to generate image.")
        }
        setIsLoading(true);
        const bearerToken = 'vk-X8WKL5pkTBhhNvWxx3ILLrbLZ77wo8G1DWo887i6aPN0O';
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
                setShowPrompt(false)
                const reader = new FileReader();
                reader.onload = () => {
                    const base64data = reader.result;
                    setImageBase64(base64data);
                    console.log("base64data",base64data)
                };
                reader.readAsDataURL(blob);
            } else {
                console.error('Error in image converting:', response.status);
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setIsLoading(false);

        }
    };

    const handleRegenerate = () => {
         setIsLoading(true);
         setShowPrompt(true);
         fetchData();
        };

 


    return (
        <>
        {custom ? 
        <div>
            <img src={existed} alt="N/A" />
            <div className={customclass} onClick={() => setModalShow(true)}>{custom}</div>
        </div>
        : <div onClick={() => setModalShow(true)}>
            <img src={updatedImage} alt="story" />
        </div>}

        <Modal centered show={modalShow} onHide={() => setModalShow(false)} id="generat-story" className="image-generate modal-dialog-image">
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
            <Modal.Body className="d-flex align-items-center justify-content-center" >
            
                    {isLoading ?
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
                                <img ref={imageRef} src={recordimage} alt="story" />
                            </div>
                    :
                        isClicked ?
                            <div className="promtEdit w-100" >
                                <div className="thumbnail-generating w-100">
                                    <img src={updatedImage} alt="story" />
                                </div> 

                                <div className="btn-list">
                                <button className="btn blue-gradient-btn" onClick={handleRegenerate}>
                                <span>Regenerate</span>
                            </button>
                                <button className="btn blue-gradient-btn  mt-2" onClick={usethis} >{uploading ? "Uploading..." : "Use This Image"}</button>

                                </div>
                            </div>
                            :
                            !showPrompt && (
                                <div className="promtEdit w-100">
                                    <div className="date-field-story">
                                        <input
                                            type="text"
                                            placeholder="Image Prompt"
                                            name="data"
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            className="input_field form-control"
                                            id="password_field"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn blue-gradient-btn" onClick={fetchData}>
                                            Generate
                                        </button>
                                    </div>
                                </div>
                            )
                    }

                    
                    

                {/* {!isLoading ? (
                    <></>
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
                )}
s                <div className="d-flex justify-content-around gap-3">
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
                </div> */}
            </Modal.Body>
        </Modal>
    </>
    );
}

export default ImagePrompt;