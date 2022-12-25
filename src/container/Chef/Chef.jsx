import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./chef.css";
const Chef = () => {
  return (
    <div className="app__chef app__wrapper app__bg section__padding">
      <div className="app__chef-img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__chef-content app__wrapper_info">
        <div className="app__chef-content_heading">
          <SubHeading title="Chef’s Word" />
          <h1 className="app__chef-content_heading-title headtext__cormorant">
            What we believe in
          </h1>
        </div>
        <p className="p__opensans">
          <span className="app__chef-content-quote">
            <RiDoubleQuotesL />
          </span>
          auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat, aliquam molestie
          lectus eu. Congue iaculis integer curabitur semper sit nunc.
        </p>
        <div className="app__chef-signature">
          <h5 className="app__chef-signature_name p__cormorant">Kevin Luo</h5>
          <p className="app__chef-signature_title p__opensans">
            Chef & Founder
          </p>
          <div className="app__chef-signature-img">
            <img src={images.sign} alt="chef signature" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
