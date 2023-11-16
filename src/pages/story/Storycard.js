import { useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import data from "../../image/login.png"
import Heading from "../../component/Heading";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import Storydetails from "./Storydetails";

function Storycard() {
    const [selectedOption, setSelectedOption] = useState("boy");
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleTabClick = (option) => {
        setSelectedOption(option);
    };

    const type = selectedOption;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const data= "{\n  \"Title\": \"The Race of Hopper and Toby\",\n  \"Age\": \"11 years\",\n  \"Chapters\": [\n    {\n      \"Chapter\": \"1\",\n      \"Subtitle\": \"The Enchanting Forest\",\n      \"Content\": \"In a small town named Rivervale, two best friends, Hopper, a brave rabbit, and Toby, a clever tortoise, lived. They were known for their camaraderie and adventures. One day, they decided to embark on a new adventure into the mystical forest, which was believed to be enchanted. As they entered the magical forest, they were captivated by the beautiful sights and sounds around them. They saw trees glowing with magical lights and birds singing in languages they had never heard before.\",\n      \"Image Prompt\": \"Two friends stepping into a magical forest with glowing trees.\"\n    },\n    {\n      \"Chapter\": \"2\",\n      \"Subtitle\": \"The Challenge of the Fairy Queen\",\n      \"Content\": \"In the heart of the forest, they met the Fairy Queen, who was as radiant as the morning sun. The Fairy Queen, intrigued by their bravery, challenged them to a race. The first one to reach the Enchanted Tree, located deep within the forest, would be granted a wish. Hopper, being a rabbit, was confident in his speed, but Toby, despite his slow pace, accepted the challenge with a calm smile.\",\n      \"Image Prompt\": \"The Fairy Queen challenging Hopper and Toby to a race.\"\n    },\n    {\n      \"Chapter\": \"3\",\n      \"Subtitle\": \"The Great Race\",\n      \"Content\": \"The race began and Hopper, with his lightning speed, dashed ahead. Toby, on the other hand, maintained a slow and steady pace. Hopper, seeing Toby far behind, decided to rest and fell asleep under a glowing mushroom. Meanwhile, Toby, with his unwavering determination, continued his journey, slowly but surely.\",\n      \"Image Prompt\": \"Hopper sleeping under a mushroom while Toby continues the race.\"\n    },\n    {\n      \"Chapter\": \"4\",\n      \"Subtitle\": \"Surprise Victory\",\n      \"Content\": \"When Hopper woke up, he was shocked to see that the sun was setting. He rushed towards the Enchanted Tree, only to find Toby already there, greeting him with a triumphant smile. The Fairy Queen appeared, clapping her hands in delight. She granted Toby his wish, which was to share the magical fruits of the Enchanted Tree with all the animals in Rivervale.\",\n      \"Image Prompt\": \"Toby at the Enchanted Tree with the Fairy Queen, Hopper arrives.\"\n    },\n    {\n      \"Chapter\": \"5\",\n      \"Subtitle\": \"The Rewarding Lesson\",\n      \"Content\": \"Hopper learned a valuable lesson that day - overconfidence can lead to complacency, and it's consistent effort that leads to success. From then on, Hopper never underestimated Toby or anyone else for their pace. They returned to Rivervale as heroes, and the magical fruits they shared with the animals blessed the town with prosperity and happiness.\",\n      \"Image Prompt\": \"Hopper and Toby returning to Rivervale with the magical fruits.\",\n      \"Moral\": \"Slow and steady wins the race, and it's important to respect others' abilities irrespective of their pace.\"\n    }\n  ]\n}" 
    const [selectSort, setSelectSort] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const handlesort = (e) => {
        console.log("e.target.value", e.target.value);
        setSelectSort(e.target.value);
    }

    const handlegenre = (e) => {
        console.log("e.target.value", e.target.value);
        setSelectedGenre(e.target.value);
    }

    // const response =JSON.parse(data);

    // console.log("response",response)









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
                                    defaultActiveKey="home"
                                    transition={false}
                                    activeKey={selectedOption}
                                    onSelect={handleTabClick}
                                    id="noanim-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="boy" title="boy">
                                        <div className="filter-search">
                                            <div class="search">
                                                <input type="search" placeholder="" value={searchQuery}
                                                    onChange={(e) => setSearchQuery(e.target.value)} />
                                                <button >
                                                    Search
                                                </button>
                                            </div>
                                            <div className="dropdwon-filter">
                                                <div className="story-sort">
                                                    <h1>SortBy: </h1>
                                                    <select className="select" value={selectSort} onChange={handlesort}>
                                                        <option value="">
                                                            {loading ? "LOADING ...." : "All Sort BY"}
                                                        </option>
                                                        <option value="desc" className="custom-option">
                                                            Newest to oldest
                                                        </option>
                                                        <option value="asc" className="custom-option">
                                                            Oldest
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="story-sort">
                                                    <h1>Category: </h1>
                                                    <select className="select" value={selectedGenre}
                                                        onChange={handlegenre}>
                                                        <option value="">
                                                            {loading ? "LOADING ...." : "All Category"}
                                                        </option>
                                                        <option value="Space" className="custom-option">Space </option>

                                                        <option value="Adventure" className="custom-option">Adventure </option>

                                                        <option value="Animals" className="custom-option">Animals  </option>
                                                        <option value="Fairy Tales" className="custom-option">Fairy Tales </option>
                                                        <option value="Superhero" className="custom-option">Superhero  </option>
                                                        <option value="Pirates" className="custom-option">Pirates </option>
                                                    </select>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="story-card">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card">
                                                        <Link to="" onClick={handleShow}>
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
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <div className="card">
                                                        <Link to="" onClick={handleShow}>
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
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="card">
                                                        <Link to="" onClick={handleShow}>
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
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-md-3">
                                                    <div className="card">
                                                        <Link to="" onClick={handleShow}>
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
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tab>
                                    {/* <Tab eventKey="girl" title="girl">
                                        <div className="filter-search">
                                            <div class="search">
                                                <input type="search" placeholder="" />
                                                <button>
                                                    Search
                                                </button>
                                            </div>
                                            <div className="dropdwon-filter">
                                                <div className="story-sort">
                                                    <h1>SortBy: </h1>
                                                    <select className="select" value=" " >
                                                        <option  value="desc" className="custom-option">Newest to oldest</option>
                                                        <option  value="asc" className="custom-option">Oldest</option>
                                                    </select>
                                                </div>
                                                <div className="story-sort">
                                                    <h1>Category: </h1>
                                                    <select className="select">
                                                        <option  className="custom-option">Fairy Tales  </option>
                                                        <option  className="custom-option">Fairy Tales </option>
                                                        <option  className="custom-option">Fairy Tales  </option>
                                                        <option className="custom-option">Fairy Tales </option>
                                                    </select>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="story-card">
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
                                                        <Link to="" onClick={handleShow}>
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
                                                        </Link>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </Tab> */}

                                </Tabs>
                            </div>


                        </div>
                    </div>
                </div>
                <Storydetails show={show} handleClose={handleClose} />
            </div>
        </AuthLayout>
    );
}

export default Storycard;
