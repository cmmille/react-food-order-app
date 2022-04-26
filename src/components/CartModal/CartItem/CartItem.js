import styles from "./CartItem.module.css";

import Button from "../../UI/Button/Button";

const CartItem = (props) => {

  function increaseHandler() {
    props.increase(props.id)
  }

  function decreaseHandler() {
    props.decrease(props.id)
  }

  return (
    <>
      <div className={styles.item}>
        <h2>{props.product}</h2>
        <div className={styles.row}>
          <div className={styles.row}>
            <h2 className={styles.price}>${props.price}</h2>
            <h2 className={styles.quantity}>x {props.quantity}</h2>
          </div>
          <div className={styles.row}>
            <Button styled="inverted" onClick = {decreaseHandler}>-</Button>
            <Button styled="inverted" onClick = {increaseHandler}>+</Button>
          </div>
        </div>
      </div>
      <hr className={styles.divider} />
    </>
  );
};
export default CartItem;
