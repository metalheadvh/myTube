import React from "react";
import styles from "./ChannelPage.module.css";
import ChannelBanner from "./ChannelBanner/ChannelBanner";
import ChannelVideos from "./ChannelVideos/ChannelVideos";
import { Link } from "react-router-dom";

const ChannelPage = ({ channelName }) => {
  return (
    <div>
      <ChannelBanner
        name={channelName}
        image={`${"https://picsum.photos/600/600?random=1"}`}
        subs={`${Math.floor(Math.random() * 1000)}K Subscribers`}
      />

      <div className={styles.channelVideos}>
        <div className={styles.buttonsBox}>
          <div className={styles.buttons}>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/explore">
              <button>Explore</button>
            </Link>
          </div>
        </div>

        <ChannelVideos channelName={channelName} />
      </div>
    </div>
  );
};

export default ChannelPage;
