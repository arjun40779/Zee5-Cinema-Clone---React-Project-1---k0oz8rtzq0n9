import "./styles.css";
import Navbar from "./navigation/Navbar";

import { useEffect, useState } from "react";

import Main from "./components/Main";
import MobFooter from "./footer/MobFooter";

export default function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await fetch(
      "https://academics.newtonschool.co/api/v1/ott/show?limit=1000",
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
    /* console.log(data.data); */
  };
  fetchData();

  return (
    <div className="app">
      <Navbar />
      <Main />

      <MobFooter />
    </div>
  );
}
