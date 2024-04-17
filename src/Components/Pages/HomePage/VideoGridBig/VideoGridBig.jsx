import React, { useContext } from "react";
import "./VideoGridBig.css";
import Card from "../../../Common/VideoCard/VideoCard";
import { videos } from "../../../../data/videos";
import { SearchContext } from "../../../../Contexts/SearchContextProvider";

const Videos = () => {
  const { search } = useContext(SearchContext);
  const filteredVideos = videos.filter((video) => video.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="videos-box">
      <div className="videos-main-container">
        {filteredVideos.map((video, index) => (
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

export default Videos;
