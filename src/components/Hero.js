import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMovieContext } from "../context/MovieContext";
import "../style/Hero.css";
import Card from "./Card";
const data = [
  {
    id: 1,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/cover/1920x7707ab884a4cfe542a0a7f5332839ffe2a6.jpg",
    title: "Gadar 2",
    type: "Movies",
    keywords: ["Action", "Drama", "War"],
    video_url: "blob:https://www.zee5.com/379704a3-abc5-4a7a-9516-bd1c0d32c3cc",
  },
  {
    id: 2,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5418670/cover/1920x770d19e352a2ff54b3dbda9842e0a838bab.jpg",
    title: "Haddi",
    type: "Movies",
    keywords: ["Crime", "Drama"],
  },
  {
    id: 3,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5359029/cover/1920x770e80779dbdde042fd8f451ea5a69cec08.jpg",
    title: "Sirf Ek Bandaa Kaafi Hai",
    type: "Movies",
    keywords: ["Drama", "Thriller"],
  },
  {
    id: 4,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5416889/cover/1920x770c5ba68b8ef5740e7bb9ecb5e66f094fa.jpg",
    title: "Sa Re Ga Ma Pa 2023",
    type: "TV Shows",
    keywords: ["Reality"],
  },
  {
    id: 5,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3392/cover/1920x7706731e5349f17415692fd73cb40212bb5.jpg",
    title: "Bhagya Lakshmi",
    type: "TV Shows",
    keywords: ["Drama "],
  },
  {
    id: 6,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5379692/cover/1920x7702258faa42539473682e3515399b0d37173697b003b284ddca66881e4c870c11b.jpg",
    title: "Kisi Ka Bhai Kisi Ki Jaan",
    type: "Movies",
    keywords: ["Action", "Drama", "Romance"],
  },
  {
    id: 7,
    thumbnail:
      "https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5334341/cover/1920x7703f62f1e28948480fb8b1a13dab03dba2.jpg",
    title: "Mrs Undercover",
    type: "Movies",
    keywords: ["Comedy", "Thriller"],
  },
];
const Hero = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
      slidesToSlide: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="hero">
      <Carousel
        responsive={responsive}
        autoPlaySpeed={2000}
        centerMode={true}
        centerSlidePercentage={70}
        infinite={true} // Set infinite to true
        keyBoardControl={true} // Enable keyboard control
        customTransition="all .5" // Custom transition
        removeArrowOnDeviceType={["tablet", "mobile"]} // Optional: remove arrows on smaller devices
        focusOnSelect={true} // Highlight center slide on click
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((item) => {
          return <img key={item.id} src={`${item.thumbnail}`} />;
        })}
      </Carousel>
    </div>
  );
};
export default Hero;
