import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/story.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState } from "react";


function Profile() {

    const [Regs, setRegs] = useState("");


    const [keys, setkeys] = useState("profile");

    const handleTabClick = (keys) => {
        setkeys(keys);
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
                                    <h6>Setting</h6>
                                </div>

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
                                    <Tab eventKey="profile" title="profile">
                                        <div className="password">
                                            <div className="input">
                                                <label className="input_label" htmlFor="password_field">
                                                    Full Name
                                                </label>
                                                <div className="password-label">
                                                    <input
                                                        placeholder=""
                                                        name="password"
                                                        // onChange={handleInputs}
                                                        value={Regs.password}
                                                        type="text"
                                                        className="input_field password"
                                                        id="password_field"
                                                    />
                                                </div>
                                            </div>
                                            <div className="password-old">
                                                <div className="container-input">
                                                    <label className="input_label" htmlFor="password_field">
                                                        Email
                                                    </label>
                                                    <div className="password-label">
                                                        <input
                                                            placeholder=""
                                                            name="password"
                                                            // onChange={handleInputs}
                                                            value={Regs.password}
                                                            type="text"
                                                            className="input_field password"
                                                            id="password_field"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="container-input">
                                                    <label className="input_label" htmlFor="password_field">
                                                        Phone
                                                    </label>
                                                    <div className="password-label">
                                                        <input
                                                            placeholder=""
                                                            name="password"
                                                            // onChange={handleInputs}
                                                            value={Regs.password}
                                                            type="text"
                                                            className="input_field password"
                                                            id="password_field"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="text-submit">
                                                <span>
                                                    Submit
                                                </span>
                                            </button>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="password" title="password">
                                        <div className="password">
                                            <div className="input">
                                                <label className="input_label" htmlFor="password_field">
                                                    Current  Password
                                                </label>
                                                <div className="password-label">
                                                    <input
                                                        placeholder=""
                                                        name="password"
                                                        // onChange={handleInputs}
                                                        value={Regs.password}
                                                        type="text"
                                                        className="input_field password"
                                                        id="password_field"
                                                    />
                                                </div>
                                            </div>
                                            <div className="password-old">
                                                <div className="container-input">
                                                    <label className="input_label" htmlFor="password_field">
                                                        Password
                                                    </label>
                                                    <div className="password-label">
                                                        <input
                                                            placeholder=""
                                                            name="password"
                                                            // onChange={handleInputs}
                                                            value={Regs.password}
                                                            type="text"
                                                            className="input_field password"
                                                            id="password_field"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="container-input">
                                                    <label className="input_label" htmlFor="password_field">
                                                        Confirm   Password
                                                    </label>
                                                    <div className="password-label">
                                                        <input
                                                            placeholder=""
                                                            name="password"
                                                            // onChange={handleInputs}
                                                            value={Regs.password}
                                                            type="text"
                                                            className="input_field password"
                                                            id="password_field"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="text-submit">
                                                <span>
                                                    Submit
                                                </span>
                                            </button>
                                        </div>
                                    </Tab>

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthLayout>
        </>);
}

export default Profile;