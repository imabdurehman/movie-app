import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  const activeCheck = ({ isActive }) =>
    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          Movie <span>Plus</span>
        </h1>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink className={activeCheck} to="/" end>
            Home
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink className={activeCheck} to="/search">
            Search
          </NavLink>
        </li>

        <li className={styles.navItem}>
          <NavLink className={activeCheck} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
