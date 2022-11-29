import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { SideMenu } from "./components/SideMenu";

export const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="main">
        <SideMenu />
        <div style={{ padding: 20, width:"100%" }}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};
