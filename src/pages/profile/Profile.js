import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/story.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";
import Password from "./Password"
import Story from "../../Apis/Story";
import { Toaster, toast } from 'react-hot-toast';

import { useNavigate } from "react-router-dom";


function Profile() {
    const navigate = useNavigate();

    const initialRegs = {
        phone_no: "",
        name: "",
        email: "",
    };

    const [Regs, setRegs] = useState(initialRegs);

    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
        console.table(Regs);
    };

    const [keys, setkeys] = useState("profile");

    const handleTabClick = (keys) => {
        setkeys(keys);
    };

    async function handleForms(e) {
        try {
            const main = new Story();
            console.log("main", main);
            const response = await main.Profile(Regs);
            console.log("res", response);
            if (response.data.status === true) {
                setRegs(initialRegs);
                navigate('/');
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log("error", error);
            toast.error(error);
        }
    }
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-12">
                                <Heading />
                                <div className="story-title">
                                    <h6>Setting</h6>
                                </div>
                                <div className="profile-manage">
                                    <Tabs
                                        defaultActiveKey="home"
                                        transition={false}
                                        activeKey={keys}
                                        onSelect={handleTabClick}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="profile" title="Profile">
                                            <div className="update-field">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <label className="input_label" htmlFor="password_field">
                                                            Full Name
                                                        </label>
                                                        <div className="password-label">
                                                            <input
                                                                placeholder=""
                                                                name="name"
                                                                onChange={handleInputs}
                                                                value={Regs.name}
                                                                type="text"
                                                                className="input_field password"
                                                                id="password_field"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <label className="input_label" htmlFor="password_field">
                                                            Email
                                                        </label>
                                                        <div className="password-label">
                                                            <input
                                                                placeholder=""
                                                                name="email"
                                                                onChange={handleInputs}
                                                                value={Regs.email}
                                                                type="Email"
                                                                className="input_field password"
                                                                id="password_field"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <label className="input_label" htmlFor="password_field">
                                                            Phone
                                                        </label>
                                                        <div className="password-label">
                                                            <input
                                                                placeholder=""
                                                                name="phone_no"
                                                                onChange={handleInputs}
                                                                value={Regs.phone_no}
                                                                type="text"
                                                                className="input_field password"
                                                                id="password_field"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button className="btn blue-gradient-btn" onClick={handleForms}>
                                                        <span>
                                                            Submit
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="password" title="Password">
                                            <Password />
                                        </Tab>

                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>);
}

export default Profile;
