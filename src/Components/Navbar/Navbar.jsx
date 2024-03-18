import React, { useState } from "react";
import "./Navbar.css";
import Search from "../Common/Search/Search";

export default function Navbar() {
  const [menuState, setMenuState] = useState(true);

  function toggleMenuState() {
    // setMenuState((prev) => {
    //   return !prev;
    // });
    setMenuState(!menuState);
    console.log(menuState);
  }

  return (
    <nav className="nav-box">
      <div className="navbar">
        <div className="buttons">
          <div className="button menu" onClick={toggleMenuState}>
            <div className="fa-solid fa-bars"></div>
          </div>
          <div className="button logo">
            <a className="fa-brands fa-square-youtube" href="#"></a>
          </div>
        </div>
        <Search />
        <div className="buttons right">
          <div className="button browse">
            <a className="fa-solid fa-ticket" href="#"></a>
          </div>
          <div className="button upload">
            <a className="fa-solid fa-video" href="#"></a>
          </div>
          <div className="button user">
            <a class="fa-solid fa-user" href="#"></a>
          </div>
        </div>
      </div>
    </nav>
  );
}
