import React from "react";
import VideoWindow from "./VideoWindow/VideoWindow";
import VideoList from "./VideoList/VideoList";
import "./VideoPage.css";

const VideoPage = ({ videoUrl, id }) => {
  return (
    <div className="video-boxes">
      <VideoWindow videoUrl={videoUrl} id={id} />
      <VideoList />
    </div>
  );
};

export default VideoPage;
