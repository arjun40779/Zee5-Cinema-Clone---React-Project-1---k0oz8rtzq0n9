import "../style/navbar.css";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useMovieContext } from "../context/MovieContext";
const Navbar = () => {
  const { isLoggedIn } = useUserContext();
  const { setTitle } = useMovieContext();
  
  const handleClick = () => {
    let title=document.getElementById("search").value;
    setTitle(title);
  };

  return (

    
    <div className="nav_bar">
      <div className="nav__left">
        <img src="https://www.zee5.com/images/ZEE5_logo.svg" alt="zee5" />
        <ul>
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
          <li>
            <Link to="premium"> premium</Link>
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

        <button className="btn__buy">
          <i className="fa-solid fa-crown"></i> BUY PLAN
        </button>
        {/*  <div className="btn__menu">
          <i className="fa-solid fa-bars"></i>
        </div> */}
      </div>
    </div>
  );
};
export default Navbar;
