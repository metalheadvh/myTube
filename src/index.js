import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar/Navbar";
import Videos from "./Components/Common/VideoGridBig/VideoGridBig";
import Sidebar from "./Components/Sidebar/Sidebar";
import VideoWindow from "./Components/VideoWindow/VideoWindow";
import VideoList from "./Components/VideoList/VideoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <main>
      <Sidebar isMobile={false} />
      <Videos />
    </main>
    {/* <div className="video-boxes">
      <div className="video-page">
        <VideoWindow />
        <VideoList />
      </div>
    </div> */}
  </React.StrictMode>
);
