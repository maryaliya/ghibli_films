import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../ghibli/GF.png"; // Adjust the path as per your file structure
import "./styles.css"; // Import the styles

const MainApp: React.FC = () => {
  return (
    <div>
      <header className="app-header">
        <img src={logo} alt="Ghibli Logo" className="app-logo" />
        <h1>Welcome to Ghibli Films Shop</h1>
        <small>The Best Films Ever</small>
      </header>

      <Outlet />
    </div>
  );
};

export default MainApp;
