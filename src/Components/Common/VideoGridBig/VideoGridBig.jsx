import React from "react";
import "./VideoGridBig.css";
import Card from "../VideoCard/VideoCard";
import { videos } from "../../../data/videos";

const Videos = () => {
  return (
    <div className="videos-box">
      <div className="videos-main-container">
        {videos.map((video, index) => (
          <Card
            key={index}
            link={video.link}
            image={video.image}
            name={video.name}
            channelName={video.channelName}
            channelImage={video.channelImage}
            channelLink={video.channelLink}
            views={video.views}
          />
        ))}
      </div>
    </div>
  );
};

export default Videos;
