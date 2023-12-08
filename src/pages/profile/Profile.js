import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import "../../style/story.css"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect, useState } from "react";
import Password from "./Password"
import Story from "../../Apis/Story";
import { Toaster, toast } from 'react-hot-toast';
function Profile() {
    const [keys, setkeys] = useState("profile");
    const handleTabClick = (keys) => {
        setkeys(keys);
    };

    const initialRegs = {
        phone_no: "",
        name: "",
        email: "",
    };
    const [Regs, setRegs] = useState(initialRegs);
    const [content, setcontent] = useState({})
    useEffect(() => {
        const main = new Story();
        const response = main.getdetilas();
        response.then((res) => {
            setcontent(res?.data?.data)
            setRegs({
                phone_no: res.data.data.phone_no,
                name: res.data.data.name,
                email: res.data.data.email,
            });
            toast.success(res?.data?.message)
        }).catch((error) => {
            console.log("error", error)
            toast.error("dfdsjhsdfhjk")
        })
    }, [])
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
    };
    
    const [loading, setLoading] = useState(false);

    function handleForms(e) {
        e.preventDefault();
        if (loading) {
            return false;
        }
        setLoading(true);
        const main = new Story();
        const response = main.Profile(Regs)
        response.then((res) => {
            console.log("dfsd0", res)
            if (res.data.status === true) {
                setRegs(res.data.data);
                toast.success("res.data.message", res.data.message);
            } else {
                toast.error(res.message);
            }
            setLoading(false)
        })
            .catch((error) => {
                console.log("error", error);
                setLoading(false)
                toast.error("Failed to update profile");
            });
    }
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
                                <div className="profile-manage">
                                      <Toaster
                                                position="top-center"
                                                reverseOrder={false}
                                            />
                                    <Tabs
                                        defaultActiveKey="profile"
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
                                                                type="number"
                                                                className="input_field password"
                                                                id="password_field"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <button className="btn blue-gradient-btn" onClick={handleForms}>
                                                        <span>
                                                            <span>{loading ? "Wait.." : "Submit"}</span>
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
