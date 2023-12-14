import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import image from "../image/login.png";
import "../style/login.css";

function Forget() {

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
                                name="email"
                                onChange=""
                                value=""
                                type="email"
                                className="input_field form-control"
                                id="email_field"
                            />
                        </div>
                        <div className="text-center">
                            <button 
                                className="btn blue-gradient-btn" >
                                <span>Submit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default Forget;

