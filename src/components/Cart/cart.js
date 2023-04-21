import React, { useState } from "react";
import Header from "./../Header/header";
import Footer from "./../Footer/footer";
import "./cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedItems);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  return (
    <div>
      <Header />
      <div id="cartLayout">
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty, no products added yet.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
