import { useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Listing from "../list/Listing";
import { Toaster } from 'react-hot-toast';
function Storycard() {

    const [selectedOption, setSelectedOption] = useState("boy");
    const handleTabClick = (option) => {
        setSelectedOption(option);
    };
    return (

        <AuthLayout>
             <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
            <div className="content-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <Heading />
                            <div className="story-title">
                                <h6>Manage Stories</h6>
                            </div>
                            <div className="profile-manage">
                                <Tabs
                                    defaultActiveKey="boy"
                                    transition={true}
                                    activeKey={selectedOption}
                                    onSelect={handleTabClick}
                                    id="noanim-tab-example"
                                    className="mb-3" >
                                    <Tab eventKey="boy" title="Boy">
                                        {selectedOption ==='boy'?<Listing type={selectedOption} /> : ''}  
                                    </Tab>
                                    <Tab eventKey="girl" title="Girl">
                                    {selectedOption ==='girl'?<Listing type={selectedOption} /> : ''}  
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}
export default Storycard;


