import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logonav.png";
import line from "../../assets/line.png";
import hamburguer from "../../assets/Group.png";

const NavBarPage = ({ functionOpen, open }) => {
  return (
    <>
      <div className={open === true ? "menu-show " : "menu"}>
        <ul className={open === true ? "ul-show" : "menu__ul "}>
          <figure className="close-figure">
            <img
              className="close-figure-img"
              src="https://icones.pro/wp-content/uploads/2021/08/icone-x-grise.png"
              alt="close-icon"
              onClick={functionOpen}
            />
          </figure>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavMobile" : "nav__ul-li"
              }
              to="./"
            >
              <span>00</span>Home
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavMobile" : "nav__ul-li"
              }
              to="./destination/moon"
            >
              <span>01</span>Destination
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavMobile " : "nav__ul-li"
              }
              to="./crew/Douglas%20Hurley"
            >
              <span>02</span>Crew
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNavMobile" : "nav__ul-li"
              }
              to="./Technology/Launch%20vehicle"
            >
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
      </div>
     
      <nav className="nav">
        <figure className="nav__figure-logo">
          <img src={logo} alt="logo" />
        </figure>
        <figure className="nav__figure-line">
          <img src={line} alt="line" />
        </figure>
        <ul className="nav__ul">
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav " : "nav__ul-li"
              }
              to="./"
            >
              <span>00</span>Home
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav " : "nav__ul-li"
              }
              to="./destination/moon"
            >
              <span>01</span>Destination
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav " : "nav__ul-li"
              }
              to="./crew/Douglas%20Hurley"
            >
              <span>02</span>Crew
            </NavLink>
          </li>
          <li className="nav__ul-li">
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeNav " : "nav__ul-li"
              }
              to="./Technology/Launch%20vehicle"
            >
              <span>03</span>Technology
            </NavLink>
          </li>
        </ul>
        <figure className="hamburguer" onClick={functionOpen}>
          <img src={hamburguer} alt="hamburguer" />
        </figure>
      </nav>
    </>
  );
};

export default NavBarPage;