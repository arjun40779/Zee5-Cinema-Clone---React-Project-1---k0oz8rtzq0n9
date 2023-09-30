import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Details from "./Details";
import "../style/card.css";
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
        <p className="show-info">
          {show.type} -
          {show.keywords.map((item, i) => {
            if (i == 2) return;

            return item + " ";
          })}
        </p>
        <p className="btn">
          <Link to={`/details/${show._id}`}>
            <span>Watch Now</span>{" "}
          </Link>
          <AddToWatchlist />
        </p>
        <p></p>
      </div>
    </div>
  );
};
export default Card;
