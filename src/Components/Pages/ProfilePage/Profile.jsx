import React, { useContext } from "react";
import Logout from "./Logout";
import { UserProfileContext } from "../../../Contexts/UserProfileContextProvider";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import ChannelBanner from "../ChannelPage/ChannelBanner/ChannelBanner";
import { videos } from "../../../data/videos";
import Card from "../../Common/VideoCard/VideoCard";

const Profile = () => {
  const { user } = useContext(UserProfileContext);

  return (
    <div>
      <ChannelBanner
        name={"My Channel"}
        image={`${"https://picsum.photos/600/600?random=1"}`}
        subs={`${Math.floor(Math.random() * 1000)}K Subscribers`}
      />

      <div className={styles.channelVideos}>
        <div className={styles.buttonsBox}>
          <div className={styles.buttons}>
            <div className={styles.profileImage}>
              <h4>Hello, {user}!</h4>
              <p>Welcome to MyTube!</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to="/">
              <button>Home</button>
            </Link>

            <Link to="/explore">
              <button>Explore</button>
            </Link>

            <Logout />
          </div>
        </div>

        <div className={styles.favorites}>
          <h2>FAVORITES</h2>
        </div>

        <div className={styles.videoGrid}>
          {videos
            .filter((video) => video.favorite)
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
        <div className={styles.favorites}>
          <h2>LIKED</h2>
        </div>

        <div className={styles.videoGrid}>
          {videos
            .filter((video) => video.liked)
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
    </div>
  );
};

export default Profile;
