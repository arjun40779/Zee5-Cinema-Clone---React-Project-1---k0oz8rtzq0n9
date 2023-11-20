import { React, useEffect, useState } from "react";
import debounce from "lodash/debounce";
import Card from "./Card";
import "./collection.css";
import ClipLoader from "react-spinners/ClipLoader";

const ShowList = ({ type, title }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  /* Fetching the data and filtering  */
  const fetchData = async () => {
    setIsLoading(true);
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
    setIsLoading(false);
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
      if (page > 10) return;
      setIsLoading(true);
      debouncedFetchMoreItems();
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data, isLoading]);
  //spinner
  return (
    <div className={`${type}`}>
      <p className="title">{title}</p>
      <div className="collection">
        {data.map((item) => {
          return <Card show={item} key={item._id} />;
        })}
      </div>
      {isLoading && (
        <div style={{ marginTop: "2rem" }} className="loading">
          <ClipLoader
            color={"white"}
            loading={isLoading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
    </div>
  );
};

export default ShowList;
