import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
const WatchList = () => {
  const { token } = useUserContext();
  console.log(token);
  const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const options = {
    method: "GET",

    headers: {
      Authorization: "Bearer " + token,
      projectID: "k0oz8rtzq0n9",
    },
  };
  const fetchWatchlist = async () => {
    console.log(token);
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    fetchWatchlist();
  }, []);
  return <div>WatchList</div>;
};

export default WatchList;
