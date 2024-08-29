import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, onClick = () => {} }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
