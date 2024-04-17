import React, { useContext, useState } from "react";
import "./VideoList.css";
import VideoGridSmall from "../VideoGridSmall/VideoGridSmall";
import { LikeButtonContext } from "../../../../Contexts/LikeButtonContextProvider";

const VideoList = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const { liked, toggleLike } = useContext(LikeButtonContext);

  const userIsSubscribed = () => {
    setIsSubscribed(!isSubscribed);
  };
  const videoIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="list-container">
      <div className="suggestions">
        <button className="button-video-list" onClick={toggleLike}>
          {liked ? (
            <>
              <p className="fa-solid fa-thumbs-up"></p>
              <p>Liked</p>
            </>
          ) : (
            <>
              <p className="fa-regular fa-thumbs-up"></p>
              <p>Like</p>
            </>
          )}
        </button>
        <button className="button-video-list" onClick={userIsSubscribed}>
          {isSubscribed ? (
            <>
              <p className="fa-solid fa-user-minus"></p>
              <p>Unsubscribe</p>
            </>
          ) : (
            <>
              <p className="fa-solid fa-user-plus"></p>
              <p>Subscribe</p>
            </>
          )}
        </button>
        <button className="button-video-list" onClick={videoIsFavorite}>
          {isFavorite ? (
            <>
              <p style={{ color: "#FFD700" }} className="fa-solid fa-star"></p>
              <p>Favorited</p>
            </>
          ) : (
            <>
              <p className="fa-solid fa-star"></p>
              <p>Favorite</p>
            </>
          )}
        </button>
      </div>
      <div className="videos-secondary-container">
        <VideoGridSmall />
      </div>
    </div>
  );
};

export default VideoList;
