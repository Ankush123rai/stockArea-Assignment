import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={styles.navbar}>
      <NavLink
        to="/"
        className={`${styles.link} ${activeLink === "/" ? styles.activeLink : ""}`}
        onClick={() => handleLinkClick("/")}
      >
         Warehouse
      </NavLink>
      <NavLink
        to="/add"
        className={`${styles.link} ${activeLink === "/warehouse/" ? styles.activeLink : ""}`}
        onClick={() => handleLinkClick("/add")}
      >
        Add
      </NavLink>
    </div>
  );
};

export default Header;
