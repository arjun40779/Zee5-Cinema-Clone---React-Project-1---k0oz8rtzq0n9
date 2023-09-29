import { useState, useEffect } from "react";
import Card from "../components/Card";
import { useMovieContext } from "../context/MovieContext";
const Search = () => {
  const { title } = useMovieContext(); 
  console.log(title);
  const { results, setResults } = useState([]);
  const { isLoading, setIsLoading } = useState(true);
  const url=`https://academics.newtonschool.co/api/v1/ott/show?filter={"title" : \"${title}\"}`;
  const fetchData = async () => {
  
    console.log(url,"url");
    const res = await fetch(url,
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

    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="search-results">
      {/*  {!isLoading &&
        results.map((item) => {
          return <Card show={item} key={item._id} />;
        })} */}
      {results}
    </div>
  );
};
export default Search;
