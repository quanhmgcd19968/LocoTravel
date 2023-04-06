import React, { useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as ReactDOM from 'react-dom';
import { query, collection, getDocs, where } from "firebase/firestore";
import { UserAuth } from "./../../context/AuthContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import './header.css';
import logo from "../../images/loco-travel.png";
import { async } from "@firebase/util";

function Header() {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    }catch (error) {
      console.log(error);
    }
  }
  console.log(user);

  return (
  <header id="page-header">
    <section id="header-container">
      <div id="header-left">
        <nav id="header-logo-links">
          <div id="header-logo">
            <NavLink id="header-logo-img" className='header_links' as={Link} to="/">
              <img src={logo} alt="" />
            </NavLink>
          </div>
          <div id="header-links">
            <ul id="header-links-list">
              <li>
                <div id="link-home">
                  <NavLink className='header_links' eventKey="1" as={Link} to="/">Home</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div >
        <div id="log-box">
          {user?.email ?
          <div id="header-right">
            <div>Welcome, {user?.email}</div>
            <button onClick={handleLogout}id="link-signup" className="header_links">Logout</button>
          </div> :
          <div id="header-right">
            <NavLink  id="link-signin" as={Link} to="/Login">Login</NavLink>
            <NavLink className="header_links" id="link-signup" as={Link} to="/Register">Register</NavLink>
          </div>  
          }         
        </div>
             
      </div>
    </section>
  </header>
  )
};
export default Header;
