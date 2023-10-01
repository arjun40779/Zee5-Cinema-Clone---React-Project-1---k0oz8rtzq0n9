import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
const AddToWatchlist = ({ show }) => {
  const [color, setColor] = useState("regular");
  const { token } = useUserContext();

  const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const addShow = async (e) => {
    console.log(token);
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        projectID: "k0oz8rtzq0n9",
        Authorization: token,
      },
      body: { showId: show._id },
    });
    const data = await res.json();
    console.log(data);
    e.target.style.color = "black";
    if (color != "solid") {
      setColor("solid");
    } else {
      setColor("regular");
    }
  };
  return <i onClick={addShow} className={`fa-${color} fa-bookmark`}></i>;
};

export default AddToWatchlist;
