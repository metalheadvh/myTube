import React, { useContext } from "react";
import "./Search.css";
import { videos } from "../../../data/videos";
import { SearchContext } from "../../../Contexts/SearchContextProvider";

const Search = () => {
  const { searchActive, search, setSearch, onSearch, toggleSearchActive } = useContext(SearchContext);
  return (
    <div className="input">
      <div className="input-box">
        <form className="form">
          <section className="section">
            {!searchActive ? (
              ""
            ) : (
              <input
                value={search}
                type="text"
                className="search-input"
                name="newItem"
                id="newItem"
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
              />
            )}
          </section>
        </form>
      </div>

      {/* <SearchDropdown /> */}

      {/* {!searchActive ? "" : <SearchDropdown />} */}

      {!searchActive ? (
        ""
      ) : (
        <div className="search-dropdown">
          {videos
            .filter((video) => {
              const searchTerm = search.toLowerCase();
              const videoName = video.name.toLowerCase();
              const videoChannel = video.channelName.toLowerCase();

              return (
                searchTerm &&
                videoName.includes(searchTerm) &&
                videoChannel.includes(searchTerm) &&
                videoName !== searchTerm
              );
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
      )}

      <button
        className="fa-solid fa-magnifying-glass"
        onClick={() => {
          toggleSearchActive();
          onSearch(search);
        }}
      >
        <div>
          <h3>Search</h3>
        </div>
      </button>
    </div>
  );
};

export default Search;
