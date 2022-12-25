import React from "react";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#dcca87" }}>
        {title}
      </p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & Recognition" />
        <h1 className="headtext__cormorant">Our Laurels</h1>
        <div className="app__laurels_awards">
          {data.awards.map((award, index) => (
            <AwardCard award={award} key={award.title + index} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="image laurel" />
      </div>
    </div>
  );
};

export default Laurels;
