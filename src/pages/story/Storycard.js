import { useEffect, useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import data from "../../image/login.png"
import Heading from "../../component/Heading";
import slugify from "react-slugify";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import Storydetails from "./Storydetails";
import Story from "../../Api/Story";

function Storycard() {
    const [selectedOption, setSelectedOption] = useState("boy");
    const [loading, setLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [content, setContent] = useState([]);


    const handleTabClick = (option) => {
        setSelectedOption(option);
    };

    const type = selectedOption;

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

    const fetching = () => {
        const main = new Story();
        const response = main.StoryCard(type);
        response
          .then((res) => {
            console.log("res",res)
            if (Array.isArray(res.data.data)) {
                setContent(res.data.data);
              } else {
                console.error("Data is not an array:", res.data);
                // Handle the error or set content to an empty array, depending on your use case
                setContent([]);
              } 
          })
          .catch((error) => {
            console.error("Error status:", error?.response?.status);
            console.error("Error data:", error?.response?.data);
          
          });
      };
      
    
      useEffect(() => {
        fetching();
      }, [type]);


      console.log("content",content)

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
                                                {content && content.map((item,
                                                index)=>(
                                                <div className="col-md-3" key={index}>
                                                    <div className="card">
                                                        <Link to={`/card/${slugify(item.uuid)}`} onClick={handleShow}>
                                                            <img className="card-img-top" src={item.story_img ||data} alt="Card cap" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    {item.title || "Card title"}</h5>
                                                                <p className="card-text">{item.story_description}</p>
                                                                <div className="card-data">
                                                                    <h6>{item.genre_name}</h6>
                                                                    <h3>
                                                                        <span>
                                                                           {item.age} yrs
                                                                        </span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                ))}
                                                </div>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="girl" title="girl">
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
                                                {content &&  content.map((item,key)=>(
                                                <div className="col-md-3" key={key}>
                                                    <div className="card">
                                                        <Link to={item.uuid} onClick={handleShow}>
                                                            <img className="card-img-top" src={item.story_img ||data} alt="Card cap" />
                                                            <div className="card-body">
                                                                <h5 className="card-title">
                                                                    {item.title }</h5>
                                                                <p className="card-text">{item.story_description}</p>
                                                                <div className="card-data">
                                                                    <h6>{item.genre_name}</h6>
                                                                    <h3>
                                                                        <span>
                                                                           {item.age} yrs
                                                                        </span>
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                                ))}
                                               
                                            </div>
                                        </div>
                                    </Tab> 

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
