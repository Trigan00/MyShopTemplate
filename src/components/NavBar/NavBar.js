import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <Fragment>
      <div className="CompanyName">
        <NavLink to={"/"}>Company Name</NavLink>
      </div>
      <nav className="mainNav">
        <NavLink
          to={"/Hats"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
        >
          Шапки
        </NavLink>
        <NavLink
          to={"/Hoodies"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
        >
          Худи
        </NavLink>
        <NavLink
          to={"/Jackets"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
        >
          Куртки
        </NavLink>
        <NavLink
          to={"/Pants"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
        >
          Штаны
        </NavLink>
        <NavLink
          to={"/Sneakers"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
        >
          Кроссовки
        </NavLink>
        <NavLink
          to={"/T-Shirts"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
        >
          Футболки
        </NavLink>
      </nav>
    </Fragment>
  );
}

export default NavBar;
