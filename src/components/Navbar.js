import "../style/navbar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useMovieContext } from "../context/MovieContext";
import ResponsiveNav from "./ResponsiveNav";
import MoreList from "./MoreList";
import { useState } from "react";
import RightNav from "./navigation/RightNav";
const Navbar = () => {
  const { isLoggedIn } = useUserContext();
  const { setTitle } = useMovieContext();
  const [activeItem, setActiveItem] = useState("Home");
  const [isVisible, setVisible] = useState(false);
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
    <div className="nav_bar">
      <div className="nav__left">
        <img src="https://www.zee5.com/images/ZEE5_logo.svg" alt="zee5" />
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
              <Link to="watchlist" onClick={() => handleItemClick("Watchlist")}>
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
          <li className="icon">
            <MoreList msg={errMessage} />
          </li>
        </ul>
      </div>
      <div className="nav__right">
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
        <div onClick={errMessage} className="translate-btn">
          <p>
            A<sup>अ </sup>
          </p>
        </div>
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="btn__login">LOGIN </button>
          </Link>
        ) : (
          <Link to="/myprofile">
            <button className="btn__login">
              <i className="fa-regular fa-user"></i>{" "}
            </button>
          </Link>
        )}
        <Link to="/premium">
          <button className="btn__buy">
            <i className="fa-solid fa-crown"></i> BUY PLAN
          </button>
        </Link>
        <div
          onClick={() => {
            setVisible(() => {
              return !isVisible;
            });
          }}
          className="btn__menu"
        >
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
      {isVisible && <RightNav msg={errMessage} />}

      {/* <RightNav /> */}
    </div>
  );
};
export default Navbar;
