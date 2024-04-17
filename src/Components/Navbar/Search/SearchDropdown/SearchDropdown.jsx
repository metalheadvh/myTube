import React, { useState } from "react";
import "./SearchDropdown";
import { videos } from "../../../../data/videos";

const SearchDropdown = () => {
  const [search, setSearch] = useState("");

  const onSearch = (searchTerm) => {
    setSearch(searchTerm);
  };

  return (
    <div className="search-dropdown">
      {videos
        .filter((video) => {
          const searchTerm = search.toLowerCase();
          const videoName = video.name.toLowerCase();

          return searchTerm && videoName.startsWith(searchTerm) && videoName !== searchTerm;
        })
        .slice(0, 5)
        .map((videos) => (
          <div
            onClick={() => {
              onSearch(videos.name);
            }}
            className="search-dropdown-row"
            key={videos.name}
          >
            {videos.name}
          </div>
        ))}
    </div>
  );
};

export default SearchDropdown;
