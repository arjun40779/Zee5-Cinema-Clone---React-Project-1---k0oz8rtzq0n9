import React from "react";

const AddToWatchlist = () => {
  const addShow = async (e) => {
    e.target.style.color = "black";
  };
  return <i onClick={addShow} class="fa-regular fa-bookmark"></i>;
};

export default AddToWatchlist;
