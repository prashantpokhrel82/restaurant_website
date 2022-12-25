import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./findus.css";
const FindUs = () => {
  return (
    <div
      className="app__findus app__wrapper section__padding app__bg"
      id="#contact"
    >
      <div className="app__findus-content app__wrapper-info">
        <SubHeading title="Contact" />
        <h2 className="headtext__cormorant">Find Us</h2>
        <p className="p__opensans" style={{ color: "#aaa" }}>
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <div className="app__findus-content_time">
          <p className="p__cormorant" style={{ color: "#dcca87" }}>
            Opening Hours
          </p>
          <p className="p__opensans">Mon-Fri: 10:00am - 02:00 am</p>
          <p className="p__opensans">Sat-Sun: 10:00am - 03:00 am</p>
        </div>
        <button type="button" className="custom__button">
          Visit Us
        </button>
      </div>
      <div className="app__wrapper_img">
        <div className="app__findus-img">
          <img src={images.findus} alt="find us" />
        </div>
      </div>
    </div>
  );
};

export default FindUs;
