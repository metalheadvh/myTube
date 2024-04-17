import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import ThemeContextProvider from "../../Contexts/ThemeContextProvider";

const Layout = () => {
  return (
    <>
      <ThemeContextProvider>
        <Navbar />
        <Outlet />
      </ThemeContextProvider>
    </>
  );
};

export default Layout;
