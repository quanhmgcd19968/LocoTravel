  import { useParams, Link } from "react-router-dom";
  import React from "react";
  import { getFirestore } from "firebase/firestore";
  import { useState, useEffect } from "react";
  import { onSnapshot, collection, doc } from "firebase/firestore";
  import "./productDetail.css";
  
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
              <h1>Place: {thisProduct.name}</h1>
              <p>Locate at: {thisProduct.location}</p>
              <p>Ticket Price: {thisProduct.price}</p>
              <Link to={`/`}>
                <button id="purchaseBtn">Add to cart</button>
              </Link>
            </div>
          </div>
        </div>
        )}
      </div>
    );
  }
  export default ProductDetail;


