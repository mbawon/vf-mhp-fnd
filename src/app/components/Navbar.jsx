import { Avatar } from "antd";
import React, { useContext } from "react";

export const Navbar = () => {
  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <div className="brand">
        <img src="./dist/images/vf-logo2.svg" alt="logo" width={50} />
        <h3>Mental Health Platform</h3>
      </div>
      <div className="nav-right">
        <span>Current user</span>
        <span className="logout" onClick={handleLogout}>
          Logout
        </span>
        <Avatar size={40}>MHP</Avatar>
      </div>
    </nav>
  );
};
