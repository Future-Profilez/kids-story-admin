import {  Modal } from "react-bootstrap";
import "../../style/model.css";
import { toImage, Image } from './Image';
import { useState, useRef, useEffect } from "react"; // Import useRef
import Story from "../../image/story-thubnail.png";
import imageAi from "../../Apis/imageAi";
import prompt from "../../Data/image.json";
//import client from "imaginesdk";
// import GenerationStyle from "imaginesdk";
// import Status from "imaginesdk";
// import { client} from "imaginesdk";
//import { client, GenerationStyle, Status } from "imaginesdk";

function ImagePrompt({ show, handleClose,handleShow, imagePrompt, onGenerateImage }) {
    const [data, setData] = useState("");
    const [modalShow, setModalShow] = useState(show);
    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef(null);
    const handleImageLoad = () => {
        setIsLoading(true);
    }; 


    const  imagePromptstatic = 'DummyBoy and DummyGirl in their spaceship, looking at an unknown alien galaxy'



    // const binaryImageData = prompt;

    // console.log("binaryImageData", binaryImageData)
    //const base64ImageString = btoa(binaryImageData);

    //  console.log("base64ImageString", base64ImageString);


    //    const blob = new Blob([binaryImageData], { type: 'image/png' });
    //            console.log("blob00",blob)

    //              const imageUrl = URL.createObjectURL(blob);

    //                console.log("imageUrl",imageUrl)

    // useEffect(() => {
    //      const blob = new Blob([binaryImageData], { type: 'image/png' });
    //      console.log("blob00",blob);
    //      const downloadLink = document.createElement('a');
    //      console.log("downloadLink",downloadLink);
    //      const data =  downloadLink.href = URL.createObjectURL(blob);
    //      console.log("data",data)
    //      const recoird =  downloadLink.download = 'D:\kids-story-admin\src\image';
    //    console.log("recoird",recoird)
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    //     return () => URL.revokeObjectURL(downloadLink.href);
    // }, [binaryImageData]);

    // const handleDownload = () => {
    //     const blob = new Blob([imageSource], { type: 'image/png' });
    //     console.log("blog", blob)
    //     const downloadLink = document.createElement('a');
    //     console.log("downloadLink", downloadLink);
    //     const baseName = 'image';
    //     const timestamp = new Date().getTime();
    //     const fileName = `/${baseName}_${timestamp}.png`;
    //     console.log("fileName", fileName)
    //     const data = fileName;
    //     console.log("data", data)
    //     setImageUrl(data)
    //     const url = URL.createObjectURL(blob);
    //     console.log("url ", url);
    //     downloadLink.href = url;
    //     downloadLink.download = fileName;
    //     document.body.appendChild(downloadLink);
    //     downloadLink.click();
    //     document.body.removeChild(downloadLink);
    //     const reboke = URL.revokeObjectURL(url);
    //     console.log("reboke", reboke)
    // };
    // useEffect(() => {
    //     handleDownload();
    // }, [imageSource]);


    const [imageUrl, setImageUrl] = useState(null);



    // /generations
    const handleGenerateImage = async () => {
        setIsLoading(true);
      
        try {
          const formData = new FormData();
          formData.append('prompt', imagePromptstatic);
          formData.append('style_id', '30');
      
          const response = await imageAi.post("/generations", formData, {
            headers: {
              'Content-Type': 'multipart/form-data', 
            },
          });
      
          console.log("response", response);
          const imageAA = response.getOrThrow();
          console.log("imageAA", imageAA);


        } catch (error) {
          console.error('Error generating image:', error);
        } finally {
          setIsLoading(false);
        }
      };
      
    // const handleGenerateImage = async () => {
    //     setIsLoading(true);
    //     try {
    //       const response = await imageAi.post("/generations", {
    //         // model_version: '1',
    //         prompt: imagePromptstatic,
    //         style_id: '30',
    //       });
    //         console.log("response",response)
    
    //     //   const imageData = response.data; 


    //     //   const arrayBuffer = new TextEncoder().encode(imageData).buffer;
    //     //   const image= toImage(arrayBuffer);
    //     //   onGenerateImage(image.buffer());
    //     //   setImageUrl(image.asImageSrc());
    //     } catch (error) {
    //       console.error('Error generating image:', error);
    //     } finally {
    //       setIsLoading(false);
    //     }

    //   };

    useEffect(() => {
        setData(imagePrompt);
        setModalShow(show);
    }, [show]);

    return (
        <>
            <Modal show={true} onHide={handleClose} id="generat-story" className="modal-dialog-image">
                <Modal.Header closeButton>
                    <Modal.Title className="modal-image">
                        <div className="body-popup-title"><h3>Generate Image</h3></div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="date-field-story">
                        <input
                            type="text"
                            placeholder="Image Prompt"
                            value={imagePromptstatic}
                            name="data"
                            onChange={(e) => setData(e.target.value)}
                            className="input_field form-control"
                            id="password_field"
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn blue-gradient-btn" onClick={handleGenerateImage}>
                            Generate
                        </button>
                    </div>

                    <div className="d-flex justify-content-around gap-3">
                        {isLoading ? (
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
                                <img ref={imageRef} src={Story} alt="story" onLoad={handleImageLoad} />
                                {/* {imageUrl && <img src={imageUrl} alt="Generated Image"   onLoad={handleImageLoad}/>} */}
                            </div>
                        ) : (
                            <>
                                {imageUrl && <img src={imageUrl} alt="Generated Image" onLoad={handleImageLoad} />}
                                <div className="text-center mt-3" >
                                    <button className="btn blue-gradient-btn"  onClick={() => handleShow()}>
                                        Re-Generate
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImagePrompt;
