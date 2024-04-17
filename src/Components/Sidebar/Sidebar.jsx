import React, { useContext } from "react";
import "./Sidebar.css";
import SidebarCard from "./SidebarCard/SidebarCard";
import { Link } from "react-router-dom";
import Subscriptions from "./Subscriptions/Subscriptions";
import You from "./You/You";
import Explore from "./Explore/Explore";
import { SidebarContext } from "../../Contexts/SidebarContextProvider";

const Sidebar = () => {
  const { isMobile } = useContext(SidebarContext);

  return (
    <div className={!isMobile ? "sidebar mini" : "sidebar"}>
      <SidebarCard className={"fa-solid fa-house"} sidebarElement={"Home"} />
      <Link className="sidebar-link" to="/explore">
        <SidebarCard className={"fa-solid fa-ticket"} sidebarElement={"Explore"} />
      </Link>

      <hr className="sidebar-separator" />
      <span className="sidebar-span">You</span>
      <You />
      <hr className="sidebar-separator" />
      <span className="sidebar-span">Explore</span>
      <Explore />

      <hr className="sidebar-separator" />
      <span className="sidebar-span">Subscriptions</span>
      <Subscriptions />

      <hr className="sidebar-separator" />
      <SidebarCard className={"fa-solid fa-gear"} sidebarElement={"Settings"} />
      <SidebarCard className={"fa-solid fa-circle-question"} sidebarElement={"Help"} />
      <SidebarCard className={"fa-solid fa-envelope"} sidebarElement={"Contact"} />
      <Link className="sidebar-link" to="/feedback">
        <SidebarCard className={"fa-solid fa-message"} sidebarElement={"Feedback"} />
      </Link>
    </div>
  );
};

export default Sidebar;
