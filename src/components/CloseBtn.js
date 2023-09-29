import { Link } from "react-router-dom";

const CloseBtn = () => {
  return (
    <div className="closeBtn">
      <Link to={"/"}>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
    </div>
  );
};
export default CloseBtn;
