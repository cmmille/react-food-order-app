import { useContext, useEffect, useState } from "react";

import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem/CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout/Checkout";

import styles from "./Cart.module.css";
import useHttp from "../../hooks/use-http";

const Cart = (props) => {
  // State
  const cartCtx = useContext(CartContext);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const { error, isLoading, sendRequest: sendOrderToServer } = useHttp();
  useEffect(() => {
    if (cartCtx.itemsInCart <= 0) {
      setCheckoutVisible(false);
    }
  }, [cartCtx.itemsInCart]);

  // Handlers
  function closeCart() {
    cartCtx.onCart();
    setCheckoutVisible(false);
  }
  function submitHandler() {
    cartCtx.onCart();
    cartCtx.clearCart();
    props.onConfirmed();
  }

  async function confirmOrder(customerInfo) {
    if (cartCtx.itemsInCart !== 0) {
      await sendOrderToServer({
        url: "https://react-course-80b51-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { order: cartCtx.items, customerInfo: customerInfo },
      }, submitHandler);

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
      {!checkoutVisible && <ButtonRow />}
      {checkoutVisible && (
        <Checkout onConfirm={confirmOrder} onClose={closeCart} />
      )}
      {error && (
        <p className={styles.error}>
          Couldn't confirm order, please try again later.
        </p>
      )}
      {isLoading && <p>Sending order to server...</p>}
    </Modal>
  );
};
export default Cart;
