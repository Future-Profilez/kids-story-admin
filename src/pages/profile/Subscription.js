import { Link } from "react-router-dom";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/subscription.css";
import Subscriptionadd from "./Subscriptionadd";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
function Subscription() {
    const handleShow = () => {
        console.log("Button clicked");
        setShow(true);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="subscription">
                                    <h2>Manage Subscription</h2>
                                    <div className="sub-button">
                                        <Link to="#" onClick={handleShow}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                            >
                                                <path
                                                    d="M8.25 9.75H3.75V8.25H8.25V3.75H9.75V8.25H14.25V9.75H9.75V14.25H8.25V9.75Z"
                                                    fill="url(#paint0_linear_96_87)"
                                                />
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear_96_87"
                                                        x1="3.39286"
                                                        y1="5.65909"
                                                        x2="14.7139"
                                                        y2="6.39478"
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stop-color="#4B69E2" />
                                                        <stop offset="1" stop-color="#9054D9" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <p>Add Subscription Plan</p>
                                        </Link>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-4 subscription-data">
                                        <div className="sub-data">
                                            <div className="sub-parg">
                                                <p>Starter</p>
                                                <p>0.99/Week</p>
                                            </div>
                                            <div className="sub-dot">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M3.33337 9.99935C3.33337 10.2204 3.42117 10.4323 3.57745 10.5886C3.73373 10.7449 3.94569 10.8327 4.16671 10.8327C4.38772 10.8327 4.59968 10.7449 4.75596 10.5886C4.91224 10.4323 5.00004 10.2204 5.00004 9.99935C5.00004 9.77834 4.91224 9.56637 4.75596 9.41009C4.59968 9.25381 4.38772 9.16602 4.16671 9.16602C3.94569 9.16602 3.73373 9.25381 3.57745 9.41009C3.42117 9.56637 3.33337 9.77834 3.33337 9.99935ZM9.16671 9.99935C9.16671 10.2204 9.2545 10.4323 9.41079 10.5886C9.56707 10.7449 9.77903 10.8327 10 10.8327C10.2211 10.8327 10.433 10.7449 10.5893 10.5886C10.7456 10.4323 10.8334 10.2204 10.8334 9.99935C10.8334 9.77834 10.7456 9.56637 10.5893 9.41009C10.433 9.25381 10.2211 9.16602 10 9.16602C9.77903 9.16602 9.56707 9.25381 9.41079 9.41009C9.2545 9.56637 9.16671 9.77834 9.16671 9.99935ZM15 9.99935C15 10.2204 15.0878 10.4323 15.2441 10.5886C15.4004 10.7449 15.6124 10.8327 15.8334 10.8327C16.0544 10.8327 16.2663 10.7449 16.4226 10.5886C16.5789 10.4323 16.6667 10.2204 16.6667 9.99935C16.6667 9.77834 16.5789 9.56637 16.4226 9.41009C16.2663 9.25381 16.0544 9.16602 15.8334 9.16602C15.6124 9.16602 15.4004 9.25381 15.2441 9.41009C15.0878 9.56637 15 9.77834 15 9.99935Z" stroke="#444E73" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="bottom-line"></div>
                                        <div className="subscription-detila">
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                                    <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
                                                </svg>1 story <span> per day  </span>
                                            </p>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                                    <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
                                                </svg>5 Kids  <span> Profile  </span>
                                            </p>
                                            <p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                                    <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
                                                </svg>1 Story deleted in <span> 7 Days </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 subscription-data">Element 2</div>
                                    <div className="col-md-4 subscription-data">Element 3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <Subscriptionadd show={show} handleClose={handleClose} />
            
            </AuthLayout>
        </>
    );
}

export default Subscription;
