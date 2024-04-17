import React from "react";
import styles from "./ChannelVideos.module.css";
import { videos } from "../../../../data/videos";
import Card from "../../../Common/VideoCard/VideoCard";

const ChannelVideos = ({ channelName }) => {
  return (
    <div className={styles.videoList}>
      <div className={styles.videoGrid}>
        {videos
          .filter((video) => video.channelName === channelName)
          .map((video, index) => (
            <Card
              id={video.id}
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

export default ChannelVideos;
