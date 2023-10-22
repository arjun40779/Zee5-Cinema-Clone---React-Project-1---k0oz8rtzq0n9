import React, { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import Card from "../components/Card";

const WatchList = () => {
  const [data, setData] = useState([]);
  const { token } = useUserContext();
  console.log(token);
  const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
  const options = {
    method: "GET",

    headers: {
      Authorization: "Bearer " + token,
      projectId: "k0oz8rtzq0n9",
    },
  };
  const fetchWatchlist = async () => {
    console.log(token);
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    setData(data.data.shows);
  };
  useEffect(() => {
    fetchWatchlist();
  }, []);
  return (
    <div className="collection">
      {data.map((item) => {
        return <Card show={item} key={item._id} />;
      })}
    </div>
  );
};

export default WatchList;
