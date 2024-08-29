import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      <Search placeholder="Search a song of your choice" />
      <Button
        text="Give Feedback"
        onClick={() => alert("Feedback button clicked!")}
      />
    </nav>
  );
}

export default Navbar;
