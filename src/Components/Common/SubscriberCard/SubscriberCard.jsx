import React from "react";
import "./SubscriberCard.css";

const SidebarCard = ({ channelName }) => {
  return (
    <div className="text">
      <div className="icon">
        <a class="fa-solid fa-podcast"></a>
      </div>
      <p>{channelName}</p>
    </div>
  );
};

export default SidebarCard;
