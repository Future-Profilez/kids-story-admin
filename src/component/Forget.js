import React, { useState } from "react";
import { Image } from "react-bootstrap";
import image from "../image/login.png";
import "../style/login.css";
import Story from "../Apis/Story";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Forget() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [emails, setEmails] = useState({
        email: "",
    });

    const [newotp, setNewotp] = useState({
        emailotp: "",
    });

    const [status, setStatus] = useState(false);
    const [optStatus, setOptStatus] = useState(false);

    const handleInputs = (e) => {
        const { name, value } = e.target;
        if (status) {
            setNewotp((prevState) => ({ ...prevState, [name]: value }));
        } else {
            setEmails((prevState) => ({ ...prevState, [name]: value }));
        }
    };
    //email

    const handleForms = async (e) => {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Story();
        const response = main.forget(emails);
        response.then((res) => {
            if (res.data.status === true) {
                toast.success(res.data.message);
                setStatus(true);
            } else {
                toast.error(res.data.message);
            }
            setLoading(false);
        }).catch((error) => {
            console.log("error", error)
            setLoading(false);
            toast.error("Something went wrong !!");


        })
    };
    //opt
    const handleotp = async (e) => {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Story();
        const formData = new FormData();
        formData.append("reset_password_token", newotp.emailotp);
        formData.append("email", emails.email);
        const response =  main.forgetopt(formData);
        response.then((res) => {
            if (res.data.status === true) {
                toast.success(res.data.message);
                setOptStatus(true);
            } else {
                toast.error(res.data.message);
            }
            setLoading(false);
        }).catch((error) => {
            console.log("error", error)
            setLoading(false);
            toast.error("Something went wrong !!");
        })


    };


    //Forgetpassowerd

    const [forgetpass, setForgetpass] = useState({
        repassword: "",
        confirpass: ""
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForgetpass((prevState) => ({ ...prevState, [name]: value }));
        console.table("password", forgetpass)
    };

    const handleforgetpass = async (e) => {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Story();
        const formData = new FormData();
        formData.append("email", emails.email);
        formData.append("password", forgetpass && forgetpass.repassword);
        formData.append("confirm_password", forgetpass && forgetpass.confirpass);
        const response = main.forgetpass(formData);
        response.then((res) => {
            if (res.data.status === true) {
                toast.success(res.data.message);
                navigate('/')
            } else {
                toast.error(res.data.message)
            }
            setLoading(false);
        }).catch((error) => {
            console.log("eroir", error)
            toast.error("Something went wrong !!");
            setLoading(false);

        })
    };




    return (
        <>
            <style jsx>{`div#body-pd { padding: 0;}`}</style>
            <div className="login">
                <div className="background-img">
                    <Image src={image} className="img-fluid" alt="Responsive image" />
                </div>
                <div className="login-form">
                    <h1>TaleTreats!</h1>
                    <div className="form_middle">
                        <div className="title_container">
                            <h3>Forget Password ?</h3>
                        </div>
                        {status ? (
                            optStatus ? (
                                <>
                                    <div className="input_container">
                                        <label className="input_label form-contol" htmlFor="email_field">
                                            Password
                                        </label>
                                        <input
                                            placeholder="password"
                                            name="repassword"
                                            onChange={handleInput}
                                            value={forgetpass.repassword}
                                            type="text"
                                            className="input_field form-control"
                                            id="email_field"
                                        />
                                    </div>
                                    <div className="input_container">
                                        <label className="input_label form-contol" htmlFor="email_field">
                                            Confirm_Pasword
                                        </label>
                                        <input
                                            placeholder="Password"
                                            name="confirpass"
                                            onChange={handleInput}
                                            value={forgetpass.confirpass}
                                            type="text"
                                            className="input_field form-control"
                                            id="email_field"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn blue-gradient-btn" onClick={handleforgetpass} disabled={loading}>
                                        <span>{loading ? "Wait.." : "Submit"}</span>
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="input_container">
                                        <label className="input_label form-contol" htmlFor="email_field">
                                            OTP
                                        </label>
                                        <input
                                            placeholder="OTP"
                                            name="emailotp"
                                            onChange={handleInputs}
                                            value={newotp.emailotp}
                                            type="text"
                                            className="input_field form-control"
                                            id="email_field"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button className="btn blue-gradient-btn" onClick={handleotp} disabled={loading}>
                                        <span>{loading ? "Wait.." : "Submit"}</span>
                                        </button>
                                    </div>
                                </>
                            )
                        ) : (
                            <>
                                <div className="input_container">
                                    <label className="input_label form-contol" htmlFor="email_field">
                                        Email
                                    </label>
                                    <input
                                        placeholder="Email"
                                        name="email"
                                        onChange={handleInputs}
                                        value={emails.email}
                                        type="text"
                                        className="input_field form-control"
                                        id="email_field"
                                    />
                                </div>
                                <div className="text-center">
                                    <button className="btn blue-gradient-btn" onClick={handleForms} disabled={loading}>
                                    <span>{loading ? "Wait.." : "Submit"}</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Forget;
