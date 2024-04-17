import React from "react";
import styles from "./PageBanner.module.css";

const PageBanner = ({ name, image }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.channelImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.channelText}>
        <h1 className={styles.channelName}>{name}</h1>
      </div>
    </div>
  );
};

export default PageBanner;
