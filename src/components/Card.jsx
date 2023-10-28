import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Details from "./Details";
import "./card.css";
import AddToWatchlist from "./AddToWatchlist";
const Card = ({ show }) => {
  return (
    <div className="card">
      <Link to={`/details/${show._id}`}>
        <img
          key="show._id"
          className="slide_img"
          src={show.thumbnail}
          alt={show.title}
        />
      </Link>
      <div className="info">
        <p className="show-title">{show.title}</p>

        <div className="btns">
          <Link to={`/details/${show._id}`}>
            <div className="watch-btn">
              <i class="fa-solid fa-play"></i> Watch
            </div>
          </Link>
          <AddToWatchlist show={show} />
        </div>
      </div>
    </div>
  );
};
export default Card;
