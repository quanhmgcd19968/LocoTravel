import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';

import './header.css';
import logo from "../../images/loco-travel.png";

const Header = () => {
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
              <li>
                <div id="link-booking">
                  <NavLink className='header_links' eventKey="2" as={Link} to="/Booking">Booking</NavLink>
                </div>
              </li>
              <li>
                <div id="link-about">
                  <NavLink className='header_links' eventKey="3" as={Link} to="/About">About</NavLink>
                </div>
              </li>
              <li>
                <div id="link-contact">
                  <NavLink className='header_links' eventKey="4" as={Link} to="/Contact">Contact</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div id="header-right">
        <a className="header_links" href="#" id="list-place">List your places</a>
        <div id="log-box">
          <NavLink id="link-signin" as={Link} to="/Login">Login</NavLink>
          <NavLink className="header_links" id="link-signup" as={Link} to="/Register">Create an account</NavLink>
        </div>
      </div>
    </section>
  </header>
  )
}
export default Header;
