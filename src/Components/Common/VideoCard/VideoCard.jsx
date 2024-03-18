import React from "react";
import "./VideoCard.css";

export default function Card({ link, image, name, channelName, channelImage, channelLink, views }) {
  return (
    <div className="video-card">
      <a href={link}>
        <img className="video-image" src={image} alt="" />
      </a>

      <div className="description-boxes">
        <div className="video-description logo">
          <div className="channel-logo">
            <div className="channel-image">
              <a href={channelLink}>
                <img src={channelImage} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="video-description">
          <a className="video-name" href={link}>
            <h3>{name}</h3>
          </a>
          <a className="channel-name" href={channelLink}>
            {channelName}
          </a>

          <p style={{ color: "green", margin: "0.5rem" }}>{`${views} views`}</p>
        </div>
      </div>
    </div>
  );
}
