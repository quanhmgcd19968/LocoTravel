import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './login.css';
import profile from "../../images/loco-travel.png";
import account from "../../images/account.png";
import pass from "../../images/pass.png";



function Login() {
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
            <h1>Login</h1>
            <div>
              <img src={account} alt="pass" className="account" />
              <input type="text" placeholder="Username" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="account" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button href=""><Link to="/home">Log me in</Link></button>
            </div>
          </div>
          {/* login with 3rd parties */}
          <div className="login-third-party">
            <a href="#" class="fb btn">
              <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
            </a>
            <a href="#" class="google btn">
              <FontAwesomeIcon icon={faGoogle} /> Login with Google+
            </a>
          </div>
          {/* forgor pwd and sign up redirect */}
          <div className="login-bottom">
            <p className="link">
              <a href="#">Forgot password?</a><br />
              or <br />
              <a href="#">Sign Up </a>now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;