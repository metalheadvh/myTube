import React from "react";
import { Link } from "react-router-dom";
import SidebarCard from "../SidebarCard/SidebarCard";

const Explore = () => {
  return (
    <div>
      <Link className="sidebar-link" to="/explore">
        <SidebarCard className={"fa-solid fa-fire"} sidebarElement={"Trending"} />
      </Link>
      <Link className="sidebar-link" to="/explore">
        <SidebarCard className={"fa-solid fa-vr-cardboard"} sidebarElement={"Tech"} />
      </Link>
      <Link className="sidebar-link" to="/explore">
        <SidebarCard className={"fa-solid fa-music"} sidebarElement={"Music"} />
      </Link>

      <Link className="sidebar-link" to="/explore">
        <SidebarCard className={"fa-solid fa-gamepad"} sidebarElement={"Gaming"} />
      </Link>

      <Link className="sidebar-link" to="/explore">
        <SidebarCard className={"fa-solid fa-trophy"} sidebarElement={"Sports"} />
      </Link>
    </div>
  );
};

export default Explore;
