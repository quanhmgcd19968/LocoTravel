import './home.css';
import profile from "../images/loco-travel.png";

function Home() {
  return (
    <div className="home-main">
      <div className="header">
        <div className="header-left">
          <span>Hotline: 0910910911</span>
        </div>
        <div className="header-right">
          <div className="#">
            <ul>
              <li id="check-order">
                  <a href="#">Kiểm tra đơn hàng</a>
              </li>
              <li id="cart">
                  <a href="#">Giỏ hàng</a>
              </li>
              <li id="sign-in">
                  <a href="#">Đăng nhập</a>
              </li>
              <li id="sign-up">
                  <a href="#">Đăng ký</a>
              </li>
            </ul>
        </div>
      </div>
    </div>
      <div className='banner'>
        this is banner
        <div className="#">
             <img src={profile} alt="profile" className="profile"/>
        </div>
      </div>
      <div className='menu'>this is menu</div>
      <div className='content'>content</div>

    </div>
  );
}

export default Home;