import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../style/ResponsiveNav.css";
const ResponsiveNav = () => {
  const hideNav = () => {
    document.getElementById("mobile-nav").style.display = "none";
  };
  const { user } = useUserContext();
  const name = user.name ? user.name : "Guest";
  return (
    <div id="mobile-nav" className="resposiveNav">
      <i onClick={hideNav} className="fa fa-xmark"></i>
      <div className="logo">
        <img src="https://www.zee5.com/images/ZEE5_logo.svg" alt="zee5" />
      </div>
      <div className="user-info">
        <img
          className="avatar"
          src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
          alt="avatar"
        />
        <p className="user-name">{name}</p>
      </div>
      <ul onClick={hideNav} className="resposive-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./myprofile">Profile</Link>
        </li>
        <li>
          <Link to="./movie">Movies</Link>
        </li>
        <li>
          <Link to="./web series">Web Series</Link>
        </li>
        <li>
          <Link to="./tv show">Tv Show</Link>
        </li>
        <li>
          <Link to="./premium">Premium</Link>
        </li>
      </ul>
    </div>
  );
};

export default ResponsiveNav;
