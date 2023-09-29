import React from "react";
import "../style/footer.css"
export default function Footer() {
  return  (<section className="footer">
        <hr/>
        <div className="footer-top">
            <div className="ft-left">
                <h3>Download Apps</h3>
                <a href="https://play.google.com/store/apps/details?id=com.graymatrix.did"><img src="https://www.zee5.com/images/play_store.png?ver=2.52.15" alt=""/></a>
                <a href="https://apps.apple.com/in/app/zee5-shows-live-tv-movies/id743691886"><img src="https://www.zee5.com/images/app_store.png?ver=2.52.15" alt=""/></a>
            </div>
            <div className="ft-right">
               <h3>Connect with us</h3>
               <a href="https://www.facebook.com/ZEE5/"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.instagram.com/zee5/"><i className="fa-brands fa-instagram" id="inst"></i></a>
                <a href="https://twitter.com/zee5india"><i className="fa-brands fa-twitter" id="twtr"></i></a>
                <a href="https://www.youtube.com/channel/UCXOgAl4w-FQero1ERbGHpXQ"><i className="fa-brands fa-youtube" id="yutb"></i></a>
            </div>
        </div>
        <div className="footer-2"><h4>About Us</h4><h4>|</h4><h4>Help Center</h4><h4>|</h4><h4>Privacy Policy</h4><h4>|</h4><h4>Terms of Use</h4></div>
        <div className="footer-body">
            
                <ul>
                    <li className="makeBold">Popular TV Shows</li>
                    <li>Kumkum Bhagya</li>
                    <li>kundali Bhagya</li>
                    <li>Bhagya Lakshmi</li>
                    <li>Tujhse Hai Raabta</li>
                    <li>Kyun Rishton Mein Katti Batti</li>
                </ul>
          
            <div>
                <ul>
                    <li className="makeBold">Premium Movies</li>
                    <li>Kya Meri Sonam Gupta Bewafa Hai?</li>
                    <li>Helmet</li>
                    <li>200 Halla Ho</li>
                    <li>14 Phere</li>
                    <li>Dial 100</li>
                </ul>
            </div>
            <div><ul>
                    <li className="makeBold">Popular Live TV Channels</li>
                    <li>Aaj Tak</li>
                    <li>Zee News</li>
                    <li>Zee TV HD</li>
                    <li>&TV HD</li>
                    <li>Zee Marathi HD</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="makeBold">Popular Web Series</li>
                    <li>Sunflower</li>
                    <li>Jeet Ki Jid</li>
                    <li>Bicchoo Ka Khel</li>
                    <li>State Of Siege: 26/11</li>
                    <li>Naxalbari</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="makeBold">Bollywood Top Celebrities</li>
                    <li>Sunny Leone</li>
                    <li>Disha Patani</li>
                    <li>Deepika Padukone</li>
                    <li>Salman Khan</li>
                    <li>Nora fatehi</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>Best viewed on Google Chrome 80+, Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+
Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights reserved.</p>
        </div>
    </section>);
}
