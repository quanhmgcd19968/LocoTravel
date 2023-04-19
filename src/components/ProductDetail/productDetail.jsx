  import { useParams, Link } from "react-router-dom";
  import React from "react";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
  import { getFirestore } from "firebase/firestore";
  import { useState, useEffect } from "react";
  import { onSnapshot, collection, doc } from "firebase/firestore";
  import "./productDetail.css";

  import Header from "./../Header/header";
  import Footer from "./../Footer/footer";
  
  function ProductDetail() {
    const [thisProduct, setProduct] = useState(null);
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
  
    return (
      <div className="">
        {thisProduct && (
        <div id="productDetailLayout">
          <Header /> 
          <div id="backHomeBtnDiv">
            <Link to={`/`}>
              <button id="backHomeBtn">Go Back</button>
            </Link>
          </div>
          <div id="mainDetailLayout">
            <div id="productImg">
              <img src="https://www.creativefabrica.com/wp-content/uploads/2019/02/Place-Icon-by-Kanggraphic.jpg" />
            </div>
            <div id="productInfo">
              <h1 id="detailName">{thisProduct.name}</h1>
              <FontAwesomeIcon icon={faLocationDot} />
              <span id="detailLocation"> {thisProduct.location}</span>
              <p>Ticket Price: <span id="detailPrice">{thisProduct.price}</span> VNĐ</p>
              <p>**Above cost applies for 1 person / 1 day</p>
              <p>**The cost does not include VAT incurred on the purchase of the tickets.</p>
              <Link to={`/`}>
                <button id="addCart">Add to cart</button>
              </Link>
            </div>
          </div>
          <Footer /> 
        </div>
        )}
      </div>
    );
  }
  export default ProductDetail;


