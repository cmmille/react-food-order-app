import ReactDOM from "react-dom";

import Card from "../Card/Card";
import styles from "./Modal.module.css";

const Modal = (props) => {

    function clickHandler(){
        props.onClick()
    }

  return (
    <>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick= {clickHandler}></div>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <Card className={styles.modal}>
        {props.children}
        </Card>,
        document.getElementById("modal")
      )}
    </>
  );
};
export default Modal;
