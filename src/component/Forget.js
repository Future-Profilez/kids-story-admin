import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import image from "../image/login.png";
import "../style/login.css";
import Story from "../Apis/Story";
import { toast } from 'react-hot-toast';

function Forget() {

    const [password, setPassword] = useState({
        forgetemail: ""
    })

    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setPassword((prevState) => ({ ...prevState, [name]: value }));
    };

    async function handleForms(e) {
        e.preventDefault();
        const main = new Story();
        const response = main.forget();
        console.log("response", response);
        response.then((res) => {
            console.log("res", res)
        }).catch((error) => { console.log("erorr", error) })

    }


    return (
        <>

            <style jsx>
                {`div#body-pd { padding: 0;}`}
            </style>

            <div className="login">
                <div className="background-img">
                    <Image src={image} className="img-fluid" alt="Responsive image" />
                </div>
                <div className="login-form">
                    <h1>StoryScape!</h1>
                    <div className="form_middle">

                        <div className="title_container">
                            <h3>Forget your Password?</h3>
                        </div>
                        <div className="input_container">
                            <label className="input_label form-contol" htmlFor="email_field">
                                Email
                            </label>
                            <input
                                placeholder="Email"
                                name="forgetemail"
                                onChange={handleInputs}
                                value={password.forgetemail}
                                type="text"
                                className="input_field form-control"
                                id="email_field"
                            />
                        </div>
                        <div className="text-center">
                            <button
                                className="btn blue-gradient-btn" onClick={handleForms}>
                                <span >Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Forget;

