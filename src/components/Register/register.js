import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './register.css';
import profile from "../../images/loco-travel.png";
import account from "../../images/account.png";
import pass from "../../images/pass.png";



function Register() {
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
            <div>
              <img src={account} alt="pass" className="account" />
              <input type="text" placeholder="Username" className="name register_input" />
            </div>
            <div className='second-input'>
              <img src={account} alt="pass" className="account" />
              <input type="text" placeholder="E-mail" className="name register_input" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="account" />
              <input type="password" placeholder="Password" className="name register_input" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="account" />
              <input type="password" placeholder="Repeat Password" className="name register_input" />
            </div>
            <div className="register-button">
              <button id="register-btn" href=""><Link to="/">Sign me up</Link></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;