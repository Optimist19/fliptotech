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
import womanPic from "../img/vr-woman-pic.webp";
import model from "../img/model.webp";
import metaConnect from "../img/meta-connect.webp";
import fb from "../img/fb.svg";
import at from "../img/at.svg";
import insta from "../img/insta.svg";
import x from "../img/twitter.svg";
import youtube from "../img/youtube.svg";
import logo from "../img/Meta-Logo.png";
import standalonepic from "../img/photo-1593508512255-86ab42a8e620.avif";

import { PiCaretDownLight } from "react-icons/pi";

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

        <div className="v-r-stand-alone-pic-for-mobile">
          <div>
            <img src={standalonepic} alt="" />
          </div>
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

        <div>
          <div className="img-para-con">
            <div className="first-div">
              <PiCaretDownLight />
              <p>Latest news</p>
            </div>
            <div className="img-para">
              <div>
                <div>
                  <img src={womanPic} alt="" />
                </div>
                <p>
                  Meta Quest 3: The First Mass-
                  <br /> Market MixedReality Headset
                </p>
              </div>
              <div>
                <div>
                  <img src={model} alt="" />
                </div>
                <p>
                  Introducting the Next-Generation <br />
                  Ray-Ban | Meta Smart Glasses
                  <br /> Collection
                </p>
              </div>
              <div>
                <div>
                  <img src={metaConnect} alt="" />
                </div>
                <p>
                  Meta Connect 2023 Keynote
                  <br /> Recap
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="keep-your">
            <div className="keep-text-con">
              <p>KEEP YOUR EXPERIENCE UP TO DATE</p>
            </div>
            <div>
              <div className="border-line-btn">
                <div className="border-line">
                  <p>Get news and updates from Meta</p>
                </div>
                <button>Sign up</button>
              </div>
              <div className="para-con">
                <p>
                  By signing up you agree to receive updates and marketing
                  messages (e.g. email, social, etc.) from Meta about
                  Meta&apos;s existing and future products <br /> and services.
                </p>
                <p>
                  You may withdraw your consent and unsubscribe at any time by
                  clicking the unsubscribe link included in our messages.
                </p>
                <p>
                  Your subscription is subject to the <span>Terms</span> and
                  <span>Privacy Policy</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-con">
          <div>
            <div className="footer-logo-con">
              <div className="footer-logo">
                <div>
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="footer-socials-con">
                <div>
                  <img src={fb} alt="" />
                </div>
                <div>
                  <img src={at} alt="" />
                </div>
                <div>
                  <img src={insta} alt="" />
                </div>
                <div>
                  <img src={x} alt="" />
                </div>
                <div>
                  <img src={youtube} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="first-p">
            <p>Site terms and policies</p>
            <p>Community standards</p>
            <p>Privacy policy</p>
            <p>Terms</p>
            <p>Cookie policy</p>
            <p>Virtual reality</p>
            <p>Shop Meta Quest</p>
            <p>Refurbished Meta Quest 2</p>
            <p>Meta Warranty Plus</p>
            <p>VR for Good</p>
            <p>Forums</p>
            <p>Referrals</p>
            <p>Blog</p>
            <p>Creators</p>
            <p>Download SDKs</p>
            <p>Developers</p>
            <p>Made for Meta partner program</p>
            <p>Safety information for parents & pre-teens</p>
            <p>Meta Quest health & safety information</p>
            <p>Meta Quest safety center</p>
            <p>Meta for Work</p>
            <p>Meta Avatars</p>
          </div>

          <div className="second-p">
            <p>Smart glasses</p>
            <p>Shop Ray-Ban Meta smart glasses</p>
            <p>Ray-Ban Stories</p>
            <p>Privacy information</p>
            <p>Supported countries</p>
            <p>Support and legal</p>
            <p>Meta Help Center</p>
            <p>Order status</p>
            <p>Returns</p>
            <p>Find a product demo</p>
            <p>Legal</p>
            <p>Terms of sale</p>
            <p>Our actions</p>
            <p>Data and privacy</p>
            <p>Safety and expression</p>
            <p>Responsible business practices</p>
            <p>Elections</p>
            <p>COVID-19 response</p>
            <p>Regulations</p>
          </div>

          <div className="third-p">
            <p>About us</p>
            <p>About Meta</p>
            <p>Media gallery</p>
            <p>Brand resources</p>
            <p>For investors</p>
            <p>Our community</p>
            <p>Support SMB</p>
            <p>Giving together</p>
            <p>Social impact</p>
            <p>App support</p>
            <p>Facebook Help Center</p>
            <p>Messenger Help Center</p>
            <p>Instagram Help Center</p>
            <p>WhatsApp Help Center</p>
            <p>Workplace Help Center</p>
            <p>Meta Verified</p>
          </div>

          <div className="accord">
            <ul className="item-list">
              <li className="item1">
                <input type="radio" name="point" id="slide1" checked />
                <label htmlFor="slide1" className="label">
                  <h4>
                    Site terms and policies
                    <br />
                    Community standards
                    <br />
                    Terms
                    <br />
                    Cookie policy
                    <br />
                    Privacy policy
                  </h4>
                  <span className="control"></span>
                  <div className="slider "></div>
                </label>
              </li>
              <li className="item2">
                <input type="radio" name="point" id="slide2" />
                <label htmlFor="slide2" className="label">
                  <h4>
                    Smart glasses
                    <br />
                    Shop Ray-Ban Meta smart glasses
                    <br />
                    Ray-Ban Stories
                    <br />
                    Privacy information
                  </h4>
                  <span className="control"></span>
                  <div className="slider "></div>
                </label>
              </li>
              <li className="item3">
                <input type="radio" name="point" id="slide3" />
                <label htmlFor="slide3" className="label">
                  <h4>
                    About us
                    <br />
                    About Meta
                    <br />
                    Media gallery
                    <br />
                    Brand resources
                    <br />
                  </h4>
                  <span className="control"></span>
                  <div className="slider "></div>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="second-footer">
          <div className="united">
            <p>United States &#40;English&#41;</p>
          </div>
          <div className="p-con">
            <p>META QUEST </p>
            <p>
              Meta Quest: *Parents:* Important guidance & safety warnings for
              children&apos;s use here. Meta accounts for ages 10+ on Meta Quest
              2 and 3; all other Meta Quest headsets for ages 13+. Certain apps,
              games and experiences may be suitable for a more mature audience.
              META QUEST FEATURES, FUNCTIONALITY, AND CONTENT NOTICE: Features,
              functionality and content are subject to change or withdrawal at
              any time, may not be available in all areas or languages or may be
              restricted; may require enabled software or service activation,
              and additional terms, conditions and/or charges may apply.
            </p>
            <p>
              Certain apps and experiences will be available by winter 2023.
            </p>
            <p>
              META QUEST IMPORTANT SAFETY NOTICE{" "}
              <a
                href="https://www.meta.com/quest/quest-2-facial-interface-recall/"
                target="_blank">
                {" "}
                https://www.meta.com/quest/quest-2-facial-interface-recall/
              </a>
              .
            </p>
            <p>
              Financing Options. You may be offered financing options for your
              Meta purchases. Learn more <a href="#">here</a>.
            </p>

            <p>
              *Based on the graphic performance of the Qualcomm Snapdragon XR2
              Gen 2 vs XR2 Gen 1 on Meta Quest 2
            </p>

            <p>RAY-BAN | META SMART GLASSES</p>

            <p>
              Ray-Ban Meta smart glasses require a mobile phone with Android
              (location services enabled) or iOS operating system, wireless
              internet access, and account registration. Not compatible with all
              smartphones. Ray-Ban Meta smart glasses only available in select
              countries. Features, functionality and content are subject to
              change or withdrawal at any time. Please visit{" "}
              <a href="https://www.meta.com/smart-glasses/#faq" target="_blank">
                https://www.meta.com/smart-glasses/#faq
              </a>
              for the most up-to-date information. For ages 13 and up only. This
              product may interfere with personal medical devices. Requires
              updates to be installed from time to time, including prior to
              first use. While using Ray-Ban Meta smart glasses, it is always
              the user&apos;s responsibility to comply with any local laws and
              regulations, especially those relating to privacy and the use of
              recording devices. Additional account registration, terms and fees
              may apply.
            </p>

            <p>©2024 Meta.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Main;
