import React from "react";
import Homepage from "../pages/Homepage";
import Movies from "../pages/Movies";
import TvShow from "../pages/TvShow";
import WebSeries from "../pages/WebSeries";
import Search from "../pages/Search";
import Login from "../user/Login";
import Signup from "../user/Signup";
import Myprofile from "../user/Myprofile";
import Details from "./Details";
import Premium from "../pages/Premium";
import { Route, Routes } from "react-router-dom";
import WatchList from "../pages/WatchList";
import Message from "./Message";
const Main = () => {
  return (
    <div className="main">
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
        <Route path="/premium" element={<Premium />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
    </div>
  );
};

export default Main;
