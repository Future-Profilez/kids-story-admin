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

function ImagePrompt({ show, handleClose, imageprompt, text }) {

    const [imageView, setImageView] = useState(Story);
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
    // if (response.ok) {
    // const blob = await response.blob();
    // const reader = new FileReader();
    // reader.onload = () => {
    //     const base64data = reader.result;
    //     setImageBase64(base64data); 
    //     };
    // reader.readAsDataURL(blob);

    // } else {
    // console.error('Error:', response.status);
    // }


    // if (response.ok) {
    //     const responseData = await response;
    //     console.log("responseData",responseData)
    //     const { image_url } = responseData;
    //     console.log("image_url",image_url)
    //   } else {
    //     console.error('Error:', response.status);
    //   }
    const [ImageUrl, setImageUrl] = useState('');

    // const handleimageconfirm =()=>{
    //     navigate('/list')
    // }

    const fetchData = async () => {
      const bearerToken = 'vk-K2cD1h3kDNLUMGaTHyyCB6IBWPSYPK6Ye87iEzQ0A0sjm';
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
            const reader = new FileReader();
            reader.onload = () => {
                const base64data = reader.result;
                setImageBase64(base64data); 
            };
            reader.readAsDataURL(blob);
            // method 2

            const imageUrl = URL.createObjectURL(blob); 
            setImageView(imageUrl);
            console.log("image",imageUrl)
            setImageUrl(imageUrl); 
        } else {
            console.error('Error in image converting :', response.status);
        }

       
      } catch (error) {
        console.error('Error:', error);
      }
    };


    console.log("imageBase64", ImageUrl)
    useEffect(() => {
        setData(imageprompt);
        setModalShow(show);
    }, [show]);


    
    return (
        <>
            <div onClick={()=>setModalShow(true)} >
                {text}
            </div>
            <Modal show={show} onHide={handleClose} id="generat-story" className="image-generate modal-dialog-image">
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
                            </div>
                        ) : (
                            <>
                                <img src={imageView} alt="Generated" onLoad={handleImageLoad} />

                                <div className="text-center mt-3">
                                    <button className="btn blue-gradient-btn" >
                                        Confirm
                                    </button>
                                </div>
                                <div className="text-center mt-3">
                                    <button className="btn blue-gradient-btn" onClick={fetchData}>
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
