import styles from "./Button.module.css";

const Button = (props) => {
  function getStyle() {
    if (props.style === "inverted") {
      return styles.inverted;
    } else if (props.style === "dark") {
      return styles.dark
    } else {
      return styles.normal
    }
  }

  return (
    <button className={`${styles.button} ${getStyle()} ${props.className} `}>
      {props.children}
    </button>
  );
};

export default Button;
