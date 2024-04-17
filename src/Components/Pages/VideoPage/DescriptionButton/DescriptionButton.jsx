import React from "react";
import "./DescriptionButton.css";

const DescriptionButton = ({ text, icon }) => {
  return (
    <div className="share-box">
      <p className={icon}></p>
      <p>{text}</p>
    </div>
  );
};

export default DescriptionButton;
