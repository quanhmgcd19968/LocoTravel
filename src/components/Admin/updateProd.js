import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  updateDoc,
  doc,
} from "firebase/firestore";
import "./products.css";
import NavBar from './navbar';
import Footer from '../Footer/footer';

function UpdateProd() {
  const dataLocation = useLocation();
  const index = dataLocation.state;

  const navigate = useNavigate();

  const [name, setName] = useState(index.name);
  const [location, setLocation] = useState(index.location);
  const [price, setPrice] = useState(index.price);

  const updateProd = async (id) => {
    const prodDoc = doc(db, 'products', id);
    try{
      await updateDoc(prodDoc, {
        name: name,
        location: location,
        price: price
      });
      navigate("/Admin/Products");
    } catch (err) {
      alert(err)
    }    
  }
  
  return (
  <div className="AdminIndex_bg">
    <NavBar /> 
    <div className="AdminIndex">
      <h1>Edit Place Information</h1>
      <br />
      <input
        className="admin_prod_input"
        value = {name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      /><br /><br />
      <input
        className="admin_prod_input"
        value = {location}
        onChange={(event) => {
          setLocation(event.target.value);
        }}
      /><br /><br />
      <input
        className="admin_prod_input"
        type="number"
        value = {price}
        onChange={(event) => {
          setPrice(event.target.value);
        }}
      /><br /><br />
      <button onClick={() => {updateProd(index.id)}} id="update-btn" className="admin_btn"> Update</button>
      <br /><br />
    </div>
  <Footer /> 
  </div>

  );
}

export default UpdateProd;