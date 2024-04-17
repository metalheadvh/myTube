import React, { useState } from "react";
import styles from "./ExplorePage.module.css";
import SidebarCard from "../../Sidebar/SidebarCard/SidebarCard";
import { videos } from "../../../data/videos";
import Card from "../../Common/VideoCard/VideoCard";

const ExplorePage = () => {
  const [category, setCategory] = useState("");

  const toggleTrending = () => {
    setCategory("trending");
  };
  const toggleMusic = () => {
    setCategory("music");
  };
  const toggleTech = () => {
    setCategory("tech");
  };
  const toggleGaming = () => {
    setCategory("gaming");
  };
  const toggleSports = () => {
    setCategory("sports");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.card} onClick={toggleTrending}>
          <SidebarCard className={"fa-solid fa-fire"} sidebarElement={"Trending"} />
        </div>
        <div className={styles.card} onClick={toggleTech}>
          <SidebarCard className={"fa-solid fa-vr-cardboard"} sidebarElement={"Tech"} />
        </div>
        <div className={styles.card} onClick={toggleMusic}>
          <SidebarCard className={"fa-solid fa-music"} sidebarElement={"Music"} />
        </div>

        <div className={styles.card} onClick={toggleGaming}>
          <SidebarCard className={"fa-solid fa-gamepad"} sidebarElement={"Gaming"} />
        </div>

        <div className={styles.card} onClick={toggleSports}>
          <SidebarCard className={"fa-solid fa-trophy"} sidebarElement={"Sports"} />
        </div>
      </div>

      <div className={styles.videoPlaylists}>
        <div className={styles.videoPlaylist}>
          {category ? <div className={styles.categoryName}>{category.toUpperCase()}</div> : ""}

          <div className={styles.videoCard}>
            {category === ""
              ? videos.map((video, index) => (
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
                ))
              : videos
                  .filter((video) => video.category === category)
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
    </>
  );
};

export default ExplorePage;
