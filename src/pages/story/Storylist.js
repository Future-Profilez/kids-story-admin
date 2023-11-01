import { Image } from "react-bootstrap";
import Story from "../../image/story.png"
import "../../style/story.css"
function Storylist() {
    return (
        <section >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="story">
                            <h2> StoryScape!</h2>
                            <div className="top-line"></div>

                            <div className="story-list">
                                <h2>Chapter 1: The Pirate's Legacy</h2>
                                <p>Once upon a time, in a coastal village, there lived a young boy named Oliver. He had always dreamed of becoming a pirate, just like his father, Captain Benjamin Blackheart. Every night, Oliver would listen to his father's thrilling tales of treasure hunts, faraway lands, and the hunt for the forbidden cursed treasure.</p>
                                <Image src={Story} alt="story" />

                            </div>

                            <div className="btn-list">
                                <button> 
                                    <span>Regenerate Story</span>
                                </button>
                                <button>
                                    <span>Continue</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Storylist;