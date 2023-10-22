import "../style/content.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
export default function Content({ heading, type }) {
  const { data, isLoading } = useMovieContext();
  const fdata = data.filter((item) => item.type === type);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 7,
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
        {fdata.map((item) => {
          return <Card key={item._id} show={item} />;
        })}
      </Carousel>
    </div>
  );
}
