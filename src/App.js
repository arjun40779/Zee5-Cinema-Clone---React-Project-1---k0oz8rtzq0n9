import "./styles.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";

import { Route, Routes } from "react-router-dom";
import Signup from "./user/Signup";
import Login from "./user/Login";
import Homepage from "./pages/Homepage";
import Movies from "./pages/Movies";
import TvShow from "./pages/TvShow";
import WebSeries from "./pages/WebSeries";
import { useEffect, useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Myprofile from "./user/Myprofile";
import Song from "./pages/Song";
import Search from "./pages/Search";

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
      },
    );
    const data = await res.json();
    /* console.log(data.data); */
  };
  fetchData();

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie" element={<Movies />} />
        <Route path="/tv show" element={<TvShow />} />
        <Route path="/web series" element={<WebSeries />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/serach" element={<Search />} />
      </Routes>

      <Footer />
    </div>
  );
}
