import React, { useContext } from "react";
import "./Navbar.css";
import Search from "../Navbar/Search/Search";
import Logo from "./Logo/Logo";
import { Link } from "react-router-dom";
import { UserProfileContext } from "../../Contexts/UserProfileContextProvider";
import { SidebarContext } from "../../Contexts/SidebarContextProvider";

export default function Navbar() {
  const { user } = useContext(UserProfileContext);
  const { toggleIsMobile } = useContext(SidebarContext);

  return (
    <nav className="nav-box">
      <div className="navbar">
        <div className="buttons">
          <span className="fa-solid fa-bars" onClick={toggleIsMobile}></span>
          <Link to="/">
            <Logo />
          </Link>
          <h3>MyTube</h3>
        </div>
        <Search />
        <div className="buttons right">
          <Link to="/explore">
            <div className="button-nav browse">
              <p className="fa-solid fa-ticket"></p>
            </div>
          </Link>

          <div className="button-nav upload">
            <p className="fa-solid fa-video"></p>
          </div>

          {user ? (
            <Link to="profile">
              <div className="button-nav user">
                <p className="fa-solid fa-user"></p>
              </div>
            </Link>
          ) : (
            <Link to="login">
              <div className="button-nav user">
                <p className="fa-solid fa-user"></p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
