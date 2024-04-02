import { Image, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Story from "../../Apis/Story";
import inmagerecoird from "../../image/Image.png"
import { useParams } from "react-router-dom";
import { toast } from 'react-hot-toast';
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import ImagePrompt from "./ImagePrompt";
import Loading from "../../component/Loading";
function Storydetails() {

    const { uuid } = useParams();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [showContinue, setShowContinue] = useState(false);
    const handleCloseContinue = () => setShowContinue(false);
    const handleShowContinue = () => setShowContinue(true);

    const [content, setContent] = useState({})


    const fetchStoryDetails = () => {
        if (uuid) {
            const main = new Story();
            const response = main.Storydetilas(uuid);
            response.then((res) => {
                setContent(res?.data?.data);
                setLoading(true);
            }).catch((error) => {
                setLoading(false);
                console.log("error", error)
            })
        }
    };
    useEffect(() => {
        fetchStoryDetails();
    }, [uuid])
    const fetchStoryDelete = () => {
        if (uuid) {
            const main = new Story();
            const response = main.storydelete(uuid);
            response.then((
                res
            ) => {
                navigate('/ai-story')
                setTimeout(() => {

                    toast.success(res.data.message)
                }, 2000);
            }).catch((error) => {
                console.log("error", error)
            })
        }
    };
    const id = content.id;

    const [Regs, setRegs] = useState("");

    // console.log("Regs", Regs)
    const handleInputs = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setRegs((prevState) => ({ ...prevState, [name]: value }));
        console.table(Regs);
    };
    const [loadings, setLoadings] = useState(false);

    async function handleForms(e) {
        e.preventDefault();
        if (loadings) {
            return false;
        }
        setLoadings(true);
        if (!Regs.schedule_at) {
            toast.error("Please select a date.");
            setLoadings(false);
            return;
        }
        const scheduledDateTime = `${Regs.schedule_at}  15:00:00`;
        // console.log("Submitting data:", scheduledDateTime);
        const main = new Story();
        try {
            const response = await main.storyreshedule(uuid, { schedule_at: scheduledDateTime }); // Sending updated object with date and time
            // console.log("responseee", response);
            if (response.data.status === true) {
                setTimeout(() => {
                    toast.success(response.data.message);
                }, 1000);
                handleCloseContinue();
                navigate('/ai-story');
            } else {
                setTimeout(() => {
                    toast.error(response.data.message);
                    setLoadings(false);
                }, 1000);
            }
            setLoadings(false);
            // console.log("response.data", response.data);
        } catch (error) {
            setLoadings(false);
            console.log("Error:", error);
            toast.error("You can only schedule for a date and time after today.");
        }
    }

    const [showImagePromptModal, setShowImagePromptModal] = useState(false);

    return (
        <>
            <AuthLayout>
                <div className="content-wrapper">
                    <div className="content ">
                        <Heading />
                        {loading ? (
                            <>
                                <div className="story-title"><h6> {content?.title}</h6></div>
                                <div className="reschedule-story">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-4">
                                            <Image src={content?.story_image_url || inmagerecoird} alt="img" />
                                        </div>
                                        <div className="col-md-6 col-lg-8">
                                            <div className="heading d-flex justify-content-between">
                                                <div className="heading-graph">
                                                    <h6  ><span> {content?.genre_name} </span> </h6>
                                                    <p className="mb-0" >{content?.title}</p>
                                                </div>
                                            </div>

                                            <div className="description">
                                                <p>
                                                    {content?.story_description}
                                                </p>
                                            </div>
                                            {content && content.scheduled_at ? (<div className="reschedule-action">
                                                <div className="btn blue-gradient-btn" onClick={handleShowContinue} >
                                                    <span>
                                                        Reschedule Story
                                                    </span>
                                                </div>
                                                <button button className="delete-button" onClick={fetchStoryDelete}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white" />
                                                    </svg>
                                                </button>
                                            </div>) : (<div className="reschedule-action">
                                                <div className="btn blue-gradient-btn" onClick={handleShowContinue}>
                                                    <span>
                                                        Publish
                                                    </span>
                                                </div>
                                                <button button className="delete-button" onClick={fetchStoryDelete}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="white" />
                                                    </svg>
                                                </button>
                                            </div>)}

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        {content && content?.story_chapter && content?.story_chapter?.map((item, index) => (
                                            <div className="story-list" key={index}>
                                                <h2 className="mt-4 pt-3 mb-3" > {item?.title}</h2>
                                                <div className="chapterImg w-100 position-relative mt-2 mb-3" >
                                                    <ImagePrompt
                                                        image_url={item.image_url || inmagerecoird}
                                                        customclass="editimagebtn btn blue-gradient-btn"
                                                        custom={<>
                                                            <div className="editImage">Edit Image</div>
                                                        </>}
                                                        imageUrl={item?.imageUrl || inmagerecoird}
                                                        uid={id}
                                                        chapter={item?.chapter_no}
                                                        imageprompt={item?.image_prompt}
                                                        show={showImagePromptModal}
                                                    />
                                                </div>
                                                <p>   {item?.story_description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        ) : (<Loading />)}
                    </div>
                </div>
            </AuthLayout>


            <Modal show={showContinue} onHide={handleCloseContinue} id="generat-story">
                <div className="closebtn" onClick={handleCloseContinue}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                        <circle cx="21" cy="21" r="21" fill="#0B1024" />
                        <path d="M15.4 28L14 26.6L19.6 21L14 15.4L15.4 14L21 19.6L26.6 14L28 15.4L22.4 21L28 26.6L26.6 28L21 22.4L15.4 28Z" fill="white" />
                    </svg>
                </div>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>TaleTreats!</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div class="body-popup-title"><h3>When do you want to publish this story?</h3>
                        {content.scheduled_at ? (
                            <p>Schedule date: {content.scheduled_at}</p>
                        ) : (<></>
                        )}
                    </div>
                    <div className="date-field-story" >
                        <input
                            type="Date"
                            className="input_field form-control"
                            name="schedule_at"
                            id="password_field"
                            value={Regs.schedule_at || ''}
                            onChange={handleInputs}
                        />
                    </div>
                    {content.scheduled_at ? (
                        <div className="text-center" disabled={loadings}>
                            <div className="btn blue-gradient-btn" onClick={handleForms}  >
                                <span>{loadings ? "Wait.." : "Reschedule"}</span>
                            </div>
                        </div>
                    ) : (<div className="text-center" disabled={loadings} >
                        <div className="btn blue-gradient-btn" onClick={handleForms}  >
                            <span>{loadings ? "Wait.." : "Publish"}</span>
                        </div>
                    </div>)}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Storydetails;
