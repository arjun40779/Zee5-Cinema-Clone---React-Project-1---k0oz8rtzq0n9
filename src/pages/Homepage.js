import React from "react";
import ShowCarousel from "../components/ShowCarousel";
import "./homepage.css";
import HomePageBanner from "../components/HomePageBanner";

export default function Homepage() {
  const ShowCarouselList = ["web series", "tv show", "movie"];
  return (
    <div className="homepage">
      <HomePageBanner />
      {ShowCarouselList.map((item) => {
        return <ShowCarousel type={item} heading={item} />;
      })}
    </div>
  );
}
