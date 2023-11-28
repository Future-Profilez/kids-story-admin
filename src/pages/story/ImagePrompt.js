import { Modal } from "react-bootstrap";
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

function ImagePrompt({ show, handleClose, imageprompt }) {
    const [data, setData] = useState("");
    const [modalShow, setModalShow] = useState(show);
    const [isLoading, setIsLoading] = useState(true);
    const imageRef = useRef(null);
    const handleImageLoad = () => {
        setIsLoading(true);
    };
    //const  imagePromptstatic = 'DummyBoy and DummyGirl in their spaceship, looking at an unknown alien galaxy'
    const [imageBase64, setImageBase64] = useState('');

    //   As File Output
    //   if (response.ok) {
    //     const blob = await response.blob();
    //     const url = window.URL.createObjectURL(blob);
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', 'image.jpg');
    //     document.body.appendChild(link);
    //     link.click();
    //     link.parentNode.removeChild(link);
    //   } else {
    //     console.error('Error:', response.status);
    //   }

    //base 64 Code 
    //         if (response.ok) {
    //             const blob = await response.blob();
    //             const reader = new FileReader();
    //             reader.onload = () => {
    //                 const base64data = reader.result;
    //                 setImageBase64(base64data); 
    //               };
    //    reader.readAsDataURL(blob);

    //           } else {
    //             console.error('Error:', response.status);
    //           }


    // if (response.ok) {
    //     const responseData = await response;
    //     console.log("responseData",responseData)
    //     const { image_url } = responseData;
    //     console.log("image_url",image_url)
    //   } else {
    //     console.error('Error:', response.status);
    //   }
    const [ImageUrl, setImageUrl] = useState('');

    const fetchData = async () => {
      const bearerToken = 'vk-kBBP9gJoFQhvBVjNefJj6Cno2zUDAPcyQE3E2rAgcq9RMix';
      const url = 'https://api.vyro.ai/v1/imagine/api/generations';
      const formData = new FormData();
      formData.append('model_version', '1');
      formData.append('prompt', imageprompt);
      formData.append('style_id', '30');
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${bearerToken}`,
          },
          body: formData,
        });
  
        if (response.ok) {
          const blob = await response.blob();
          const imageUrl = URL.createObjectURL(blob); 
          console.log("image",imageUrl)
          // Create image URL from blob
          setImageUrl(imageUrl); // Set the image URL to state
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    // const fetchData = async () => {
    //     const bearerToken = 'vk-kBBP9gJoFQhvBVjNefJj6Cno2zUDAPcyQE3E2rAgcq9RMix';
    //     const url = 'https://api.vyro.ai/v1/imagine/api/generations';
    //     const formData = new FormData();
    //     formData.append('model_version', '1');
    //     formData.append('prompt', imageprompt);
    //     formData.append('style_id', '30');

    //     try {
    //         const response = await fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 Authorization: `Bearer ${bearerToken}`,
    //             },
    //             body: formData,
    //         });
    //         //   As File Output
    //         if (response.ok) {
    //             const blob = await response.blob();
    //             const url = window.URL.createObjectURL(blob);
    //             const link = document.createElement('a');
    //             link.href = url;
    //             link.setAttribute('download', 'image.jpg');
    //             document.body.appendChild(link);
    //             link.click();
    //             link.parentNode.removeChild(link);
    //         } else {
    //             console.error('Error:', response.status);
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

    console.log("imageBase64", ImageUrl)

    useEffect(() => {
        setData(imageprompt);
        setModalShow(show);
    }, [show]);
    return (
        <>
            <Modal show={show} onHide={handleClose} id="generat-story" className="modal-dialog-image">
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
                            value={imageprompt}
                            name="data"
                            onChange={(e) => setData(e.target.value)}
                            className="input_field form-control"
                            id="password_field"
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn blue-gradient-btn" onClick={fetchData}>
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
                             <img src={ImageUrl} alt="Generated"  onLoad={handleImageLoad} />

                                <div className="text-center mt-3" >
                                    <button className="btn blue-gradient-btn"    onClick={() => fetchData}>
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
