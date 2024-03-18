import React from "react";
import "./VideoGridSmall.css";
import Card from "../VideoCard/VideoCard";
import { videos } from "../../../data/videos";

const VideoGridSmall = () => {
  return (
    <div className="videos-list-container">
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
  );
};

export default VideoGridSmall;
