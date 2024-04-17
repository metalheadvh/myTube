import React from "react";
import styles from "./ChannelBanner.module.css";

const ChannelBanner = ({ name, image, subs }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.channelImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.channelText}>
        <h1 className={styles.channelName}>{name}</h1>
      </div>
      <h2 className={styles.channelSubs}>{subs}</h2>
    </div>
  );
};

export default ChannelBanner;
