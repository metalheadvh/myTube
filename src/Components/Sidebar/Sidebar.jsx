import React from "react";
import "./Sidebar.css";
import Navbar from "../Navbar/Navbar";
import SubscriberCard from "../Common/SubscriberCard/SubscriberCard";
import { videos } from "../../data/videos";

const Sidebar = ({ isMobile }) => {
  return (
    <div className={isMobile ? "sidebar mini" : "sidebar"}>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-house"></a>
        </div>
        <p>Home</p>
      </div>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-ticket"></a>
        </div>
        <p>Browse</p>
      </div>
      <hr />
      <span className="span">You</span>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-user"></a>
        </div>
        <p>Your Channel</p>
      </div>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-clock-rotate-left"></a>
        </div>
        <p>History</p>
      </div>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-film"></a>
        </div>
        <p>Your Videos</p>
      </div>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-list"></a>
        </div>
        <p>Playlists</p>
        {/* <p>Playlists</p> */}
      </div>
      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-clock"></a>
        </div>
        <p>Watch Later</p>
      </div>
      <hr />
      <span className="span">Subscriptions</span>

      {/* {videos.map((video, index) => (
          <SidebarCard key={index} channelName={video.channelName} />
        ))} */}

      <SubscriberCard channelName={"Adobe"} />
      <SubscriberCard channelName={"Apple"} />
      <SubscriberCard channelName={"Audi"} />
      <SubscriberCard channelName={"BMW"} />
      <SubscriberCard channelName={"FailArmy"} />
      <SubscriberCard channelName={"UEFA"} />
      <SubscriberCard channelName={"MKBHD"} />

      <div className="text">
        <div className="icon">
          <a class="fa-solid fa-caret-down"></a>
        </div>
        <p>Show More</p>
      </div>
      <hr />
      <span className="span">Explore</span>
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-fire"></i>
        </div>
        <p>Trending</p>
      </div>
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-music"></i>
        </div>
        <p>Music</p>
      </div>
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-gamepad"></i>
        </div>
        <p>Gaming</p>
      </div>
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-trophy"></i>
        </div>
        <p>Sports</p>
      </div>
      <hr />
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-gear"></i>
        </div>
        <p>Settings</p>
      </div>
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-flag"></i>
        </div>
        <p>Report</p>
      </div>
      <div className="text">
        <div className="icon">
          <i class="fa-regular fa-circle-question"></i>
        </div>
        <p>Help</p>
      </div>
      <div className="text">
        <div className="icon">
          <i class="fa-solid fa-message"></i>
        </div>
        <p>Send Feedback</p>
      </div>
    </div>
  );
};

export default Sidebar;
