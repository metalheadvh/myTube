import React from "react";
import "./VideoWindow.css";
import DescriptionCard from "../Common/DescriptionCard/DescriptionCard";

const VideoWindow = () => {
  return (
    <div className="big-video-screen">
      <div className="screen-box">
        <iframe
          className="video-screen"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FR8iIMPNqYk?si=iAbjxu_uhgV3TqHw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="video-container">
        <div className="video-title">
          <DescriptionCard />
        </div>
      </div>
    </div>
  );
};

export default VideoWindow;
