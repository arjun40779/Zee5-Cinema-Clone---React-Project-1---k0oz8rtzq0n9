// MovieContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsisLoading] = useState(false);
  const fetchData = async () => {
    setIsisLoading(true);
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/ott/show?page=1&limit=2000`,
      {
        method: "GET",
        headers: {
          projectID: "k0oz8rtzq0n9",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjBhOWRlYzE3ZGEyNTMyYTM1MzI4NiIsImlhdCI6MTY5MzQ5MzkzMiwiZXhwIjoxNzI1MDI5OTMyfQ.G7iEnDNK3eNO9TPRmPVIpL7bFc-UIQBqd4OQciTxVms",
        },
      },
    );
    const data = await res.json();
    setData((prev) => [...prev, ...data.data]);
    console.log(data.data);
    setIsisLoading(false);
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  const contextValues = { data, isLoading, title, setTitle };

  return (
    <MovieContext.Provider value={contextValues}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};

export { MovieProvider, useMovieContext };
