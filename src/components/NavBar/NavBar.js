import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import Context from "../../context/context";

import "./NavBar.css";

function NavBar() {
  const ctx = useContext(Context);

  return (
    <Fragment>
      <div className="CompanyName">
        <NavLink to={"/"}>Company Name</NavLink>
        <div className="hr" />
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
        <NavLink
          to={"/Cart"}
          className={({ isActive }) => (isActive ? "link-active" : undefined)}
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
            &#8381;
          </div>
        </NavLink>
      </nav>
    </Fragment>
  );
}

export default NavBar;
