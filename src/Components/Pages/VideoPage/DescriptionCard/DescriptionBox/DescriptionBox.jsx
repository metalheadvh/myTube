import React, { useState } from "react";
import "./DescriptionBox.css";

const DescriptionBox = ({ description, descriptionLarge }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="video-text">
      <h3>Description</h3>
      <div style={{ marginTop: "0.5rem" }}>
        <br />
        {description}
        <br />
        <br />
        <br />
        <div className="show-more" onClick={toggleIsExpanded}>
          <button>
            <p className="fa-solid fa-caret-down"> SHOW MORE</p>
          </button>
        </div>
        <br />
        <div className={isExpanded ? "show-text" : "show-text active"}>
          {descriptionLarge}
          <br />
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
