import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MobNav.css";
import { useUserContext } from "../context/UserContext";
import { useMovieContext } from "../context/MovieContext";
import RightNav from "./RightNav";
const MobNav = () => {
  const { isLoggedIn } = useUserContext();
  const { setTitle } = useMovieContext();
  const [activeItem, setActiveItem] = useState("Home");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleClick = () => {
    let title = document.getElementById("search").value;
    setTitle(title);
  };
  const errMessage = () => {
    alert("Comming Soon");
  };
  return (
    <div className="wrapper-mob-nav">
      <div className="mob-nav">
        {!isSearchVisible && (
          <div className="mob-nav-top">
            <div className="mob-nav-top-left">
              <img
                className="brand-logo-mob"
                src="https://www.zee5.com/images/ZEE5_logo.svg"
              ></img>

              <Link to="/premium">
                <button className="buy-btn-mob">
                  <i className="fa-solid fa-crown"></i> BUY PLAN
                </button>
              </Link>
            </div>
            <div className="mob-nav-top-right">
              <i
                onClick={() => {
                  setIsSearchVisible(() => true);
                }}
                className="fa-solid fa-magnifying-glass"
              ></i>

              <RightNav msg={errMessage} />
            </div>
          </div>
        )}
        {isSearchVisible && (
          <div className="mob-search">
            <i
              onClick={() => {
                setIsSearchVisible(() => false);
              }}
              className="fa-solid fa-arrow-left"
            ></i>
            <div className="search">
              <Link to="/serach">
                <span onClick={handleClick} className="search__icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </Link>
              <input
                className="search__bar"
                id="search"
                placeholder="Search for Movies, Show etc."
                type="search"
              />
            </div>
          </div>
        )}

        <div className="mob-nav-btm">
          <ul className="navigation-list">
            <li
              className={`navigation-list-items ${
                activeItem === "Home" ? "active" : ""
              }`}
            >
              <Link to="/" onClick={() => handleItemClick("Home")}>
                Home
              </Link>
            </li>
            <li
              className={`navigation-list-items ${
                activeItem === "Tv Shows" ? "active" : ""
              }`}
            >
              <Link to="/tv show" onClick={() => handleItemClick("Tv Shows")}>
                Tv Shows
              </Link>
            </li>
            <li
              className={`navigation-list-items ${
                activeItem === "Movies" ? "active" : ""
              }`}
            >
              <Link to="/movie" onClick={() => handleItemClick("Movies")}>
                Movies
              </Link>
            </li>
            <li
              className={`navigation-list-items ${
                activeItem === "Web Series" ? "active" : ""
              }`}
              onClick={() => handleItemClick("Web Series")}
            >
              <Link to="/web series">Web Series</Link>
            </li>
            {isLoggedIn && (
              <li
                className={`navigation-list-items ${
                  activeItem === "Watchlist" ? "active" : ""
                }`}
              >
                <Link
                  to="watchlist"
                  onClick={() => handleItemClick("Watchlist")}
                >
                  Watchlist
                </Link>
              </li>
            )}
            <li
              className={`navigation-list-items ${
                activeItem === "Premium" ? "active" : ""
              }`}
            >
              <Link to="premium" onClick={() => handleItemClick("Premium")}>
                Premium
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobNav;
