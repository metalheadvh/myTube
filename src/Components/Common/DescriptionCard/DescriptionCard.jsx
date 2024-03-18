import React from "react";
import "./DescriptionCard.css";
import { videos } from "../../../data/videos";

export default function DescriptionCard({
  link,
  image,
  name,
  channelName,
  channelImage,
  channelLink,
  views,
  description,
}) {
  return (
    <div className="containers">
      <div className="description-container title">
        <div className="title-card">
          <div className="video-title">
            <h1>Title</h1>
            {name}
          </div>
        </div>
      </div>

      {/* <div className="buttons"> */}
      <div className="description-container channel">
        <div className="description-card">
          <div className="video-description">
            <div className="video-text">
              <p>Channel{description}</p>
            </div>
          </div>
        </div>
      </div>
      {/* </div>s */}

      <div className="description-container description">
        <div className="description-card">
          <div className="video-description">
            <div className="video-text">
              <p>Description{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="description-container comments">
        <div className="video-comments">Comments</div>
      </div>
    </div>
  );
}
