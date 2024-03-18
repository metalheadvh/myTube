import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="input">
      <div className="input-box">
        <input type="text" name="search-input" className="search-input" />
      </div>
      <div className="icon">
        <a className="fa-solid fa-magnifying-glass"></a>
      </div>
    </div>
  );
};

export default Search;
