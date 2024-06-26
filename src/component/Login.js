import React, { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import image from "../image/login.png";
import { Link, useNavigate } from "react-router-dom";
import "../style/login.css";
import { Toaster, toast } from 'react-hot-toast';
import Story from "../Apis/Story";
import { UserContext } from "../context/UserContextProvider";
function Login() {
    const navigate = useNavigate();
    const { setLoginUser } = useContext(UserContext);
    const [Regs, setRegs] = useState({
        password: "",
        email: "",

    });
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [loading, setLoading] = useState(false);

    async function handleForms(e) {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Story();
        try {
            const response = await main.Login(Regs);
            if (response?.data?.status === true) {
                setLoginUser(response?.data);
                localStorage.setItem("token", response?.data?.token);
                navigate("/ai");
                toast.success(response.data.message);
            } else {
                toast.error("invalid email/password");
            }
            setLoading(false);
        } catch (error) {
            console.log("error", error);
            toast.error("invalid Email/password");
            setLoading(false);
        }
    }

    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />

            <style jsx>
                {`div#body-pd { padding: 0;}`}
            </style>

            <div className="login">
                <div className="background-img">
                    <Image src={image} className="img-fluid" alt="Responsive image" />
                </div>
                <div className="login-form">
                    <h1>TaleTreats!</h1>
                    <div className="form_middle">

                        <div className="title_container">
                            <h3>Login to your Account</h3>
                        </div>
                        <div className="input_container">
                            <label className="input_label form-contol" htmlFor="email_field">
                                Email
                            </label>
                            <input
                                placeholder="Email"
                                name="email"
                                onChange={handleInputs}
                                value={Regs.email}
                                type="email"
                                className="input_field form-control"
                                id="email_field"
                            />
                        </div>
                        <div className="input_container">
                            <label className="input_label" htmlFor="password_field">
                                Password
                            </label>
                            <div className="passwaord-icon">
                                <input
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleInputs}
                                    value={Regs.password}
                                    type={showPassword ? "text" : "password"}
                                    className="input_field password form-control"
                                    id="password_field"
                                />
                                <div className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M20.25 21C20.1515 21.0002 20.0539 20.9808 19.9629 20.9431C19.8719 20.9054 19.7893 20.85 19.7198 20.7802L3.21982 4.28016C3.0851 4.13836 3.01111 3.94955 3.01361 3.75398C3.01612 3.55841 3.09492 3.37155 3.23322 3.23325C3.37152 3.09495 3.55838 3.01615 3.75395 3.01364C3.94952 3.01114 4.13833 3.08513 4.28013 3.21985L20.7801 19.7198C20.885 19.8247 20.9563 19.9583 20.9852 20.1038C21.0141 20.2492 20.9993 20.4 20.9426 20.537C20.8858 20.674 20.7897 20.7911 20.6665 20.8735C20.5432 20.9559 20.3983 20.9999 20.25 21ZM11.625 14.8055L9.19732 12.3778C9.18341 12.364 9.16552 12.3549 9.14618 12.3518C9.12684 12.3487 9.10701 12.3517 9.08948 12.3605C9.07194 12.3692 9.05759 12.3832 9.04843 12.4006C9.03927 12.4179 9.03577 12.4376 9.03841 12.457C9.13642 13.0869 9.43215 13.6692 9.88286 14.1199C10.3336 14.5706 10.9159 14.8664 11.5458 14.9644C11.5652 14.967 11.5849 14.9635 11.6022 14.9544C11.6196 14.9452 11.6336 14.9308 11.6423 14.9133C11.651 14.8958 11.6541 14.8759 11.651 14.8566C11.6479 14.8373 11.6388 14.8194 11.625 14.8055ZM12.375 9.19453L14.8064 11.625C14.8203 11.639 14.8382 11.6483 14.8576 11.6515C14.8771 11.6547 14.897 11.6517 14.9147 11.6429C14.9323 11.6342 14.9467 11.6201 14.9559 11.6026C14.9651 11.5852 14.9685 11.5653 14.9658 11.5458C14.868 10.9151 14.572 10.3319 14.1208 9.88062C13.6695 9.42933 13.0863 9.13339 12.4556 9.03563C12.4361 9.03261 12.4161 9.03585 12.3985 9.04487C12.3809 9.05389 12.3666 9.06824 12.3577 9.08586C12.3488 9.10349 12.3456 9.12348 12.3487 9.143C12.3518 9.16252 12.361 9.18055 12.375 9.19453Z" fill="#9054D9" />
                                            <path d="M23.0156 12.8137C23.1708 12.5702 23.2529 12.2872 23.252 11.9984C23.2512 11.7096 23.1675 11.4271 23.0109 11.1844C21.7706 9.26625 20.1614 7.63688 18.3577 6.47203C16.3594 5.18203 14.1562 4.5 11.985 4.5C10.8404 4.50157 9.7035 4.6882 8.61843 5.05266C8.58807 5.06276 8.56079 5.08046 8.5392 5.10409C8.51761 5.12772 8.50242 5.15647 8.49509 5.18763C8.48776 5.21878 8.48853 5.25129 8.49732 5.28207C8.50611 5.31284 8.52263 5.34085 8.54531 5.36344L10.7597 7.57781C10.7827 7.60086 10.8113 7.61752 10.8427 7.62615C10.8741 7.63478 10.9072 7.63508 10.9387 7.62703C11.6893 7.44412 12.4744 7.45752 13.2183 7.66595C13.9622 7.87438 14.6399 8.27082 15.1862 8.8171C15.7325 9.36338 16.1289 10.0411 16.3373 10.785C16.5458 11.5289 16.5592 12.3139 16.3762 13.0645C16.3683 13.096 16.3686 13.129 16.3773 13.1603C16.3859 13.1916 16.4025 13.2202 16.4255 13.2431L19.6106 16.4306C19.6438 16.4638 19.6881 16.4834 19.735 16.4855C19.7819 16.4876 19.8278 16.472 19.8637 16.4419C21.0898 15.3968 22.1522 14.1739 23.0156 12.8137ZM12 16.5C11.3188 16.5 10.6465 16.3454 10.0337 16.0478C9.42094 15.7502 8.88375 15.3173 8.46263 14.7819C8.04151 14.2464 7.74745 13.6223 7.60262 12.9567C7.45779 12.2911 7.46598 11.6012 7.62656 10.9392C7.63452 10.9077 7.63417 10.8747 7.62555 10.8434C7.61692 10.8121 7.60031 10.7836 7.57734 10.7606L4.44422 7.62609C4.41099 7.59283 4.36649 7.57327 4.31952 7.57127C4.27255 7.56927 4.22655 7.58499 4.19062 7.61531C3.04734 8.59078 1.9875 9.77766 1.01859 11.1647C0.84899 11.4081 0.755584 11.6965 0.750243 11.9931C0.744901 12.2897 0.827865 12.5813 0.988591 12.8306C2.22656 14.768 3.81937 16.3997 5.59547 17.5486C7.59656 18.8438 9.74625 19.5 11.985 19.5C13.1412 19.4969 14.2899 19.3143 15.39 18.9586C15.4206 18.9488 15.4482 18.9313 15.4702 18.9078C15.4921 18.8842 15.5076 18.8554 15.5152 18.8242C15.5227 18.7929 15.5222 18.7602 15.5134 18.7293C15.5047 18.6983 15.4882 18.6701 15.4655 18.6473L13.2403 16.4227C13.2174 16.3997 13.1888 16.3831 13.1575 16.3744C13.1262 16.3658 13.0932 16.3655 13.0617 16.3734C12.7141 16.4577 12.3577 16.5002 12 16.5Z" fill="#9054D9" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9054D9" class="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="forgetpassword">
                            <Link to="/forget">Forget Password ?</Link>
                        </div>
                        <div className="text-center">
                            <button disabled={loading}
                                onClick={handleForms}
                                className="btn blue-gradient-btn" >
                                <span>{loading ? "Wait.." : "Login"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;



