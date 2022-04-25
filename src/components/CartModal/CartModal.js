import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem/CartItem";

import styles from "./CartModal.module.css";

const CartModal = (props) => {
  return (
    <Card className={styles.modal}>
    <CartItem item = "Cheese" price = "19.99" quantity = "1"/>
    <CartItem item = "Ham" price = "19.99" quantity = "3"/>
      <div className={styles.row}>
        <h2>Total Amount</h2>
        <h2>$69.00</h2>
      </div>
      <div className={`${styles.row} ${styles.buttons}`}>
          <Button style = "inverted">Cancel</Button>
          <Button >Confirm</Button>
      </div>
    </Card>
  );
};
export default CartModal;
