import { Link } from "react-router-dom";
import "./card.css";
import ClipLoader from "react-spinners/ClipLoader";
import AddToWatchlist from "./AddToWatchlist";
const Card = ({ show, isLoading }) => {
  return (
    <div className="card">
      {isLoading && <ClipLoader loading={isLoading} />}
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
              <i className="fa-solid fa-play"></i> Watch
            </div>
          </Link>
          <AddToWatchlist show={show} />
        </div>
      </div>
    </div>
  );
};
export default Card;
