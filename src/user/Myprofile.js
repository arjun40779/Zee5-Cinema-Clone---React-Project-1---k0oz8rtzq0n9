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
      <ProfileImg user={user} token={token} />
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
