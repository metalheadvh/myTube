import React from "react";
import "./VideoList.css";
import VideoGrid from "../Common/VideoGridSmall/VideoGridSmall";
import VideoGridSmall from "../Common/VideoGridSmall/VideoGridSmall";

const VideoList = () => {
  return (
    <div className="list-container">
      <div className="suggestions">
        <button className="button">
          <a class="fa-regular fa-thumbs-up"></a>
          <p>Like</p>
        </button>
        <button className="button">
          <a class="fa-solid fa-user-plus"></a>
          <p>Subscribe</p>
        </button>
        <button className="button">
          <a class="fa-solid fa-star"></a>
          <p>Favorite</p>
        </button>
      </div>
      <div className="videos-secondary-container">
        <VideoGridSmall />
      </div>
    </div>
  );
};

export default VideoList;
