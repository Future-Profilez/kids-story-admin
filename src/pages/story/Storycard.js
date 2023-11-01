import { useState } from "react";

function Storycard() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="story">
                            <h2> StoryScape!</h2>
                            <div className="top-line"></div>
                            <div className="story-title">
                                <h3>Manage Stories</h3>
                                <div>
                                    <p
                                        onClick={() => handleOptionClick("boy")}
                                        className={selectedOption === "boy" ? "selected" : ""}
                                    >
                                        Boy
                                    </p>
                                    <p
                                        onClick={() => handleOptionClick("girl")}
                                        className={selectedOption === "girl" ? "selected" : ""}
                                    >
                                        Girl
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>);
}

export default Storycard;