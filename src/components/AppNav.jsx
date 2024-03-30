import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Städte</NavLink>
        </li>
        <li>
          <NavLink to="countries">Länder</NavLink>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default AppNav;
