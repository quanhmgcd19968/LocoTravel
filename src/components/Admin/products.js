import { useState, useEffect } from "react";
import { db } from "../../firebase/firebaseConfig";

import {
  onSnapshot,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import "./products.css";
import NavBar from './navbar';
import Footer from '../Footer/footer';

function Products() {
  const [newName, setNewName] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newPrice, setNewPrice] = useState(0);

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const createProd = async () => {
    await addDoc(productsCollectionRef, { name: newName, location: newLocation, image: newImage, price: Number(newPrice) });
  };

  const updateProd = async (id, price) => {
    const prodDoc = doc(db, "products", id);
    const newFields = { price: price + 10000 };
    await updateDoc(prodDoc, newFields);
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
    console.log(products);

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
      />
      <input
        className="admin_prod_input"
        placeholder="Locate at..."
        onChange={(event) => {
          setNewLocation(event.target.value);
        }}
      />
      <input
        className="admin_prod_input"
        placeholder="Image..."
        onChange={(event) => {
          setNewImage(event.target.value);
        }}
      />
      <input
        className="admin_prod_input"
        type="number"
        placeholder="Price..."
        onChange={(event) => {
          setNewPrice(event.target.value);
        }}
      />
      <button onClick={createProd} id="create-btn" className="admin_btn"> Create</button>
      <br /><br />
      <table>
        <tr className="table_header_row">
          <th className="column-header">Place</th>
          <th className="column-header">Location</th>
          <th className="column-header">Image</th>
          <th className="column-header">Ticket Price</th>
          <th className="column-header">Options</th>
        </tr>
        {products.map((product) => {
        return (
              <tr>
                <td className="place__data">{product.name}</td>
                <td className="place__data">{product.location}</td>
                <td className="place__data">{product.image}</td>
                <td className="place__data">{product.price} VND</td>
                <td className="place__opts">
                  <button
                    onClick={() => {
                      updateProd(product.id, product.price);
                    }}
                    id="update-btn" className="admin_btn"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                    deleteProd(product.id);
                    }}
                    id="delete-btn" className="admin_btn"
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