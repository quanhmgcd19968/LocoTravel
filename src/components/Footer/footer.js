import "./footer.css";
import LocoTravelLogo from "./../../images/loco-travel.png";
import DanangLogo from "./../../images/danang-logo.png";
import DanangBanner from "./../../images/danang-banner.png";

const Footer = () => {
  return (
      <footer id="page-footer">
        <div id="footer-partner">
          <div id="partner-list">
            <img src={LocoTravelLogo} alt="partners" className="partner_list_item" />
            <img src={DanangLogo} alt="partners" className="partner_list_item" />
            <img src={DanangBanner} alt="partners" className="partner_list_item" />
          </div>
        </div>
        <div id="footer-copyright">
          <p className="copyright_info">
          All material here in © 2005–2022 LocoTravel Company Pte. Ltd. All Rights Reserved.
          </p>
          <p className="copyright_info">
          LocoTravel is first based in Danang, believed to be one of the leaders in online travel booking in Vietnam.
          </p>
        </div>
      </footer>
  );
}

export default Footer;
