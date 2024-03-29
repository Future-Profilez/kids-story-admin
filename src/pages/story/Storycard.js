import {  useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Listing from "../list/Listing";
function Storycard() {
    const storedTab = localStorage.getItem('selectedTab');
    const [selectedOption, setSelectedOption] = useState(storedTab ||"boy");
    const handleTabClick = (option) => {
        setSelectedOption(option);
        localStorage.setItem('selectedTab', option);
    };
    // useEffect(() => {
    //     return () => 
    //     localStorage.removeItem('selectedTab');
    // }, []);
    return (
        <AuthLayout>
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
                                        {selectedOption === 'boy' ? <Listing type={selectedOption} /> : ''}
                                    </Tab>
                                    <Tab eventKey="girl" title="Girl">
                                        {selectedOption === 'girl' ? <Listing type={selectedOption} /> : ''}
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


