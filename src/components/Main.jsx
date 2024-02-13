import VR from "../vid/VR.mp4";

import { PiCaretRightBold } from "react-icons/pi";
import { PiPauseThin } from "react-icons/pi";
import { IoPlayOutline } from "react-icons/io5";


import "./Main.css";
import { useRef, useState } from "react";

function Main() {
  const myRef = useRef(null);
  const [isPlaying, setPlay] = useState(true);

  const toggleVideo = () => {
    const videoElement = myRef.current;

    if (videoElement.paused) {
      videoElement.play();
      setPlay(!isPlaying);
    } else {
      videoElement.pause();
      setPlay(!isPlaying);
    }
  };

  return (
    <main>
      <div>
        <div className="vid">
          <div className="vid-con">
            <video muted ref={myRef}>
              <source src={VR} type="video/mp4" />
            </video>
          </div>
          <div className="overlay">
            <div className="inner">
              <button className="special">Special offer</button>
              <div className="h1-p">
                <h1>Mix reality with Meta Quest 3</h1>
                <p>
                  Get Asgard&apos;s Wrath 2 free ($59.99 USD value)--and receive
                  a 6-month trial to Meta Quest+ &#40;$47.94 USD value&#41; when
                  you upgrade to 512GB.**
                </p>
              </div>
              <div className="bag-learn">
                <button>Add to bag</button>
                <button className="learn-more">
                  <PiCaretRightBold className="icon" />
                </button>
                <p>Learn more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="toggle">
          <button onClick={toggleVideo}>
            {isPlaying ? <IoPlayOutline /> : <PiPauseThin />}
          </button>
        </div>

        <div className="v-r">
          <div className="v-r-inner-con">
            <div className="more-of-v-r">
              <div className="h2-p">
                <h2>
                  Dive into VR <br /> with <br /> Meta Quest 2
                </h2>
                <p>
                  Experience the thrill of immersive games, fitness apps and
                  entertainment--now for $50 less.
                </p>
              </div>

              <div className="btn-icon-p">
                <button>Add to bag</button>
                <button>
                  <PiCaretRightBold className="icon" />
                </button>
                <p>Learn More</p>
              </div>
            </div>

            <div className="more-of-v-r second">
              <div className="h2-p">
                <h2>
                  Do more in <br /> style with Ray-
                  <br />
                  Ban | Meta
                </h2>
                <p>
                  Next-generation smart glasses that blend an iconic look with
                  cutting-edge technology.
                </p>
              </div>
              <div className="btn-icon-p">
                <button>Add to bag</button>
                <button>
                  <PiCaretRightBold className="icon" />
                </button>
                <p>Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
