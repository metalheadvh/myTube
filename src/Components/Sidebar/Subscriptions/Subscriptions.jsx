import React from "react";
import SidebarCard from "../SidebarCard/SidebarCard";
import { Link } from "react-router-dom";
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <div>
      <Link className="subs-link" to="/channel-page/Apple">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"Apple"} />
      </Link>
      <Link className="subs-link" to="/channel-page/EAGames">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"EA Games"} />
      </Link>
      <Link className="subs-link" to="/channel-page/FIFA">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"FIFA"} />
      </Link>
      <Link className="subs-link" to="/channel-page/LiveMusic">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"Live Music"} />
      </Link>
      <Link className="subs-link" to="/channel-page/Microsoft">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"Microsoft"} />
      </Link>
      <Link className="subs-link" to="/channel-page/MKBHD">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"MKBHD"} />
      </Link>
      <Link className="subs-link" to="/channel-page/Nintendo">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"Nintendo"} />
      </Link>
      <Link className="subs-link" to="/channel-page/Samsung">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"Samsung"} />
      </Link>
      <Link className="subs-link" to="/channel-page/SteveVai">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"Steve Vai"} />
      </Link>
      <Link className="subs-link" to="/channel-page/NBA">
        <SidebarCard className={"fa-solid fa-podcast"} sidebarElement={"NBA"} />
      </Link>

      <SidebarCard className={"fa-solid fa-caret-down"} sidebarElement={"Show More"} />
    </div>
  );
};

export default Subscriptions;
