import { useParams, Link } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { getFirestore } from "firebase/firestore";
import { useEffect } from "react";
import { onSnapshot, collection, doc } from "firebase/firestore";
import "./productDetail.css";

import Header from "./../Header/header";
import Footer from "./../Footer/footer";
import Cart from "./../Cart/cart";

function ProductDetail() {
  const [thisProduct, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    const db = getFirestore();
    const productsRef = collection(db, 'products');
    const productRef = doc(productsRef, productId);

    const unsubscribe = onSnapshot(productRef, (doc) => {
      if (doc.exists()) {
        const productData = doc.data();
        setProduct(productData);
      }
    });
    return () => unsubscribe();
  }, [productId]);

  const addToCart = () => {
    const existingItem = cartItems.find((item) => item.id === thisProduct.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === thisProduct.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);
    } else {
      const newItem = { ...thisProduct, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div>
      {cartItems.length > 0 && <Cart />}
      <Header />
      <div id="productDetailLayout">
        <div id="backHomeBtnDiv">
          <Link to={`/`}>
            <button id="backHomeBtn">Go Back</button>
          </Link>
        </div>
        <div id="mainDetailLayout">
          <div id="productImg">
            <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Place-Icon-by-Kanggraphic.jpg" alt="product" />
          </div>
          <div id="productInfo">
            <h1 id="detailName">{thisProduct && thisProduct.name}</h1>
            <FontAwesomeIcon icon={faLocationDot} />
            <span id="detailLocation"> {thisProduct && thisProduct.location}</span>
            <p>Ticket Price: <span id="detailPrice">{thisProduct && thisProduct.price}</span> VNĐ</p>
            <p>**Above cost applies for 1 person / 1 day</p>
            <p>**The cost does not include VAT incurred on the purchase of the tickets.</p>
            <Link to={`/Cart`}>
              <button id="addCart" onClick={addToCart}>Add to cart</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
