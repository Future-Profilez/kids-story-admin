import { useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import data from "../../image/login.png"

function Storycard() {
    const [selectedOption, setSelectedOption] = useState("boy");

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };



    return (
        <AuthLayout>
            <div className="content-wrapper">
                <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="story">
                                <h2> StoryScape!</h2>
                                <div className="top-line"></div>
                            </div>
                            <div className="story-title">
                                <h6>Manage Stories</h6>
                            </div>
                            <div className="story-gender">
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


                            <div className="story-search">
                                <div class="search-container">
                                    <input type="search" placeholder="" />
                                    <button>
                                        Search
                                    </button>
                                </div>
                                <div className="story-sort">
                                    <h1>SortBy: </h1>
                                    <select className="select">
                                        <option type="data" className="custom-option">Newest to oldest</option>
                                        <option type="data" className="custom-option"> oldest</option>
                                        <option type="data" className="custom-option">Newest to oldest</option>
                                        <option type="data" className="custom-option">Newest to oldest</option>
                                        <option type="data" className="custom-option">Newest to oldest</option>
                                    </select>
                                </div>
                                <div className="story-sort">
                                    <h1>Category: </h1>
                                    <select className="select">
                                        <option type="data" className="custom-option">Fairy Tales  </option>
                                        <option type="data" className="custom-option">Fairy Tales </option>
                                        <option type="data" className="custom-option">Fairy Tales  </option>
                                        <option type="data" className="custom-option">Fairy Tales </option>
                                    </select>
                                </div>


                            </div>
                            <div className="story-card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="card">
                                                <img className="card-img-top" src={data} alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div className="card-data">
                                                        <h6>Card link</h6>
                                                        <h3>
                                                            <span>
                                                                3 yrs
                                                            </span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <img className="card-img-top" src={data} alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div className="card-data">
                                                        <h6>Card link</h6>
                                                        <h3>
                                                            <span>
                                                                3 yrs
                                                            </span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <img className="card-img-top" src={data} alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div className="card-data">
                                                        <h6>Card link</h6>
                                                        <h3>
                                                            <span>
                                                                3 yrs
                                                            </span>
                                                        </h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card">
                                                <img className="card-img-top" src={data} alt="Card cap" />
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                    <div className="card-data">
                                                        <h6>Card link</h6>
                                                        <h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Storycard;