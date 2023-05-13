import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { db } from "./../../firebase/firebaseConfig";
import { Link } from "react-router-dom";
import { onSnapshot, collection } from "firebase/firestore";

import './home.css';
import Header from "./../Header/header";
import Footer from "./../Footer/footer";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "products"), (snapshot) =>
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  return (
    <div className="home-main">
      <Header /> 
      <section id='search-container'>
        <div id="welcome-banner">
          <h1 class="welcome_message">LOCAL TRAVEL &amp; MORE</h1>
          <h2 class="welcome_message">Get the best prices on online booking and receive tickets before having fun!</h2>
        </div>
        <div id="search-wrapper">
          <p id='introduction-homepage'>Proud to be a platform offers curated travel experiences to offbeat destinations, connect travelers with local hosts who are passionate about showcasing their culture, traditions, and hidden gems.</p>
          <button id="search-btn">
            LET'S GO EXPLORE !
          </button>
        </div>
      </section>
      <div id="places-container">
        <h3 id="recommend-title">Featured places recommended for you</h3>
        <div id="places-list">
        {products.map((product) => {
        return (
        <div>
          <div className="place_item">
            <a href="#" className="link_place">
              <div className="place_img">
                <Link to={`/products/${product.id}`}>
                  <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Place-Icon-by-Kanggraphic.jpg" />
                </Link>
              </div>
              <div className="place_name">
                <Link to={`/products/${product.id}`}>{product.name}</Link>
              </div>
              <div className="place_locate">
                <br />
                <FontAwesomeIcon icon={faLocationDot} />
                <Link to={`/products/${product.id}`}><span> {product.location}</span></Link>
              </div>
              <div className="place_price">
                <p>{product.price} VND</p>
              </div>
            </a>
          </div>
        </div>
        );
        })}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default Home;