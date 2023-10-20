import "../style/navbar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useMovieContext } from "../context/MovieContext";
import ResponsiveNav from "./ResponsiveNav";
const Navbar = () => {
  const { isLoggedIn } = useUserContext();
  const { setTitle } = useMovieContext();
  const displayMenu = () => {
    const nav = document.getElementById("mobile-nav");
    nav.style.display = "block";
  };
  const handleClick = () => {
    let title = document.getElementById("search").value;
    setTitle(title);
  };
  const displayList = () => {
    document.getElementById("more-list").style.display = "block";
  };
  const hideList = () => {
    document.getElementById("more-list").style.display = "none";
  };

  return (
    <div className="nav_bar">
      <div className="nav__left">
        <img src="https://www.zee5.com/images/ZEE5_logo.svg" alt="zee5" />
        <ul className="navigation-list">
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/tv show"> Tv Shows</Link>
          </li>
          <li>
            <Link to="/movie"> Movies</Link>
          </li>

          <li>
            <Link to="web series"> Web Series</Link>
          </li>
          {isLoggedIn && (
            <li>
              <Link to="watchlist"> Watchlist</Link>
            </li>
          )}
          <li>
            <Link to="premium"> Premium</Link>
          </li>
          <li className="icon">
            <div
              className="grids"
              onMouseOver={displayList}
              onMouseOut={hideList}
            >
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
              <div className="grid"></div>
            </div>
            <ul className="more-list" id="more-list">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="nav__right">
        <div className="search">
          <input
            className="search__bar"
            id="search"
            placeholder="Search for Movies, Show etc."
            type="search"
          />
          <Link to="/serach">
            <span onClick={handleClick} className="search__icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </Link>
        </div>
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="btn__login">Login </button>
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
        <div onClick={displayMenu} className="btn__menu">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>

      <ResponsiveNav />
    </div>
  );
};
export default Navbar;
