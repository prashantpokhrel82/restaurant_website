import React from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="app__newsletter">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
      <form className="app__newsletter-form">
        <input type="email" name="email" id="email" />
        <button type="button" className="custom__button">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
