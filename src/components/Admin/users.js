import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {
  onSnapshot,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import "./users.css";
import NavBar from './navbar';
import Footer from '../Footer/footer';

function Users() {
  const navigate = useNavigate();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newRole, setNewRole] = useState("");

  const [users, setUsers] = useState([]);

  const createUsers = async () => {
    await setDoc(doc(db, "users", newEmail),
    { 
      authProvider: "local",
      email: newEmail,
      name: newName,
      role: newRole,
    })
  };
  function NavigateUpdateUser(id, name, role, email)
  {
    navigate("/Admin/Users/updateUser", 
    {
      state:{
        id: id,
        name: name,
        role: role,
        email: email
      }
    })
  };

  const deleteUsers = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

    useEffect(
      () =>
        onSnapshot(collection(db, "users"), (snapshot) =>
          setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
    console.log(users);

  return (
  <div className="AdminIndex_bg">
    <NavBar /> 
    <div className="AdminIndex">
      <h1>User Management</h1>
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
        placeholder="Role..."
        onChange={(event) => {
          setNewRole(event.target.value);
        }}
      /><br /><br />
      <input
        className="admin_prod_input"
        placeholder="Email..."
        onChange={(event) => {
          setNewEmail(event.target.value);
        }}
      /><br /><br />
      <button onClick={createUsers} id="create-btn" className="admin_btn"> Create</button>
      <br /><br />
      <table>
        <tr className="table_header_row">
          <th className="column-header">User Name</th>
          <th className="column-header">Role</th>
          <th className="column-header">Email</th>
          <th className="column-header">Options</th>
        </tr>
        {users.map((user) => {
        return (
              <tr>
                <td className="place__data">{user.name}</td>
                <td className="place__data">{user.role}</td>
                <td className="place__data">{user.email}</td>
                <td className="place__opts">
 
                <button
                    id="update-btn" className="admin_btn"
                    onClick={() => {
                      NavigateUpdateUser(user.id, user.name, user.role, user.email);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                    deleteUsers(user.id);
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

export default Users;