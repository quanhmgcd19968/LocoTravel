import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  updateDoc,
  doc,
} from "firebase/firestore";
import "./users.css";
import NavBar from './navbar';
import Footer from '../Footer/footer';

function UpdateUser() {
  const dataLocation = useLocation();
  const index = dataLocation.state;

  const navigate = useNavigate();

  const [name, setName] = useState(index.name);
  const [role, setRole] = useState(index.role);
  const [email, setEmail] = useState(index.email);

  const updateUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    try{
      await updateDoc(userDoc, {
        email: email,
        name: name,
        role: role,
      });
      navigate("/Admin/Users");
    } catch (err) {
      alert(err)
    }    
  }
  
  return (
  <div className="AdminIndex_bg">
    <NavBar /> 
    <div className="AdminIndex">
      <h1>Edit User Information</h1>
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
        value = {role}
        onChange={(event) => {
          setRole(event.target.value);
        }}
      /><br /><br />
      <input
        className="admin_prod_input"
        value = {email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      /><br /><br />
      <button onClick={() => {updateUser(index.id)}} id="update-btn" className="admin_btn"> Update</button>
      <br /><br />
    </div>
  <Footer /> 
  </div>

  );
}

export default UpdateUser;