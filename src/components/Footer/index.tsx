import Insta from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import Linkedin from "../../assets/linkedin.svg";
import YouTube from "../../assets/youtube.svg";
import Visa from "../../assets/visa.svg";
import Mastercard from "../../assets/mastercard.svg";
import Vtex from "../../assets/logo-vtex.svg";
import Maeztra from "../../assets/logo-maeztra.svg";

import "./styles.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-social">
          <img src={Facebook} alt="facebook" />
          <img src={Linkedin} alt="linkedin" />
          <img src={Insta} alt="instagram" />
          <img src={YouTube} alt="youtube" />
        </div>
        <div className="payment">
          <img src={Visa} alt="visa" />
          <img src={Mastercard} alt="mastercard" />
          <img src={Visa} alt="visa" />
          <img src={Mastercard} alt="mastercard" />
        </div>
        <div className="footer-info">
          <div>
            <p>Powered by</p>
            <img src={Vtex} alt="logo-vtex" />
          </div>
          <div>
            <p>Developed by</p>
            <img src={Maeztra} alt="logo-maeztra" />
          </div>
        </div>
      </div>
    </>
  );
};

export { Footer };
