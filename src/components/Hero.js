import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMovieContext } from "../context/MovieContext";
import Card from "./Card";
const Hero = () => {
  const { data, isLoading } = useMovieContext();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="hero">
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        <Carousel
          responsive={responsive}
          autoPlaySpeed={500}
          itemClass="carousel-item-padding-40-px"
        >
          {show.map((item) => {
            return <Card key={item._id} show={item} />;
          })}
        </Carousel>
      )}
    </div>
  );
};
export default Hero;
