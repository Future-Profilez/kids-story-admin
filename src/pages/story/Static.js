import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/story.css"
import "../../style/Static.css"  
import { useEffect, useState } from "react";
import Story from "../../Apis/Story";
import Chart from "./Chart";
import StoriesIcon  from "../../image/stories-icon.png";
import UserIcon  from "../../image/total-user.png";
import subscribersIcon  from "../../image/subscribers-icon.png";

function Static() {

    const [Contnet, setContent] = useState([])
    useEffect(() => {
        const main = new Story();
        const response = main.Static();
        response.then((res) => {
            setContent(res.data)
        }).catch((error) => {
            console.log("erorr", error)
        })
    }, [])
    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="story-title">
                                    <h6>Statistics </h6>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="static-one">
                                            <div className="static-svg" >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                <path d="M10 25C9.3125 25 8.72375 24.755 8.23375 24.265C7.74375 23.775 7.49917 23.1867 7.5 22.5V20C7.5 19.6458 7.62 19.3487 7.86 19.1087C8.1 18.8687 8.39667 18.7492 8.75 18.75H11.25V15.9375C10.625 15.8958 10.005 15.7654 9.39 15.5463C8.775 15.3271 8.23875 14.9992 7.78125 14.5625C7.65625 14.4375 7.5575 14.2967 7.485 14.14C7.4125 13.9833 7.37583 13.8221 7.375 13.6562V12.8125H6.46875C6.30208 12.8125 6.14083 12.7813 5.985 12.7188C5.82917 12.6562 5.68833 12.5625 5.5625 12.4375L2.75 9.625C2.5 9.375 2.375 9.08333 2.375 8.75C2.375 8.41667 2.5 8.125 2.75 7.875C3.35417 7.27083 4.16667 6.82833 5.1875 6.5475C6.20833 6.26667 7.14583 6.12583 8 6.125C8.5625 6.125 9.10958 6.16667 9.64125 6.25C10.1729 6.33333 10.7092 6.48958 11.25 6.71875C11.25 6.23958 11.4167 5.83333 11.75 5.5C12.0833 5.16667 12.4896 5 12.9688 5H23.75C24.4375 5 25.0263 5.245 25.5163 5.735C26.0063 6.225 26.2508 6.81333 26.25 7.5V21.25C26.25 22.2917 25.8854 23.1771 25.1562 23.9062C24.4271 24.6354 23.5417 25 22.5 25H10ZM13.75 18.75H20C20.3542 18.75 20.6512 18.87 20.8913 19.11C21.1313 19.35 21.2508 19.6467 21.25 20V21.25C21.25 21.6042 21.37 21.9012 21.61 22.1412C21.85 22.3812 22.1467 22.5008 22.5 22.5C22.8542 22.5 23.1512 22.38 23.3913 22.14C23.6313 21.9 23.7508 21.6033 23.75 21.25V7.5H13.75V8.25L20.9062 15.4062C21.0938 15.5938 21.2083 15.8075 21.25 16.0475C21.2917 16.2875 21.2604 16.5217 21.1562 16.75C21.0521 16.9792 20.9063 17.1613 20.7188 17.2962C20.5313 17.4312 20.2917 17.4992 20 17.5C19.8333 17.5 19.6717 17.4633 19.515 17.39C19.3583 17.3167 19.2283 17.2283 19.125 17.125L15.9375 13.9375L15.6875 14.1875C15.3958 14.4792 15.0883 14.7396 14.765 14.9688C14.4417 15.1979 14.1033 15.375 13.75 15.5V18.75ZM7 10.3125H8.625C8.97917 10.3125 9.27625 10.4325 9.51625 10.6725C9.75625 10.9125 9.87583 11.2092 9.875 11.5625V13C10.125 13.1667 10.3854 13.2812 10.6562 13.3438C10.9271 13.4062 11.2083 13.4375 11.5 13.4375C11.9792 13.4375 12.4117 13.3646 12.7975 13.2188C13.1833 13.0729 13.5633 12.8125 13.9375 12.4375L14.1875 12.1875L12.4375 10.4375C11.8333 9.83333 11.1562 9.38 10.4062 9.0775C9.65625 8.775 8.85417 8.62417 8 8.625C7.58333 8.625 7.1875 8.65625 6.8125 8.71875C6.4375 8.78125 6.0625 8.875 5.6875 9L7 10.3125ZM18.75 21.25H10V22.5H18.9375C18.875 22.3125 18.8279 22.1146 18.7962 21.9062C18.7646 21.6979 18.7492 21.4792 18.75 21.25Z" fill="url(#paint0_linear_232_818)"/>
                                                <defs>
                                                <linearGradient id="paint0_linear_232_818" x1="1.56292" y1="8.63637" x2="27.259" y2="10.6297" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#4B69E2"/>
                                                <stop offset="1" stop-color="#9054D9"/>
                                                </linearGradient>
                                                </defs>
                                                </svg>
                                            </div>
                                            <div className="static-par">
                                                <h6>Total Stories </h6>
                                                <p>{Contnet.stories } </p>
                                            </div>
                                            <div className="static-data">
                                                <img src={StoriesIcon} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="static-one">
                                            <div className="static-svg" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path d="M15 5C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15C13.6739 15 12.4021 14.4732 11.4645 13.5355C10.5268 12.5979 10 11.3261 10 10C10 8.67392 10.5268 7.40215 11.4645 6.46447C12.4021 5.52678 13.6739 5 15 5ZM15 7.5C14.337 7.5 13.7011 7.76339 13.2322 8.23223C12.7634 8.70107 12.5 9.33696 12.5 10C12.5 10.663 12.7634 11.2989 13.2322 11.7678C13.7011 12.2366 14.337 12.5 15 12.5C15.663 12.5 16.2989 12.2366 16.7678 11.7678C17.2366 11.2989 17.5 10.663 17.5 10C17.5 9.33696 17.2366 8.70107 16.7678 8.23223C16.2989 7.76339 15.663 7.5 15 7.5ZM15 16.25C18.3375 16.25 25 17.9125 25 21.25V25H5V21.25C5 17.9125 11.6625 16.25 15 16.25ZM15 18.625C11.2875 18.625 7.375 20.45 7.375 21.25V22.625H22.625V21.25C22.625 20.45 18.7125 18.625 15 18.625Z" fill="url(#paint0_linear_151_479)" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_479" x1="4.31973" y1="8.63637" x2="25.8837" y2="10.0377" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="static-par">
                                                <h6>Total Users</h6>
                                                <p>{Contnet.user }</p>
                                            </div>
                                            <div className="static-data">
                                                <img src={UserIcon} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-lg-4">
                                        <div className="static-one">
                                            <div className="static-svg" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                                    <path d="M23.9062 5.625H6.09375C4.28157 5.625 2.8125 7.09407 2.8125 8.90625V21.0938C2.8125 22.9059 4.28157 24.375 6.09375 24.375H23.9062C25.7184 24.375 27.1875 22.9059 27.1875 21.0938V8.90625C27.1875 7.09407 25.7184 5.625 23.9062 5.625Z" stroke="url(#paint0_linear_151_481)" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M2.8125 11.25H27.1875M7.5 17.5781H10.3125V18.75H7.5V17.5781Z" stroke="url(#paint1_linear_151_481)" stroke-width="3.51562" stroke-linejoin="round" />
                                                    <defs>
                                                        <linearGradient id="paint0_linear_151_481" x1="1.98342" y1="9.03409" x2="28.1885" y2="11.2479" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                        <linearGradient id="paint1_linear_151_481" x1="1.98342" y1="12.6136" x2="27.2485" y2="17.9496" gradientUnits="userSpaceOnUse">
                                                            <stop stop-color="#4B69E2" />
                                                            <stop offset="1" stop-color="#9054D9" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="static-par">
                                                <h6>Total Subscribers  </h6>
                                                <p>{Contnet.totalSubscription }</p>
                                            </div>
                                            <div className="static-data">
                                                <img src={subscribersIcon} alt="img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Static-image">
                                    <Chart/>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </AuthLayout>

        </>);
}

export default Static;