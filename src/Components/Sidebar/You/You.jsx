import React from "react";
import SidebarCard from "../SidebarCard/SidebarCard";
import { Link } from "react-router-dom";
import "./You.css";

const You = () => {
  return (
    <div>
      <Link className="you-link" to="/profile">
        <SidebarCard className={"fa-solid fa-user"} sidebarElement={"Your Channel"} />
      </Link>
      <SidebarCard className={"fa-solid fa-clock-rotate-left"} sidebarElement={"History"} />
      <SidebarCard className={"fa-solid fa-film"} sidebarElement={"Your Videos"} />
      <SidebarCard className={"fa-solid fa-list"} sidebarElement={"Playlists"} />
      <SidebarCard className={"fa-solid fa-clock"} sidebarElement={"Watch Later"} />
    </div>
  );
};

export default You;
