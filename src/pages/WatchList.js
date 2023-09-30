import React, { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
const WatchList = () => {
  const { token } = useUserContext();
  console.log(token);
  const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const options = {
    method: "GET",
    headers: {
      projectID: "k0oz8rtzq0n9",
      token: token,
    },
  };
  const fetchWatchlist = async () => {
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
