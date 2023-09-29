import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Details from "./Details";
import "../style/card.css";
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
    </div>
  );
};
export default Card;
