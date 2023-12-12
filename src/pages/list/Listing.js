
import { useEffect, useRef, useState } from "react";
import storys from "../../image/login.png"
import { Link } from "react-router-dom";
import Story from "../../Apis/Story";
import Loading from "../../component/Loading";
import Nodata from "../../component/Nodata";
import slugify from "react-slugify";
import { toast } from 'react-hot-toast';
function Listing({ type }) {
    const inputref = useRef(null);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(inputref.current);
    const [content, setContent] = useState([]);
    const [selectSort, setSelectSort] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");
    const handlesort = (e) => {
        setSelectSort(e.target.value);
    };
    const handlegenre = (e) => {
        setSelectedGenre(e.target.value);
    };
    let searchvalue = "";
    const handlesearch = (e) => {
        searchvalue = e.target.value;
        if (searchvalue && searchvalue.length > 3) {
            setSearchQuery(searchvalue);
        } else {
            setSearchQuery('');
        }
    };
    useEffect(() => {
        setSearchQuery(searchvalue);
    }, [searchvalue]);
    const [page, setPage] = useState(1);
    const [hasmore, setHasMore] = useState(true);
    const fetching = (pg) => {
        if (loading) {
            return;
        }
        setLoading(true);
        const query = `${selectSort ? `&sortBy=${selectSort}` : ''
            }${selectedGenre ? `&genre_name=${selectedGenre}` : ''
            }${searchQuery ? `&search=${searchQuery}` : ''
            }`;
        const main = new Story();
        const response = main.StoryCard(type, query, pg);
        response
            .then((res) => {
                if (Array.isArray(res?.data?.data)) {
                    const newdata = res?.data?.data || [];
                    setContent((prevData) => {
                        if (pg === 1) {
                            return newdata;
                        } else {
                            return [...prevData, ...newdata];
                        }
                    });
                    setPage(res.data.current_page);
                    if (res.data.current_page === res.data.last_page) {
                        setHasMore(false);
                    } else {
                        setHasMore(true);
                    }
                } else {
                    toast.error("Data is not an array:", res.data);
                    setContent([]);
                }
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setHasMore(false);
                console.error("Error status:", error);
            });
    };

    useEffect(() => {
        if (!loading) {
            fetching(1);
        }
    }, [type, selectSort, selectedGenre, searchQuery]);


    const loadMore = () => {
        if (!loading && hasmore) {
            setLoading(true);
            fetching(page + 1);
        }
    };


    const divStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
    };

    const pstyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
    };
    return (<>
        <div className="filter-search">
            <div className="search">
                <input type="search" placeholder="search"
                    ref={inputref}
                    onChange={handlesearch}
                />
                <button>
                    Search
                </button>
            </div>
            <div className="dropdwon-filter">
                <div className="story-sort">
                    <h1>SortBy :</h1>
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
                    <h1>Category :</h1>
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

                {content && content.length > 0 ? (
                    content.map((item, index) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div className="card">
                                <Link to={`${slugify(item.uuid)}`} >
                                    <img src={item.image_url || storys} alt="N/A" />
                                    {item.scheduled_at ? (
    <div className="editimagebtns btn blue-gradient-btn">  Published</div>
) : null}
                                    <div className="card-body">
                                        <p className="card-text">{item.scheduled_at || <h6>Not Published yet.</h6>} </p>
                                        <h5 className="card-title" style={divStyle}
                                            dangerouslySetInnerHTML={{ __html: item.title }}
                                        ></h5>
                                        <p className="card-text" style={pstyle}
                                            dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                        <div className="card-data">
                                            <h6>{item.genre}</h6>
                                            <h3>
                                                <span>
                                                    {item.age} Yrs
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                </Link>


                            </div>
                        </div>
                    ))
                ) : !loading ? <Nodata /> : ''
                }
                {loading ? <Loading /> : ''}
                {page < 1 && !loading && hasmore && (
                    <div className="loader-btn" onClick={loadMore}>
                        <Link className="btn blue-gradient-btn">Load More</Link>
                    </div>
                )}
                {page > 1 && !loading & !hasmore && (
                    <div className="loader-btn" >
                        <button className="btn blue-gradient-btn">No More Data !!</button>
                    </div>
                )}
            </div>
        </div>

    </>);
}

export default Listing;