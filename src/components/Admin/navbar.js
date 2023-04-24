import React from "react";
import { NavLink } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './navbar.css';
import logo from "../../images/loco-travel.png";

function NavBar() {
  const navigate = useNavigate();

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
                <div>
                  <NavLink className='header_links' eventKey="1" as={Link} to="/Admin/products">Products</NavLink>
                </div>
              </li>
              <li>
                <div>
                  <NavLink className='header_links' eventKey="2" as={Link} to="/Admin/users">Users</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </header>
  )
};
export default NavBar;
