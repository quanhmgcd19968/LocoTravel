import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import "./cart.css";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./../../firebase/firebaseConfig";
import { UserAuth } from "./../../context/AuthContext";
import Header from "./../Header/header";
import Footer from "./../Footer/footer";

function Cart() {
  const [carts, setCards] = useState([]);
  const {user} = UserAuth();
  console.log(user.email);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "carts"),
        where("userId", "==", user.email)
      );
      const unsubscribe = onSnapshot(q, (snapshot) =>
        setCards(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        )
      );
      return () => unsubscribe();
    }
  }, [user]);

  function total() {
    return carts.reduce(
      (totalPrice, item) => totalPrice + item.productPrice,
      0
    );
  }
  
  return (
    <div>
      <Header />
      <div id="cartMain">
        <div id="cartHeader">
          <h1 id="cartTitle">Shopping Cart</h1>
          <Link to={`/`}>
            <button id="closeBtn">
              <FontAwesomeIcon icon={faArrowAltCircleLeft} />
            </button>
          </Link>
        </div>
        <div id="cartContent">
          <div id="cartItems">
            {carts.map((item) => (
              <div key={item.id} className="cartItem">
                <div className="itemImg">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="itemInfo">
                  <h2 className="itemName">Place: {item.productName}</h2>
                  <p className="itemPrice">Ticket price: {item.productPrice} VND</p>
                  <p className="itemQty">Quantity of tickets: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div id="cartAmount">
            <p id="total-title">TOTAL: </p>
            <p id="total-price">{total()} VND</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
