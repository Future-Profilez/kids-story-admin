import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Ai from "../../Apis/Ai";
import { adduser } from "../../Redux/UserSlice";
import { toast } from 'react-hot-toast';
import Story from "../../Apis/Story";

function ReStory({ shows, handleCloses }) {

  const [users] = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userTitle, setUserTitle] = useState("");
  const [card, setCard] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  let chaptersdata = [];
  if (users.length > 0) {
    chaptersdata = users.at(-1);
  } else {
    chaptersdata = users;
  }


  let extractdata = [];
  if (chaptersdata) {
    extractdata = chaptersdata;
  } else {
    extractdata = chaptersdata.data;
  }


  const [imagekey, setImagekey] = useState(process.env.REACT_APP_KEY);
    useEffect(()=>{
        const main = new Story();
        const response = main.getdetilas();
        response.then((res) => {
            setImagekey(res.data.image_api_key);
        }).catch((error) => {
            console.log("error", error)
        });
    },[]);

  useEffect(() => {

    setUserTitle(extractdata.title);
    setCard(extractdata.card);
    setAge(extractdata.age);
    setGender(extractdata.gender);
    setGenre(extractdata.genre);
    setName(extractdata.name);
  }, []);



  let storyres = null;

  const generateStory = async () => {
    try {
      if (userTitle && age && gender && genre && name) {
        setLoading(true);
        const promptData = {
          message: "Generate a children's story with the following parameters",
          userTitle: userTitle,
          age: age,
          gender: gender,
          genre: genre,
          name: name,
          description:
            "Please provide content for five chapters, including subtitles, content, and an image prompt. Ensure that the fifth chapter always has a moral of the story. Store the data in one variable 'data' where inside 'data', there should be 'title', 'name', 'age', 'gender', 'genre', and 'chapters'. 'chapters' should be an array containing objects for each chapter with the properties: chapternumber, title, content, and imageprompt. Provide the response in JSON format.",
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

        Ai.post("/completions", requestData)
          .then((res) => {
            const storyResponse = res.data.choices[0].message.content;
            console.log("storyResponse", storyResponse);
            try {
              let jsonMatch;
              if (storyResponse && storyResponse.data) {
                jsonMatch = storyResponse.data.match(/\{(.|\n)*\}/);
              } else {
                jsonMatch = storyResponse.match(/\{(.|\n)*\}/);
              }
              console.log("jsonMatch", jsonMatch)
              let Parstory;
              if (jsonMatch && jsonMatch.length > 0) {
                Parstory = JSON.parse(jsonMatch[0]);
              } else {
                toast.error("Failed to generate a story.Please try with diffrent prompt.")
                return false;
              }
              console.log("parstory", Parstory);
              const datastory = dispatch(adduser(Parstory));
              console.log("datastory", datastory);
              const data = setCard(Parstory);
              console.log("setCard", data);
              setTimeout(() => {
                if (Parstory && Parstory.title) {
                  navigate('/list');
                }
              }, 1000);
              handleCloses();
              setLoading(false);
            } catch (error) {
              toast.error("please provide valid prompt ")
              console.log("Error parsing JSON:", error);
            }
            setLoading(false);
          })
          .catch((error) => {
            toast.error("error", error);
            console.log("error", "Some went wrong !!");
            setLoading(false);
          });
      }
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
      toast.error("Failed to complete the API request. Please try again.");
    }
  }

  useEffect(() => {
    setLoading(false);
  }, [userTitle, age, gender, genre]);
  useEffect(() => {
  }, [card]);

  return (
    <Modal show={shows} onHide={handleCloses} id="generat-story" className="modal-dialog-image" >
      <Modal.Header closeButton>
        <div className="closebtn" onClick={handleCloses}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
            <circle cx="21" cy="21" r="21" fill="#0B1024" />
            <path d="M15.4 28L14 26.6L19.6 21L14 15.4L15.4 14L21 19.6L26.6 14L28 15.4L22.4 21L28 26.6L26.6 28L21 22.4L15.4 28Z" fill="white" />
          </svg>
        </div>
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
        {loading ? (
          <div className="succes" id="successpopup" >
            <Modal.Body>
              <div className="story-step-form">
                <div className="body-popup-title">
                  <svg width="115" height="116" viewBox="0 0 115 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M105.438 13.9374C90.2517 14.0025 78.9628 16.0936 70.7938 19.7076C64.6979 22.4029 62.3125 24.4424 62.3125 31.3513V103.781C71.6495 95.3583 79.9354 92.9999 112.625 92.9999V13.9374H105.438ZM12 13.9374C27.1858 14.0025 38.4747 16.0936 46.6438 19.7076C52.7397 22.4029 55.125 24.4424 55.125 31.3513V103.781C45.788 95.3583 37.5021 92.9999 4.8125 92.9999V13.9374H12Z" fill="url(#paint0_linear_109_238)" />
                    <defs>
                      <linearGradient id="paint0_linear_109_238" x1="1.14541" y1="30.2726" x2="117.174" y2="39.3206" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#4B69E2" />
                        <stop offset="1" stop-color="#9054D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <h3>Please wait! while your story is being generated </h3>
                </div>
              </div>

            </Modal.Body>
          </div>
        ) : (
          <div className="story-step-form">
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
                <button type="submit" name="Generate" onClick={() => generateStory()}>
                  Re-Generate
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
}

export default ReStory;
