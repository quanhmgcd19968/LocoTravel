import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from "./../../context/AuthContext";

import './register.css';
import profile from "../../images/loco-travel.png";
import account from "../../images/account.png";
import pass from "../../images/pass.png";



function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error){
      console.log(error);
    }
  };
  console.log(user);
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
          {/* register form */}
          <div>
            <h1 id='register-title'>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className='second-input'>
                <img src={account} alt="pass" className="account" />
                <input 
                type="text" 
                placeholder="E-mail" 
                className="name register_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="account" />
                <input 
                type="password" 
                placeholder="Password" 
                className="name register_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </form>
            <div className="register-button">
              <button id="register-btn" onClick={handleSubmit}>Sign me up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;