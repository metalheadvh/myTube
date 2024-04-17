import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

function LayoutSidebar() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}

export default LayoutSidebar;
