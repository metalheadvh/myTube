import React, { useContext } from "react";
import "./LikeButton.css";
import { LikeButtonContext } from "../../../Contexts/LikeButtonContextProvider";

const LikeButton = () => {
  const { liked, toggleLike, disliked, toggleDislike, likes, dislikes } = useContext(LikeButtonContext);

  return (
    <div className="share-box">
      <h4 onClick={toggleLike}> {likes}</h4>
      <a className={liked ? "fa-solid fa-thumbs-up" : "fa-regular fa-thumbs-up"} onClick={toggleLike}></a>
      <h4 onClick={toggleLike}>Like</h4>
      <div>|</div>
      <div className="dislike">
        <h4 onClick={toggleDislike}>{dislikes}</h4>
        <a className={disliked ? "fa-solid fa-thumbs-down" : "fa-regular fa-thumbs-down"} onClick={toggleDislike}></a>
      </div>
    </div>
  );
};

export default LikeButton;
