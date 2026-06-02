import React from "react";
import "./css/Header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="headerBody">
        {" "}
        <div className="logoWrapper">
          <img
            src="/src/assets/logo.png"
            alt="Logo Pin"
            className="logoPinImage"
          />
        </div>
        <div className="navLinks">
          <a href="#home" className="navLink">
            Home
          </a>
          <a href="#discover" className="navLink">
            Discover
          </a>
          <a href="#centres" className="navLink">
            For Centres
          </a>
          <a href="#about" className="navLink">
            About us
          </a>
          <a href="#support" className="navLink">
            Support
          </a>
        </div>
        <div className="headerActions">
          <div className="profile-action-icon">👤</div>
          <button className="signUpBtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
