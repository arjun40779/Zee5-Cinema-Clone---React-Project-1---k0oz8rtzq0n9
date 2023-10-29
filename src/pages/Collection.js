import { React, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import Card from "../components/Card";
import "./collection.css";
const Collection = ({ type, title }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsisLoading] = useState(true);
  /* Fetching the data and filtering  */
  const fetchData = async () => {
    if (page > 20) return;
    
    setIsisLoading(true);
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?page=${page}&limit=100`,
      {
        method: "GET",
        headers: {
          projectID: "k0oz8rtzq0n9",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjBhOWRlYzE3ZGEyNTMyYTM1MzI4NiIsImlhdCI6MTY5MzQ5MzkzMiwiZXhwIjoxNzI1MDI5OTMyfQ.G7iEnDNK3eNO9TPRmPVIpL7bFc-UIQBqd4OQciTxVms",
        },
      }
    );
    const data = await res.json();
    const filData = data.data.filter((item) => item.type == type);
    setData((prev) => [...prev, ...filData]);
    setPage((prev) => prev + 1);
    setIsisLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const debouncedFetchMoreItems = debounce(fetchData, 1500);
  /* Infinte scrolling */
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 600 >=
        document.documentElement.offsetHeight &&
      !isLoading
    ) {
      debouncedFetchMoreItems();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data, isLoading]);

  return (
    <div className={`${type}`}>
      <p className="title">{title}</p>
      <div className="collection">
        {data.map((item) => {
          return <Card show={item} key={item._id} />;
        })}
      </div>
      {isLoading && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};

export default Collection;
