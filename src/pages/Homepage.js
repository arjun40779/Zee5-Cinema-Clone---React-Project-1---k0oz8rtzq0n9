import React from "react";

import Content from "../components/Content";

import "./homepage.css";

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
