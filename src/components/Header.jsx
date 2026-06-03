import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
  // const location = useLocation();
  // const isLandingPage = location.pathname === "/";
  // const isProductPage = location.pathname.startsWith("/product");

  return (
    <div className="headerContainer">
      <div className="headerBody">
        <div className="logoWrapper">
          <img
            src="/novaexcape/Group 8.png"
            alt="Logo Pin"
            className="logoPinImage"
          />
        </div>
        <div className="navLinks">
          <NavLink
            end
            to="/"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/discover"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            Discover
          </NavLink>
          <NavLink
            to="/centres"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            For Centres
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            About us
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "navLink active" : "navLink"
            }
          >
            Support
          </NavLink>
        </div>
        <div className="headerActions">
      <button className="signUpBtn">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
