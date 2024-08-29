import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";

export default function Search({ placeholder }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder={placeholder} />
        <button type="submit" className={styles.searchBtn}>
          <SearchIcon />
        </button>
      </form>
    </>
  );
}
