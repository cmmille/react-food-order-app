import Button from "../../UI/Button/Button";
import { ShoppingCart } from "@mui/icons-material";
import NotificationBubble from "../../UI/NotificationBubble/NotificationBubble";

import styles from "./TinyCart.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const TinyCart = () => {
  const cartContext = useContext(CartContext);

  function clickHandler(){
      cartContext.onCart()
  }

  return (
    <Button 
    className={styles.cart} 
    styled="dark" 
    onClick={clickHandler}>

      <ShoppingCart />
      <h2>Your Cart</h2>
      <NotificationBubble count={cartContext.itemsInCart} />
    </Button>
  );
};
export default TinyCart;
