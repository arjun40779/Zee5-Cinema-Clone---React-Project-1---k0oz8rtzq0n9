import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import "./Details.css";
const Details = ({}) => {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchShow = async () => {
      setLoading(true);
      const res = await fetch(
        `https://academics.newtonschool.co/api/v1/ott/show/${id}`,
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
      console.log(data.data);
      setShow(data.data);
      console.log(show, "show");
      setLoading(false);
    };
    fetchShow();
  }, []);

  return (
    <div className="details">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <video className="video" controls>
            <source src={show.video_url} type="video/mp4" />
          </video>
          <h1>{show.title}</h1>
          <h4>
            {show.type} {loading ? null : show.createdAt.slice(0, 4)}{" "}
          </h4>
          <p>{show.description}</p>
          {loading
            ? null
            : show.keywords.map((item) => {
                return <span key={item}>{item} </span>;
              })}
        </div>
      )}
    </div>
  );
};
export default Details;
