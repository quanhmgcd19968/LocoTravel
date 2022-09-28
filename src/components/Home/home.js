import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';

import './home.css';
import Header from "./../Header/header";
import Footer from "./../Footer/footer";
import SunWorld from "./../../images/sun-world.jpg";
import MySon from "./../../images/my-son.png";
import VinPearl from "./../../images/vinpearl.jpg";
import ThanTai from "./../../images/nui-thantai.jpg";
import SonTra from "./../../images/sontra.jpg";
import BaNa from "./../../images/bana-hills.jpg";
import MarbleMount from "./../../images/marble-mount.png";
import SuoiHoa from "./../../images/suoi-hoa.jpg";

function Home() {
  return (
    <div className="home-main">
      <Header /> 
      <section id='search-container'>
        <div id="welcome-banner">
          <h1 class="welcome_message">LOCAL TRAVEL &amp; MORE</h1>
          <h2 class="welcome_message">Get the best prices on online booking and receive tickets before having fun!</h2>
        </div>
        <div id="search-wrapper">
          <div id="seach-box">
            <FontAwesomeIcon icon={faSearch} />
            <span id="seach-box-placeholder">
              <input type="text" id='search-box-input' placeholder='Where you wanna go in Danang?'/>
            </span>
          </div>
          <button id="search-btn">
            SEARCH
          </button>
        </div>
      </section>
      <div id="places-container">
        <h3 id="recommend-title">Featured places recommended for you</h3>
        <div id="places-list">
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={SunWorld} />
              </div>
              <div className="place_name">
                <p>Sun World Danang</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Hai Chau, Danang</span>
              </div>
              <div className="place_price">
                <p>VND 520,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={BaNa} />
              </div>
              <div className="place_name">
                <p>Ba Na Hills</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Hoa Vang, Danang</span>
              </div>
              <div className="place_price">
                <p>VND 799,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={SonTra} />
              </div>
              <div className="place_name">
                <p>Son Tra Mount</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Son Tra, Danang</span>
              </div>
              <div className="place_price">
                <p>VND 399,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={MySon} />
              </div>
              <div className="place_name">
                <p>My Son Sanctuary</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> My Son, Quang Nam</span>
              </div>
              <div className="place_price">
                <p>VND 200,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={ThanTai} />
              </div>
              <div className="place_name">
                <p>Than Tai Water Park</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Hoa Vang, Danang</span>
              </div>
              <div className="place_price">
                <p>VND 489,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={VinPearl} />
              </div>
              <div className="place_name">
                <p>Vin Pearl Hoian</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Thang Binh, Quang Nam</span>
              </div>
              <div className="place_price">
                <p>VND 500,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={MarbleMount} />
              </div>
              <div className="place_name">
                <p>The Marble Mountains</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Ngu Hanh Son, Danang</span>
              </div>
              <div className="place_price">
                <p>VND 120,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
          {/* place item */}
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <img src={SuoiHoa} />
              </div>
              <div className="place_name">
                <p>Suoi Hoa Tourist</p>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <span> Hoa Vang, Danang</span>
              </div>
              <div className="place_price">
                <p>VND 520,000</p>
              </div>
            </a>
          </div>
          {/* end place item */}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Home;