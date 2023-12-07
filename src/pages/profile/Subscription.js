import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/subscription.css";
import Subscriptionadd from "./Subscriptionadd";
import { useEffect, useState } from "react";
import Story from "../../Apis/Story";
import Loading from "../../component/Loading";
function Subscription() {
    const navigate = useNavigate();
    const handleShow = () => {
        setShow(true);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const main = new Story();
            const response = await main.Subscriptionlist();
            setContent(response?.data?.data);
            setLoading(false);
        } catch (error) {
            console.log("error", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    const handleSubscriptionAdded = async (newSubscription) => {
        console.log("Subscription added:", newSubscription);
       // await fetchData();
        handleClose();
    };
    return (
        <>
            <AuthLayout>
            <div className="content-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="story-title">
                                    <div className="row align-items-center">
                                        <div className="col-md-12">
                                            <h6>Manage Subscription</h6>
                                        </div>
                                        {/* <div className="col-md-8">
                                            <div className="sub-button text-end" >
                                                <Link to="#" onClick={handleShow} className="btn dark-background-btn">
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
                                                    </svg> <span>Add Subscription Plan</span>
                                                </Link>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>

                                <div className="row">
                                    {loading ? (
                                      <Loading/>
                                    ) : (
                                        content && content.map((item, index) => (
                                            <div className="col-md-4" key={index}>
                                                <div className="subscription-data">
                                                    <div className="sub-data">
                                                        <div className="sub-parg">
                                                            <h4>{item.package_name} </h4>
                                                            <p>{item.price}/{item.story_period_type || "Week"}</p>
                                                        </div>
                                                        <Link to="" className="sub-dot">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M3.33398 9.99996C3.33398 10.221 3.42178 10.4329 3.57806 10.5892C3.73434 10.7455 3.9463 10.8333 4.16732 10.8333C4.38833 10.8333 4.60029 10.7455 4.75657 10.5892C4.91285 10.4329 5.00065 10.221 5.00065 9.99996C5.00065 9.77895 4.91285 9.56698 4.75657 9.4107C4.60029 9.25442 4.38833 9.16663 4.16732 9.16663C3.9463 9.16663 3.73434 9.25442 3.57806 9.4107C3.42178 9.56698 3.33398 9.77895 3.33398 9.99996ZM9.16732 9.99996C9.16732 10.221 9.25512 10.4329 9.4114 10.5892C9.56768 10.7455 9.77964 10.8333 10.0007 10.8333C10.2217 10.8333 10.4336 10.7455 10.5899 10.5892C10.7462 10.4329 10.834 10.221 10.834 9.99996C10.834 9.77895 10.7462 9.56698 10.5899 9.4107C10.4336 9.25442 10.2217 9.16663 10.0007 9.16663C9.77964 9.16663 9.56768 9.25442 9.4114 9.4107C9.25512 9.56698 9.16732 9.77895 9.16732 9.99996ZM15.0007 9.99996C15.0007 10.221 15.0884 10.4329 15.2447 10.5892C15.401 10.7455 15.613 10.8333 15.834 10.8333C16.055 10.8333 16.267 10.7455 16.4232 10.5892C16.5795 10.4329 16.6673 10.221 16.6673 9.99996C16.6673 9.77895 16.5795 9.56698 16.4232 9.4107C16.267 9.25442 16.055 9.16663 15.834 9.16663C15.613 9.16663 15.401 9.25442 15.2447 9.4107C15.0884 9.56698 15.0007 9.77895 15.0007 9.99996Z" stroke="#444E73" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>

                                                        </Link>
                                                    </div>
                                                    <div className="bottom-line"></div>
                                                    <div className="subscription-detail">
                                                        <ul>
                                                            <li>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                                                    <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
                                                                </svg> {item.story_per_day} story <span> per day  </span>
                                                            </li>
                                                            <li>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                                                    <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
                                                                </svg>{item.access_profiles} Kids  <span> Profile  </span>
                                                            </li>
                                                            <li>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                                                    <path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white" />
                                                                </svg>{item.story_expire_days} Story deleted in <span> 7 Days </span>
                                                            </li>
                                                        </ul>

                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscriptionadd show={show} handleClose={handleClose}  onSubscriptionAdded={handleSubscriptionAdded}/>
            </AuthLayout>
        </>
    );
}

export default Subscription;
