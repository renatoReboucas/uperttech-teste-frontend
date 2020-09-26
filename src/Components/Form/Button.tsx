import React, { InputHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface Button extends InputHTMLAttributes<HTMLInputElement> {
  value?: any;
}

const Button: React.FC<Button> = ({ children, ...props }) => {
  return (
    <button className={styles.button}> {children} </button>
  );
};

export default Button;
