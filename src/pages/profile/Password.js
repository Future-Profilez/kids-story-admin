import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Story from "../../Apis/Story";
import { Toaster, toast } from 'react-hot-toast';


function Password() {
    const navigate = useNavigate();

    const initialRegs = {
        old_password: "",
        password: "",
        confirm_password: "",
    };

    const [Regs, setRegs] = useState(initialRegs);

    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
        console.table(Regs);
    };

    
    async function handleForms(e) {
        e.preventDefault();
        try {
            const main = new Story();
            console.log("main", main);
            const response = await main.Password(Regs);
            console.log("res", response);
            if (response.data.status === "true") {
                toast.success(response.data.message);
                setRegs(initialRegs);
                navigate("/")
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log("error", error);
            toast.error("An error occurred. Please try again.");
        }
    }


    return (

        <>
          <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="update-field">
                <div className="row">
                    <div className="col-md-12">
                        <label className="input_label" htmlFor="password_field">
                            Current  Password
                        </label>
                        <div className="password-label">
                            <input
                                placeholder=""
                                name="old_password"
                              onChange={handleInputs}
                                value={Regs.old_password}
                                type="text"
                                className="input_field password"
                                id="password_field"
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="input_label" htmlFor="password_field">
                            Password
                        </label>
                        <div className="password-label">
                            <input
                                placeholder=""
                                name="password"
                                onChange={handleInputs}
                                value={Regs.password}
                                type="text"
                                className="input_field password"
                                id="password_field"
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="input_label" htmlFor="password_field">
                            Confirm   Password
                        </label>
                        <div className="password-label">
                            <input
                                placeholder=""
                                name="confirm_password"
                                onChange={handleInputs}
                                value={Regs.confirm_password}
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

        </>
    );
}

export default Password;