import { useState } from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  // State
  const [isTouched, setIsTouched] = useState(false);
  const isInvalid = !props.isValid & isTouched;

  // Handlers
  function changeHandler(event) {
    props.onChange(event);
  }
  function blurHandler() {
    setIsTouched(true);
  }

  // Components
  const inputClassNames = `${styles.input} ${isInvalid && styles.invalid}`;
  return (
    <>
      <label htmlFor="name" className={styles["form-label"]}>
        {props.label}
      </label>
      <input
        name={props.name}
        value={props.value}
        onChange={changeHandler}
        onBlur={blurHandler}
        className={inputClassNames}
        type="text"
      />
      {isInvalid ? (
        <p className={styles["invalid-label"]}>
          {props.label} cannot be blank.
        </p>
      ) : (
        ""
      )}
    </>
  );
};
export default Input;
