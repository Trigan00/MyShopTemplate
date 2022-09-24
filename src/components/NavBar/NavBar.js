import React, { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../store/context";

import "./NavBar.css";

function NavBar() {
  const [changeClassName, SetChangeClassName] = useState("");
  const ctx = useContext(Context);
  const OpenOrCloseMenu = () => {
    SetChangeClassName((prev) => (prev === "" ? "change" : ""));
  };

  const Cart = (
    <div className="Cart_Item">
      <NavLink
        to={"/Cart"}
        className={({ isActive }) => (isActive ? "link-active" : undefined)}
        onClick={changeClassName === "change" ? OpenOrCloseMenu : undefined}
      >
        <svg className="Cart" xmlns="http://www.w3.org/2000/svg" fill="white">
          <path d="M6.02 7L4.27 0H.11v1.75h2.84l3.5 14h11.81L20.89 7H6.02zm10.93 7H7.77L6.45 8.75h12.03L16.95 14zM9.3 16.63c1.21 0 2.19.98 2.19 2.19S10.5 21 9.3 21s-2.19-.98-2.19-2.19.98-2.18 2.19-2.18zm3.93 2.18a2.19 2.19 0 104.379.001 2.19 2.19 0 00-4.379-.001z"></path>
        </svg>
        <div style={{ display: "inline-block", position: "relative" }}>
          <div className="ProductsCount">
            {ctx.inCartProducts
              ? ctx.inCartProducts.reduce((acc, el) => acc + el.ItemCount, 0)
              : 0}{" "}
          </div>
          <span style={{ marginLeft: "10px" }}>
            {ctx.inCartProducts
              ? ctx.inCartProducts.reduce(
                  (acc, el) => acc + el.ItemCount * el.Price,
                  0
                )
              : 0}{" "}
          </span>
          &#36;
        </div>
      </NavLink>
    </div>
  );

  return (
    <Fragment>
      <div className="CompanyName">
        <NavLink to={"/"}>Company Name</NavLink>
        <div className="NameContainer">
          {Cart}
          <div
            className={`menuIcon ${changeClassName}`}
            onClick={OpenOrCloseMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>

        <div className="hr" />
      </div>

      <div className={"topNav"}>
        <nav className={`mainNav ${changeClassName}`}>
          <NavLink
            to={"/Modular_paintings"}
            className={({ isActive }) => (isActive ? "link-active" : undefined)}
            onClick={OpenOrCloseMenu}
          >
            Modular paintings
          </NavLink>
          <NavLink
            to={"/Framed_paintings"}
            className={({ isActive }) => (isActive ? "link-active" : undefined)}
            onClick={OpenOrCloseMenu}
          >
            Framed paintings
          </NavLink>
          <NavLink
            to={"/Posters"}
            className={({ isActive }) => (isActive ? "link-active" : undefined)}
            onClick={OpenOrCloseMenu}
          >
            Posters
          </NavLink>
          <NavLink
            to={"/Clock-paintings"}
            className={({ isActive }) => (isActive ? "link-active" : undefined)}
            onClick={OpenOrCloseMenu}
          >
            Clock-paintings
          </NavLink>
          <NavLink
            to={"/Lightboxes"}
            className={({ isActive }) => (isActive ? "link-active" : undefined)}
            onClick={OpenOrCloseMenu}
          >
            Lightboxes
          </NavLink>
          {Cart}
        </nav>
      </div>
    </Fragment>
  );
}

export default NavBar;
