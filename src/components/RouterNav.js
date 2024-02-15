import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/RouterNav.css";

// const isCurrent = ({ isActive, isPending }) => isActive ? "test" : "";

const RouterNav = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">トップ</NavLink>
          {/* <NavLink className={isCurrent}>トップ</NavLink> */}
        </li>
        <li>
          <NavLink to="/about">私たちについて</NavLink>
        </li>
        <li>
          <NavLink to="/article" end>公開記事</NavLink>
        </li>
        <li>
          <NavLink to="/article/123">123の記事</NavLink>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
};

export default RouterNav;
