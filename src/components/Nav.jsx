import logo from "../img/Meta-Logo.png";

import { FaVanShuttle } from "react-icons/fa6";
import { SlReload } from "react-icons/sl";
import { MdLocalPolice } from "react-icons/md";
import { RxCaretDown } from "react-icons/rx";
import { RxCaretUp } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";

import "./Nav.css";
import { useState } from "react";

function Nav() {
  const [isMetaQuest, setIsMetaQuest] = useState(false);
  const [rayBan, setRayBan] = useState(false);
  const [appsAndGames, setAppsAndGames] = useState(false);
  const [support, setSupport] = useState(false);
    const [caretUp, setCaretUp] = useState(false)

  const handleMetaOver = () => {
    setIsMetaQuest(true);
    setCaretUp(true)
  };

  const handleMetaLeave = () => {
    setIsMetaQuest(false);
    setCaretUp(false)

  };

  const handleRayOver = () => {
    setRayBan(true);
    setCaretUp(true)

  };

  const handleRayLeave = () => {
    setRayBan(false);
    setCaretUp(false);
  };

  const handleAppsAndGamesOver = () => {
    setAppsAndGames(true);
    setCaretUp(true);
  };

  const handleAppsAndGamesLeave = () => {
    setAppsAndGames(false);
    setCaretUp(false);
  };

  const handleSupportOver = () => {
    setSupport(true);
    setCaretUp(true);
  };

  const handleSupportLeave = () => {
    setSupport(false);
    setCaretUp(false);
  };

  return (
    <nav>
      <div className="free-worry">
        <ul>
          <li>
            <FaVanShuttle /> <span>Free delivery</span>
          </li>
          <li>
            <SlReload />
            <span>Worry-free trial</span>
          </li>
          <li>
            <MdLocalPolice />
            <span>Warranty</span>
          </li>
        </ul>
      </div>

      <div className="second-nav">
        <div className="second-left">
          <div className="logo">
            <img src={logo} alt="website-logo" />
          </div>

          <div className="after-logo">
            <div className="icon-con">
              <ul onMouseOver={handleMetaOver} onMouseLeave={handleMetaLeave}>
                <li>Meta Quest</li>
                <RxCaretDown className="caret" />
              </ul>
            </div>
            <div className="icon-con">
              <ul onMouseOver={handleRayOver} onMouseLeave={handleRayLeave}>
                <li>Ray-Ban | Meta</li>
                <RxCaretDown className="caret" />
                {/* {caretUp ? <RxCaretUp className="caret"/> : <RxCaretDown className="caret" />} */}
              </ul>
            </div>
            <div className="icon-con">
              <ul
                onMouseOver={handleAppsAndGamesOver}
                onMouseLeave={handleAppsAndGamesLeave}>
                <li>Apps and games</li>
                <RxCaretDown className="caret" />
              </ul>
            </div>
          </div>
        </div>

        <div className="second-right">
          <div>
            <ul>
              <li>About Meta</li>
              <li
                onMouseOver={handleSupportOver}
                onMouseLeave={handleSupportLeave}>
                Support
              </li>
              <RxCaretUp
                className="caret"
                onMouseOver={handleSupportOver}
                onMouseLeave={handleSupportLeave}
              />
            </ul>

            <div className="search">
              <IoSearch className="icon" />
              <span>Search Meta Store</span>
            </div>
            <div>
              <TbShoppingBag className="icon" />
            </div>

            <div>
              <IoPersonOutline className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="drop-down-con">
        {isMetaQuest && (
          <div className="drop-down">
            <div className="meta-quest">
              <div>
                <p>Meta Quest overview</p>
                <p>Meta Quest 3</p>
                <p>
                  Meta Quest 2 <span>New low price</span>
                </p>
                <p>Meta Quest Pro</p>
                <p>Compare devices</p>
              </div>
              <div>
                <p>Accessories</p>
                <p>Meta Warranty Plus</p>
                <p>Gift cards</p>
              </div>
            </div>
          </div>
        )}

        {rayBan && (
          <div className="drop-down">
            <div className="ray">
              <p>Ray-Ban | Meta overview</p>
              <p>Shop all</p>
              <p>Wayfarer</p>
              <p>Headliner</p>
            </div>
          </div>
        )}

        {appsAndGames && (
          <div className="drop-down">
            <div className="apps">
              <div>
                <p> Shop all</p>
                <p>Social</p>
                <p>Gaming</p>
                <p>Fitness</p>
              </div>
              <div>
                <p>Entertainment</p>
                <p>Productivity</p>
                <p>Mixed reality</p>
                <p>Meta Quest+</p>
              </div>
            </div>
          </div>
        )}

        {support && (
          <div className="drop-down">
            <div className="support">
              <div>
                <p>Store and Device Help Centers</p>
                <p>Find order</p>
                <p>Meta Quest and Quest Pro</p>
                <p>Meta Portal</p>
                <p>Smart Glasses</p>
              </div>
              <div>
                <p>Meta Help Center</p>
                <p>Accounts Center</p>
                <p>Meta Pay</p>
                <p>Policies</p>
                <p>Connected Experiences</p>
              </div>
              <div>
                <p>App Help Centers</p>
                <p>Meta Horizon</p>
                <p>Facebook</p>
                <p>Messenger</p>
                <p>Instagram</p>
                <p>WhatsApp</p>
                <p>Workplace</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
