import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Login from "./Login";
import "../style/Myprofile.css";
const Myprofile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, user } = useUserContext();
  const token = localStorage.getItem("jwtToken");
  const logout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };
  if (!isLoggedIn) {
    return <Login />;
  }
  return (
    <div className="myprofile">
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <button className="logout_btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};
export default Myprofile;
