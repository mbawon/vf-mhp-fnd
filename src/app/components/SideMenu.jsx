import React from "react";
import { NavLink } from "react-router-dom";

export const SideMenu = () => {
  return (
    <div className="sidemenu">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/Report">Reports</NavLink>
        </li>
        <li>
          <NavLink to="/users">User Management</NavLink>
        </li>
      </ul>
    </div>
  );
};
