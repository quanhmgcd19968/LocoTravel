import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  onSnapshot,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./products.css";
import NavBar from './navbar';
import Footer from '../Footer/footer';

function Products() {
  const navigate = useNavigate();

  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const createProd = async () => {
    await addDoc(productsCollectionRef, { name: newName, location: newLocation, price: Number(newPrice) });
  };

  function NavigateUpdateProd(id, name, location, price)
  {
    navigate("/Admin/Products/updateProduct", 
    {
      state:{
        id: id,
        name: name,
        location: location,
        price: price
      }
    })
  };

  const deleteProd = async (id) => {
    const prodDoc = doc(db, "products", id);
    await deleteDoc(prodDoc);
  };

    useEffect(
      () =>
        onSnapshot(collection(db, "products"), (snapshot) =>
          setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
  
  return (
  <div className="AdminIndex_bg">
    <NavBar /> 
    <div className="AdminIndex">
      <h1>Manage Place Information</h1>
      <br />
      <input
        className="admin_prod_input"
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      /><br /><br />
      <input
        className="admin_prod_input"
        placeholder="Locate at..."
        onChange={(event) => {
          setNewLocation(event.target.value);
        }}
      /><br /><br />
      <input
        className="admin_prod_input"
        type="number"
        placeholder="Price..."
        onChange={(event) => {
          setNewPrice(event.target.value);
        }}
      /><br /><br />
      <button onClick={createProd} id="create-btn" className="admin_btn"> Create</button>
      <br /><br />
      <table>
        <tr className="table_header_row">
          <th className="column-header">Place</th>
          <th className="column-header">Location</th>
          <th className="column-header">Ticket Price</th>
          <th className="column-header">Options</th>
        </tr>
        {products.map((product, item) => {
        return (
              <tr key={item}>
                <td className="place__data">{product.name}</td>
                <td className="place__data">{product.location}</td>
                <td className="place__data">{product.price} VND</td>
                <td className="place__opts">
                  <button
                    id="update-btn" className="admin_btn"
                    onClick={() => {
                      NavigateUpdateProd(product.id, product.name, product.location, product.price);
                    }}
                  >
                    Update
                  </button>

                  <button
                    id="delete-btn" className="admin_btn"
                    onClick={() => {
                    deleteProd(product.id);
                    }}
                  >
                    Delete
                  </button>                  
                </td>
              </tr>
        );
      })}
      </table>
    </div>
  <Footer /> 
  </div>

  );
}

export default Products;