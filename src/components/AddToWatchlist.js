import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
const AddToWatchlist = ({ show }) => {
  
  const [color, setColor] = useState("regular");
  const { token, isLoggedIn } = useUserContext();
  const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const options = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      projectId: "k0oz8rtzq0n9",
    },
    body: JSON.stringify({
      showId: show._id,
    }),
  };
  const addShow = async () => {
    const res = await fetch(url, options);
    const data = await res.json();

    alert(data.message);

    if (color == "solid") {
      setColor("regular");
    } else {
      setColor("solid");
    }
  };
  return (
    <>
      {isLoggedIn && (
        <i id="add" onClick={addShow} className={`fa-${color} fa-bookmark`}></i>
      )}
    </>
  );
};

export default AddToWatchlist;
