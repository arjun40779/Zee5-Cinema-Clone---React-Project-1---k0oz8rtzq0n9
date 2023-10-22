import { useState } from "react";
import "./rightNav.css";
import { Link } from "react-router-dom";
import { ErrorMessage } from "formik";
const RightNav = ({ msg }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleList = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Clicking the active item again hides the list
    } else {
      setActiveIndex(index); // Clicking an inactive item shows the list
      setIsNavVisible(false);
    }
  };

  return (
    <div className={`right-nav-wrapper ${isNavVisible ? "visible" : "hidden"}`}>
      <ul className="right-nav">
        <li className="home">
          <Link className="act" to={"/"}>
            Home
          </Link>
        </li>
        <li className="right-nav-items" onClick={() => toggleList(0)}>
          <div className="right-nav-items-container">
            <div className="list-title">
              Explore <span>&or;</span>
            </div>
            <ul
              className={`right-nav-items-list ${
                activeIndex === 0 ? "active-list" : ""
              }`}
            >
              <li>
                <Link to={"./movie"}>Movies</Link>
              </li>
              <li>
                <Link to={"./premium"}>Premium</Link>
              </li>
              <li>
                <Link to={"./web series"}>Web Series</Link>
              </li>
              <li onClick={msg}>Rent</li>
              <li onClick={msg}>Live Tv</li>
              <li onClick={msg}>Music</li>
              <li onClick={msg}>Cricket</li>
              <li onClick={msg}>Kids</li>
              <li onClick={msg}>Songs</li>
              <li onClick={msg}>Videos</li>
            </ul>
          </div>
        </li>
        <li className="right-nav-items" onClick={() => toggleList(1)}>
          <div className="right-nav-items-container">
            <div className="list-title">
              Plans <span>&or;</span>
            </div>
            <ul
              className={`right-nav-items-list ${
                activeIndex === 1 ? "active-list" : ""
              }`}
            >
              <li>Buy Plan</li>
              <li onClick={msg}>Have a prepaid code?</li>
            </ul>
          </div>
        </li>
        <li className="right-nav-items" onClick={() => toggleList(2)}>
          <div className="right-nav-items-container">
            <div className="list-title">
              Settings <span>&or;</span>
            </div>
            <ul
              className={`right-nav-items-list ${
                activeIndex === 2 ? "active-list" : ""
              }`}
            >
              <li onClick={msg}>Reset settings to default</li>
            </ul>
          </div>
        </li>
        <li className="right-nav-items">
          <div className="right-nav-items-container">
            <div className="list-title"></div>
            <ul className={`right-nav-items-list active-list`}>
              <li onClick={msg}>Refer and earn Discount </li>
            </ul>
          </div>
        </li>
        <li className="right-nav-items" onClick={() => toggleList(3)}>
          <div className="right-nav-items-container">
            <div className="list-title" onClick={msg}>
              Info <span>&or;</span>
            </div>
            <ul
              className={`right-nav-items-list ${
                activeIndex === 3 ? "active-list" : ""
              }`}
            >
              <li onClick={msg}>About Us</li>
              <li onClick={msg}>Help Center</li>
              <li onClick={msg}>Content Redressal Mechanism</li>
              <li onClick={msg}>Terms of Use</li>
              <li onClick={msg}>Privacy Policy</li>
            </ul>
          </div>
        </li>
        <div className="nav-footer">Version 3.15.5</div>
      </ul>
    </div>
  );
};

export default RightNav;
