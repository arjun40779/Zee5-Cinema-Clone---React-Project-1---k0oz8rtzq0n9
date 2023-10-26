import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Login from "./Login";
import "../style/Myprofile.css";

import ProfileImg from "./ProfileImg";
const Myprofile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, user, token } = useUserContext();
  console.log(user);

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  if (!isLoggedIn) {
    return <Login />;
  } /* upload image to server*/

  return (
    <div className="myprofile">
      <div className="profile-img">
        <div className="avtar">
          {user.profileImage ? (
            <img
              src={URL.createObjectURL(user.profileImage)}
              alt="avatar"
              width="200"
            />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
              alt="Img"
            />
          )}
        </div>
      </div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <h3>{user.paymentDetails}</h3>
      <button className="logout_btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};
export default Myprofile;
