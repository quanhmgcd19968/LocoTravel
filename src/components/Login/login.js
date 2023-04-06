import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { NavLink } from "react-bootstrap";
import { UserAuth, signInWithGoogle } from "./../../context/AuthContext";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

import './login.css';
import profile from "../../images/loco-travel.png";
import account from "../../images/account.png";
import pass from "../../images/pass.png";



function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {user, logIn} = UserAuth();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      if (email==="admin@admin.com") navigate("/Admin/Products");
      
    } catch (error){
      console.log(error);
      setError(error.message);
    }
  };
    useEffect(() => {
      if (user) navigate("/");
    }, [user]);
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          {/* logo */}
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          {/* login form */}
          <div>
            <h1 id="login-title">Login</h1>
            {error?<p>{error}</p> : null}
            <form onSubmit={handleSubmit}>
              <div>
                <img src={account} alt="pass" className="account" />
                <input 
                type="text" 
                placeholder="Username" 
                className="name login_input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="account" />
                <input 
                type="password" 
                placeholder="Password" 
                className="name login_input"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-button">
                <button id="login-btn">Login</button>
              </div>
            </form>      
          </div>
          {/* login with 3rd parties */}
          <div className="login-third-party">
            <button className="login-third-party google btn" onClick={signInWithGoogle}>
              <FontAwesomeIcon icon={faGoogle} /> Login with Google
            </button>
          </div>
          {/* forgor pwd and sign up redirect */}
          <div className="login-bottom">
            <p className="link">
              <Link to="/ForgotPwd">Forgot Password</Link><br />
              or <br />
              <NavLink as={Link} to="/Register">Register now</NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;