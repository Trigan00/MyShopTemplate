import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="mainNav">
      <div className="CompanyName">
        <NavLink to={"/"}>Company Name</NavLink>
      </div>

      <NavLink
        to={"/Company"}
        className={({ isActive }) => (isActive ? "link-active" : undefined)}
      >
        О компнии
      </NavLink>

      <NavLink
        to={"/Catalog"}
        className={({ isActive }) => (isActive ? "link-active" : undefined)}
      >
        Каталог
      </NavLink>

      <NavLink
        to={"/Contacts"}
        className={({ isActive }) => (isActive ? "link-active" : undefined)}
      >
        Контакты
      </NavLink>
    </nav>
  );
}

export default NavBar;
