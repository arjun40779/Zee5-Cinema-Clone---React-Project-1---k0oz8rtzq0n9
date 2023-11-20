import "./content.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
export default function ShowCarousel({ heading, type }) {
  const { data, isLoading } = useMovieContext();
  const filteredData = data.filter((item) => item.type === type);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="content">
      <div className="title">
        <p className="title">{heading}</p>
        <Link className="more" to={`/${type}`}>
          More &gt;{" "}
        </Link>
      </div>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        autoPlaySpeed={500}
        itemClass="carousel-item-padding-40-px"
      >
        {filteredData.map((item) => {
          return <Card key={item._id} show={item} isLoading={isLoading} />;
        })}
      </Carousel>
    </div>
  );
}
