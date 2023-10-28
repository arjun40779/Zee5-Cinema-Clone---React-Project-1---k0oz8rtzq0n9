import { Link } from "react-router-dom";
import "./MobFooter.css";
import { useState, React } from "react";

const MobFooter = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleList = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="wrapper-mob-footer">
      <div className="mob-footer">
        <div className="footer-icons">
          <div className="store-icon">
            <h3>Download App</h3>
            <Link
              to={
                "https://play.google.com/store/apps/details?id=com.graymatrix.did&pli=1"
              }
            >
              <img
                src="https://www.zee5.com/images/play_store.png?ver=3.15.5"
                alt="playstore"
                className="store-icon-img"
              ></img>
            </Link>
            <Link
              to={
                "https://apps.apple.com/in/app/zee5-movies-web-series-shows/id743691886"
              }
            >
              <img
                src="https://www.zee5.com/images/app_store.png?ver=3.15.5"
                alt="applestore"
                className="store-icon-img"
              ></img>
            </Link>
          </div>
          <div className="social-icon">
            <h3>Connect with Us</h3>
            <Link to={"https://www.facebook.com/ZEE5/"} target="_blank">
              <div className="social-icon-container">
                <i class="fa-brands fa-square-facebook"></i>
              </div>
            </Link>
            <Link to={"https://www.instagram.com/zee5/"} target="_blank">
              <div className="social-icon-container">
                <i class="fa-brands fa-square-instagram"></i>
              </div>
            </Link>
            <Link to={"https://twitter.com/zee5india"} target="_blank">
              <div className="social-icon-container">
                <i className="fa-brands fa-twitter"></i>
              </div>
            </Link>
            <Link
              to={"https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ"}
              target="_blank"
            >
              <div className="social-icon-container">
                <i className="fa-brands fa-youtube"></i>
              </div>
            </Link>
          </div>
        </div>
        <ul className="footer-menu">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
        </ul>

        <ul className="footer-maga-menu">
          <li className="menu-items">
            <p onClick={() => toggleList(0)}> Popular TV Shows</p>
            <ul
              className={`expanded-list ${
                activeIndex === 0 ? "active-list" : ""
              } `}
            >
              <li>Kumkum Bhagya</li>
              <li>Kundali Bhagya</li>
              <li>Bhagya Lakshmi</li>
              <li>Meet</li>
              <li>Annapoorna</li>
              <li>Indira</li>
              <li>Koorean Drama</li>
              <li>Pakistani Series</li>
            </ul>
          </li>
          <li className="menu-items">
            <p onClick={() => toggleList(1)}>Premium Movies</p>
            <ul
              className={`expanded-list ${
                activeIndex === 1 ? "active-list" : ""
              } `}
            >
              <li>Gadar 2</li>
              <li>Haddi</li>
              <li>Kisi ka Bhai Kisi ki Jaan</li>
              <li>Bandaa</li>
              <li>RRR</li>
              <li>Uunchai</li>
              <li>Uri:The Surgical Strike</li>
              <li>The Kashmir Files</li>
              <li>Dial 100</li>
            </ul>
          </li>
          <li className="menu-items">
            <p onClick={() => toggleList(2)}> Popular LIVE TV Channels</p>
            <ul
              className={`expanded-list ${
                activeIndex === 2 ? "active-list" : ""
              } `}
            >
              <li>Zee News</li>
              <li>Zee TV HD</li>
              <li>&TV HD</li>
              <li>Zee Marathi HD</li>
            </ul>
          </li>
          <li className="menu-items">
            <p onClick={() => toggleList(3)}>Popular Web Series</p>
            <ul
              className={`expanded-list ${
                activeIndex === 3 ? "active-list" : ""
              } `}
            >
              <li>Taj</li>
              <li>Sunflower</li>
              <li>Tripling</li>
              <li>Pitchers</li>
              <li>Naxalbari</li>
              <li>Anantham</li>
              <li>Gaalivana</li>
            </ul>
          </li>
          <li className="menu-items">
            <p onClick={() => toggleList(4)}> Bollywood Top Celebrities</p>
            <ul
              className={`expanded-list ${
                activeIndex === 4 ? "active-list" : ""
              } `}
            >
              <li>Sunny Leone</li>
              <li>Disha Patani</li>
              <li>Deepika Padukone</li>
              <li>Salman Khan</li>
              <li>Manoj Bajpayee</li>
              <li>Nora Fatehi</li>
              <li>Pooja Hegde</li>
              <li>Sunny Deol</li>
              <li>Ameesha Patel</li>
            </ul>
          </li>
          <li className="menu-items">
            <p onClick={() => toggleList(5)}> Games & News</p>
            <ul
              className={`expanded-list ${
                activeIndex === 5 ? "active-list" : ""
              } `}
            >
              <li>Play</li>
              <li>Stories</li>
            </ul>
          </li>
        </ul>

        <div className="copy-right-text">
          <p>
            Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla
            FireFox 75+, Safari 5.1.5+
          </p>
          <p>
            Copyright &#169; 2023 Zee Entertainment Enterprises Ltd. All Rights
            reserved.{" "}
          </p>
          <p>
            Developed by{" "}
            <Link to={"https://arjun40779-portfolio.netlify.app/"}>Arjun.</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobFooter;
