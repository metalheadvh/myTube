import React from "react";
import "./DescriptionCard.css";
import LikeButton from "../../../Common/LikeButton/LikeButton";
import DescriptionBox from "./DescriptionBox/DescriptionBox";
import DescriptionButton from "../DescriptionButton/DescriptionButton";
import ChannelBubble from "./ChannelBubble/ChannelBubble";
import { Link } from "react-router-dom";
import ShareButton from "../../../Common/ShareButton/ShareButton";
import CommentsSection from "../../../Common/CommentsSection/CommentsSection";

export default function DescriptionCard({ name, channelName, description, descriptionLarge, videoUrl }) {
  return (
    <div className="containers">
      <div className="description-container title">
        <h1>{name}</h1>
      </div>

      <hr />

      <div className="buttons-description-card">
        <Link className="sidebar-link" to={`/channel-page/${channelName}`}>
          <ChannelBubble />
        </Link>

        <div className="description-channel-name">
          <h3>{channelName}</h3>
          <p>50K Subscribed</p>
        </div>

        <LikeButton />

        <div className="right-description-buttons">
          <DescriptionButton text={"Save"} icon={"fa-solid fa-list"} />
          <ShareButton text={"Share"} icon={"fa-solid fa-share"} content={videoUrl} />
          <DescriptionButton text={"Download"} icon={"fa-solid fa-download"} />
        </div>
      </div>

      <div className="description-container description">
        <div className="description-card">
          <DescriptionBox description={description} descriptionLarge={descriptionLarge} />
        </div>
      </div>
      <div className="comments">
        <CommentsSection />
      </div>
    </div>
  );
}
