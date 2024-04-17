import React from "react";
import styles from "./CategoryPage.module.css";
import ChannelVideos from "../../ChannelPage/ChannelVideos/ChannelVideos";
import PageBanner from "../PageBanner/PageBanner";
import { Link } from "react-router-dom";

const CategoryPage = ({ name, image }) => {
  return (
    <div>
      <PageBanner name={name} image={image} />

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

        <ChannelVideos />
      </div>
    </div>
  );
};

export default CategoryPage;
