import ReactDOM from "react-dom";
import { useContext } from "react";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  function closeCart() {
    cartCtx.onCart();
  }
  function confirmOrder() {
    if (cartCtx.itemsInCart !== 0) {
      console.log("Order confirmed!");
      cartCtx.onCart();
    }
  }

  return (
    <Modal onClick={closeCart}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            product={item.product}
            price={item.price}
            quantity={item.quantity}
            increase={cartCtx.increaseItem}
            decrease={cartCtx.decreaseItem}
          />
        );
      })}
      <div className={styles.row}>
        <h2>Total Amount</h2>
        <h2>{cartCtx.total}</h2>
      </div>
      <div className={`${styles.row} ${styles.buttons}`}>
        <Button styled="inverted" onClick={closeCart}>
          Cancel
        </Button>
        <Button
          onClick={confirmOrder}
          styled={cartCtx.itemsInCart <= 0 ? "disabled" : ""}
        >
          Confirm
        </Button>
      </div>
    </Modal>
  );
};
export default Cart;
