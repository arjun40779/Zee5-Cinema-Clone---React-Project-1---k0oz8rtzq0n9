import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/crousel.css";
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
const HeroBanner = () => {
  return (
    <Carousel
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showThumbs={false}
    >
      {data.map((item) => {
        return (
          <div className="carousel-container">
            <img src={item.thumbnail} alt={item.title}></img>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HeroBanner;
