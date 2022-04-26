import styles from "./Button.module.css";

const Button = (props) => {
  function getStyle() {
    if (props.styled === "inverted") {
      return styles.inverted;
    } else if (props.styled === "dark") {
      return styles.dark;
    } else if (props.styled === "disabled") {
      return styles.disabled;
    } else {
      return styles.normal;
    }
  }
  function clickHandler(){
    props.onClick()
  }

  return (
    <button
      onClick={clickHandler}
      className={`${styles.button} ${getStyle()} ${props.className} `}
    >
      {props.children}
    </button>
  );
};

export default Button;
