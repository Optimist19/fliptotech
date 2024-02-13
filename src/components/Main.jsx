import "./Main.css";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

import VR from "../vid/VR.mp4";
import firstvr from "../img/firstvr.webp";
import secondvr from "../img/secondvr.webp";
import thirdvr from "../img/thirdvr.webp";
import fourthvr from "../img/forthvr.webp";
import roblox from "../img/roblox.webp";
import asgard from "../img/asgard's.webp";
import peacock from "../img/peacock.webp";
import supernatural from "../img/supernatural.webp";
import metaQuest from "../img/metaQuest.webp";

import { PiCaretRightBold } from "react-icons/pi";
import { PiPauseThin } from "react-icons/pi";
import { IoPlayOutline } from "react-icons/io5";

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
            <video muted ref={myRef} autoPlay>
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

        <div>
          <div className="vr-shop-products">
            <div className="header-vr-img">
              <div className="header">
                <h2>Shop Meta products</h2>
                <p>
                  The future of virtual reality, mixed reality and smart glasses
                  is here.
                </p>
              </div>

              <div className="vr-img-details">
                <div>
                  <div>
                    <img src={firstvr} alt="" />
                  </div>
                  <p>Meta Quest</p>
                  <button>Shop now</button>
                </div>

                <div>
                  <div>
                    <img src={secondvr} alt="" />
                  </div>
                  <p>Meta Quest accessories</p>
                  <button>Shop now</button>
                </div>

                <div>
                  <div>
                    <img src={thirdvr} alt="" />
                  </div>
                  <p>Meta Quest mixed reality</p>
                  <button>Shop now</button>
                </div>

                <div>
                  <div>
                    <img src={fourthvr} alt="" />
                  </div>
                  <p>Ray-Ban | Meta smart glasses</p>
                  <button>Shop now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="explore-session">
            <div className="explore-header">
              <h3>Explore games and experiences on Meta Quest</h3>
              <button>Browse apps &amp; games</button>
            </div>

            <div className="game-apps">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper">
                <SwiperSlide>
                  <div>
                    <img src={roblox} alt="" />
                  </div>
                  <p>Roblox</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={asgard} alt="" />
                  </div>
                  <p>Asgard&apos;s wrath 2</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={peacock} alt="" />
                  </div>
                  <p>Peacock</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={supernatural} alt="" />
                  </div>
                  <p>Supernatural</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={metaQuest} alt="" />
                  </div>
                  <p>Meta Quest+</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
