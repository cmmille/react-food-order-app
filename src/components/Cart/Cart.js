import { useContext, useEffect, useState } from "react";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout/Checkout";

import styles from "./Cart.module.css";

const Cart = (props) => {
  // State
  const cartCtx = useContext(CartContext);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  useEffect(() => {
    if (cartCtx.itemsInCart <= 0) {
      setCheckoutVisible(false)
    }
  }, [cartCtx.itemsInCart])


  // Handlers
  function closeCart() {
    cartCtx.onCart();
    setCheckoutVisible(false);
  }
  function confirmOrder() {
    if (cartCtx.itemsInCart !== 0) {
      console.log("Order confirmed!");
      console.log(cartCtx.items);
      cartCtx.onCart();
      cartCtx.clearCart();
      props.onConfirmed();
    }
  }
  function openCheckout() {
    setCheckoutVisible(true);
  }

  // Components
  const ButtonRow = () => {
    return (
      <div className={`${styles.row} ${styles.buttons}`}>
        <Button styled="inverted" onClick={closeCart}>
          Cancel
        </Button>
        <Button
          onClick={cartCtx.itemsInCart > 0 ? openCheckout : null}
          styled={cartCtx.itemsInCart <= 0 ? "disabled" : ""}
        >
          Checkout
        </Button>
      </div>
    );
  };

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
      {!checkoutVisible && <ButtonRow/>}
      {checkoutVisible && <Checkout onConfirm = {confirmOrder} onClose = {closeCart}/>}
    </Modal>
  );
};
export default Cart;
