import { Image, Modal } from "react-bootstrap";
import "../../style/model.css";
import { useState, useRef, useEffect } from "react";
import Story from "../../image/story-thubnail.png";
import imageAi from "../../Apis/imageAi";
//import users from "../../Data/data.json";
import prompt from "../../Data/image.json";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import Ai from "../../Apis/Ai";
import { adduser } from "../../Redux/UserSlice";

function ReStory({ shows, handleCloses }) {

    // console.log("User", users)

    const users = useSelector(state => state.users.users);
    console.log("redux", useSelector(state => state.users.users))
    console.log("users", users)
    const record = users[0]
    console.log("records", record)

    const dispatch = useDispatch();

    const [userTitle, setUserTitle] = useState(record.title);
    const [card, setCard] = useState();
    const [age, setAge] = useState(record.age);
    const [gender, setGender] = useState(record.gender);
    const [genre, setGenre] = useState(record.genre);
    const [loading, setLoading] = useState(false)


    let storyres = null;

    console.log("age", age, "gender", gender, "genre", genre, "userTitle", userTitle)

    const handleGenerate = async () => {
        try {
            if (userTitle && age && gender && genre) {
                setLoading(true);
                const promptData = {
                    message: "Generate a children's story with the following parameters",
                    userTitle: userTitle ,
                    age: age,
                    gender: gender,
                    genre: genre,
                    boy: "DummyBoy",
                    description: "Please provide content for five chapters, including subtitles, content, and an image prompt. Ensure that the fifth chapter always has a moral of the story. Store the data in one variable 'data' where inside 'data', there should be 'title', 'age', 'gender', 'genre', and 'chapters'. 'chapters' should be an array containing objects for each chapter with the properties: chapter number, title, content, and image prompt. Provide the response in JSON format.",
                };
                
                const requestData = {
                    model: 'gpt-4',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a storyteller.',
                        },
                        {
                            role: 'user',
                            content: JSON.stringify(promptData),
                        },
                    ],
                };
                console.log(
                    "prompt ",promptData
                )
                Ai.post("/completions", requestData)
                    .then((res) => {
                        const storyResponse = res.data.choices[0].message.content;
                        console.log("storyResponse", storyResponse);
                        try {
                            const Parstory = JSON.parse(storyResponse);
                            console.log("parstory", Parstory);
                            storyres = Parstory;
                            console.log("storyres",storyres)
                            const datastory = dispatch(adduser(Parstory))
                            console.log("datastory", datastory);
                            const data = setCard(storyres);
                            console.log("data", data);
                            setTimeout(() => {
                                navigate('/list');
                            }, 1000);
                        } catch (error) {
                            console.log("Error parsing JSON:", error);
                        }
                    })
                    .catch((error) => {
                        console.log("error", error);
                        setLoading(false);
                    });
            }
        } catch (error) {
            console.log("Error", error);
        }
    };
    useEffect(() => {
        setLoading(false);
    }, [userTitle, age, gender, genre]);
    useEffect(() => {
        console.log("Card =>>>>>>>>>>>>>>>>>>:", card);
    }, [card]);

    const navigate = useNavigate();



    // function handleGenerate(){

    //     navigate("/list")
    // }
    return (<>
        <Modal show={shows} onHide={handleCloses} id="generat-story" className="modal-dialog-image">
            <Modal.Header closeButton>
                <Modal.Title className="modal-image">
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
                <div className="story-step-form" id="step4">
                    <div className="body-popup-title">
                        <h3>Enter Prompt</h3>
                    </div>
                    <div className="button-list-form">
                        <div className="email-field">
                            <input
                                placeholder="Enter Prompt"
                                name="title"
                                value={userTitle}
                                type="text"
                               onChange={(e) => setUserTitle(e.target.value)}
                                className="input_field"
                                id=" "
                            />
                            <button type="submit" name="Generate" onClick={() => handleGenerate()}>Generate</button>
                        </div>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    </>);
}

export default ReStory;