import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import StoryModal from "./StoryModal";
import AuthLayout from "../../component/AuthLayout";
import { Toaster } from 'react-hot-toast';

function Homepage() {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 

    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content content-center generat-story">
                        <div className="generate-block">
                            <div>
                                <h2>StoryScape!</h2>
                                <h1>Create a Magical Bedtime Story for Kids</h1>
                                <Link to="#" className="btn blue-gradient-btn" onClick={handleShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                                        <path d="M4.75 6.75H0.25V5.25H4.75V0.75H6.25V5.25H10.75V6.75H6.25V11.25H4.75V6.75Z" fill="white" />
                                    </svg>{" "}
                                    Generate Story
                                </Link>
                            </div>
                        </div>
                    </div>

                    <StoryModal show={show} handleClose={handleClose} />
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                </div>
            </AuthLayout>
        </>
    );
}

export default Homepage;
