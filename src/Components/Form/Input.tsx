import React, {InputHTMLAttributes} from "react";
import styles from "./Input.module.css";

interface Input extends InputHTMLAttributes<HTMLInputElement>  {
  type?: string,
  label?: string,
  value?: any,
  onChange?: any,
  name?:string,
  error?: any,
};

const Input = ({label, type, name, value, onChange, error, onBlur}: Input) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        value={value}
        onChange={onChange}
        type={type}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
