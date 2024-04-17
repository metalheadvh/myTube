import React from "react";
import "./VideoWindow.css";
import DescriptionCard from "../DescriptionCard/DescriptionCard";
import { videos } from "../../../../data/videos";

const VideoWindow = ({ videoUrl, id }) => {
  return (
    <div className="big-video-screen">
      <div className="screen-box">
        <iframe
          className="video-screen"
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-container">
        <div className="video-title">
          <DescriptionCard
            name={videos[id].name}
            channelName={videos[id].channelName}
            views={"2.3"}
            description={videos[id].description}
            descriptionLarge={videos[id].descriptionLarge}
            videoUrl={videoUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoWindow;
