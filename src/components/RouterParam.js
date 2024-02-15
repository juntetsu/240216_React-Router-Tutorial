import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../styles/RouterNav.css";

const RouterParam = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">トップ</NavLink>
        </li>
        <li>
          <NavLink to="/book/978-4-8156-1336-5">
            これからはじめるVue.js 3実践入門
          </NavLink>
        </li>
        <li>
          <NavLink to="/book/978-4-297-13288-0">
            改訂3版 JavaScript本格入門
          </NavLink>
        </li>
        <li>
          <NavLink to="/book/" end>
            パラメーター省略の書籍
          </NavLink>
        </li>
      </ul>

      <hr />

      <Outlet />
    </>
  );
};

export default RouterParam;
