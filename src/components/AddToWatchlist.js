import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
const AddToWatchlist = ({ show }) => {
  const color="regular"
  const {token}=useUserContext();
  const url="https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const options = {
    method: "PATCH",
    headers: {
      'Authorization': 'Bearer ' + token,
      projectID: "k0oz8rtzq0n9",
    },
    body: JSON.stringify({
      showId: show._id,
    }),
  };
  const addShow=async ()=>{
    const res=await fetch(url,options);
    const data=await res.json();
    console.log(data)
    console.log(show._id,"show id");
  }
  return <i onClick={addShow} className={`fa-${color} fa-bookmark`}></i>;
};

export default AddToWatchlist;
