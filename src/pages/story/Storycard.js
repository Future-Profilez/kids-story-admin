import { useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import image from "../../image/login.png"
import { Link } from "react-router-dom";

function Storycard() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };
    return (
        <AuthLayout>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="story">
                                <h2> StoryScape!</h2>
                                <div className="top-line"></div>
                            </div>
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

                            <div className="story-search">
                                <button className="input-button">
                                    <input type="search" placeholder="Search" />
                                    <button>

                                        <span>search</span>
                                    </button>
                                </button>

                                <div className="">
                                    <h1>Sort By: </h1>
                                    <select>
                                        <option type="">Newest to oldest  </option>
                                    </select>
                                </div>
                            </div>
                            <div className="story-card">
                                <div className="card" >
                                    <img className="card-img-top" src={image} alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="card-data">
                                            <h6  >Card link</h6>
                                            <h3 >
                                                <span>
                                                    3 yrs
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </AuthLayout>
    );
}

export default Storycard;