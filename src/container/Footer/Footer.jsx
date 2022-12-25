import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./footer.css";
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer-overlay" />
      <div className="app__footer-newsletter flex__center">
        <Newsletter />
      </div>
      <div className="app__footer-bottom app__bg section__padding flex__center">
        <div className="app__footer-footer">
          <div className="app__footer-footer_contact">
            <h3 className="p__cormorant">Contact Us</h3>
            <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
            <p className="p__opensans">+1 212-344-1230</p>
            <p className="p__opensans">+1 212-555-1230</p>
          </div>
          <div className="app__footer-footer_credits">
            <div className="app__footer-footer_credits-img">
              <img src={images.gericht2} alt="logo" />
            </div>
            <p className="p__opensans">
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <div className="app__footer-footer_credits-spoonimg spoon__img">
              <img src={images.spoon} alt="spoon" />
            </div>
            <div className="app__footer-footer_credits-social">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
            <p className="p__opensans">2021 Gerícht. All Rights reserved.</p>
          </div>
          <div className="app__footer-footer_working">
            <h3 className="p__cormorant">Working Hours</h3>
            <p className="p__opensans">Monday-Friday:</p>
            <p className="p__opensans">08:00am-12:00am</p>
            <p className="p__opensans">Saturday-Sunday:</p>
            <p className="p__opensans">07:00am-11:00pm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
