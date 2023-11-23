import { useEffect, useRef, useState } from "react";
import AuthLayout from "../../component/AuthLayout";
import storys from "../../image/login.png"
import Heading from "../../component/Heading";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Link } from "react-router-dom";
import Storydetails from "./Storydetails";
import Story from "../../Apis/Story";
import Loading from "../../component/Loading";

function Storycard() {

    const inputref = useRef(null);
    const [selectedOption, setSelectedOption] = useState("boy");
    const [loading, setLoading] = useState(false);
    const [loadings, setLoadings] = useState(false);
    const [searchQuery, setSearchQuery] = useState(inputref.current);
    const [content, setContent] = useState([]);
    const [selectedUuid, setSelectedUuid] = useState("");
    const [selectSort, setSelectSort] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleTabClick = (option) => {
        setSelectedOption(option);
    };

    const type = selectedOption;

    const handlesort = (e) => {
        setSelectSort(e.target.value);
    };

    const handlegenre = (e) => {
        setSelectedGenre(e.target.value);
    };

    let searchvalue = "";
    const handlesearch = (e) => {
        searchvalue = e.target.value;
        setSearchQuery(searchvalue)
    };

    useEffect(() => {
        setSearchQuery(searchvalue);
    }, [searchvalue]);

    const fetching = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        const query = `${selectSort ? `&sortBy=${selectSort}` : ''
            }${selectedGenre ? `&genre_name=${selectedGenre}` : ''
            }${searchQuery ? `&search=${searchQuery}` : ''
            }`;
        const main = new Story();
        const response = main.StoryCard(type, query);
        response
            .then((res) => {
                if (Array.isArray(res?.data?.data)) {
                    setContent(res?.data?.data);
                    setLoading(false);
                } else {
                    console.error("Data is not an array:", res.data);
                    setContent([]);
                    setLoading(false);
                }
            })
            .catch((error) => {
                setLoading(false);
                console.error("Error status:", error);
            });
    };


    useEffect(() => {
        fetching();
    }, [type, selectSort, selectedGenre, searchQuery]);

    const handleShow = (uuid) => {
        setShow(true);
        setSelectedUuid(uuid);
    };

    const Listing = () => {
        return (
            <>
                <div className="filter-search">
                    <div className="search">
                        <input type="search" placeholder="search"
                            value={searchQuery} ref={inputref}
                            onChange={handlesearch}
                        />
                        <button>
                            Search
                        </button>
                    </div>
                    <div className="dropdwon-filter">
                        <div className="story-sort">
                            <h1>SortBy: </h1>
                            <select className="select"
                                value={selectSort} onChange={handlesort}
                            >
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
                        {loading ? (
                          <Loading/>
                        ) : (
                            content && content.map((item,
                                index) => (
                                <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                                    <div className="card">
                                        <Link onClick={() => handleShow(item.uuid)} >
                                            <img className="card-img-top" src={item.story_img || storys} alt="Card cap" />
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
                            ))
                        ) }
                    </div>
                </div>
            </>
        );
    };

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
                                        <Listing />
                                    </Tab>
                                    <Tab eventKey="girl" title="girl">
                                        <Listing />
                                    </Tab>

                                </Tabs>
                            </div>


                        </div>
                    </div>
                </div>
                <Storydetails show={show} handleClose={handleClose} uuid={selectedUuid} />
            </div>
        </AuthLayout>
    );
}

export default Storycard;
