import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";

export default function Card({ image, name, channelName, channelImage, views, id }) {
  return (
    <div className="video-card">
      <Link to={`/video-page/${id}`}>
        <img className="video-image" src={image} alt="" />
      </Link>

      <div className="description-boxes">
        <div className="video-description logo">
          <div className="channel-logo">
            <div className="channel-image">
              <Link to={`/channel-page/${channelName.replace(/\s+/g, "")}`}>
                <img src={channelImage} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="video-description">
          <Link to={`/video-page/${id}`} className="video-name">
            <h3>{name}</h3>
          </Link>
          <Link to={`/channel-page/${channelName.replace(/\s+/g, "")}`} className="channel-name">
            {channelName}
          </Link>

          <p style={{ color: "var(--primary-color)", margin: "0.5rem" }}>{`${views} views`}</p>
        </div>
      </div>
    </div>
  );
}
