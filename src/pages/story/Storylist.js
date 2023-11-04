import { Image } from "react-bootstrap";
import Story from "../../image/story-thubnail.png"
import "../../style/story.css"
import AuthLayout from "../../component/AuthLayout";
import Heading from "../../component/Heading";
import { useDispatch, useSelector } from "react-redux";
import { getUser, selectuser } from "../../redux/UserSlice";
function Storylist() {
const dispatch =useDispatch();
    const record =useSelector(selectuser);
    console.log(record);
    return (
        <>
        <AuthLayout>

        <div className="content-wrapper">
                    {/* start content */}
                    <div className="content">
                    <div className="row">
                        <div className="col-md-12">
                       <Heading/>
                                <div className="story-list">
                                    <h2>Chapter 1: The Pirate's Legacy</h2>
                                    <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                    <div className="thubnail">
                                      <Image src={Story} alt="story" />
                                    </div>

                                </div>
                                <div className="story-list">
                                    <h2>Chapter 2: The Pirate's Legacy</h2>
                                    <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                    <div className="thubnail">
                                      <Image src={Story} alt="story" />
                                    </div>

                                </div> 
                                <div className="btn-list">
                                    <button className="btn blue-gradient-btn">
                                        <span>Regenerate Story</span>
                                    </button>
                                    <button className="btn blue-gradient-btn">
                                        <span>Continue</span>
                                    </button>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
            
        </>



    );
}
 
export default Storylist;