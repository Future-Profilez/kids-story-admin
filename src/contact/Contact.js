import react from  "react";
import Heading from "../component/Heading"
function Contact() {
    return (
        <div className="content-wrapper">
        <div className="content">
            <div className="row">
                <div className="col-md-12">
                    <Heading />
                    <div className="story-title">
                        <h6>Contact Us </h6>
                    </div>
                    <div className="profile-manage">
                            
                          
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
                                                   
                                                    type="Email"
                                                    className="input_field password"
                                                    id="password_field"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="input_label" htmlFor="password_field">
                                                Subject
                                            </label>
                                            <div className="password-label">
                                                <input
                                                    placeholder=""
                                                    name="Subject"
                                                   
                                                    type="Subject"
                                                    className="input_field password"
                                                    id="password_field"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <label className="input_label" htmlFor="password_field">
                                                Mesage 
                                            </label>
                                            <div className="password-label">
                                                <textarea
                                                    placeholder=""
                                                    name="phone_no"
                                                   
                                                    type="text"
                                                    className="input_field password"
                                                    id="password_field"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn blue-gradient-btn" >
                                            <span>
                                                Submit
                                                {/* <span>{loading ? "Wait.." : "Submit"}</span> */}
                                            </span>
                                        </button>
                                    </div>
                                </div>

                        

                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    );
}

export default Contact;