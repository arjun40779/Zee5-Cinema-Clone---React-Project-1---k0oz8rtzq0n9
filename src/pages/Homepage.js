import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import "../style/homepage.css";
import Details from "../components/Details";
import HeroBanner from "../components/HeroBanner";
export default function Homepage({ data }) {
  return (
    <div className="homepage">
      <HeroBanner />
      <Content type={"web series"} heading="Web Series" />
      <Content type={"tv show"} heading="Tv Show" />
      <Content type={"movie"} heading="Movies" />
    </div>
  );
}
