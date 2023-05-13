import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserAuth } from "./../../context/AuthContext";

import "./forgotPwd.css";

function ForgotPwd() {

  const { forgotPassword } = UserAuth();
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email)
      alert("An instruction was sent to your e-mail for the password reset")
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="forgot">
      <div className="forgot_container">
        <h1>Reset your password</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="forgot_textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <button type="submit" className="forgot_btn">
            Send email
          </button>
          <div>
            Don't have an account? <Link to="/register">Register</Link> now.
          </div>
        </form>
      </div>
    </div>
  );
}
export default ForgotPwd;