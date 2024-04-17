import React from "react";
import "./SidebarCard.css";

const SidebarCard = ({ className, sidebarElement }) => {
  return (
    <div className="sidebar-text">
      <div className="sidebar-icon">
        <div className={className}></div>
      </div>
      <p>{sidebarElement}</p>
    </div>
  );
};

export default SidebarCard;
