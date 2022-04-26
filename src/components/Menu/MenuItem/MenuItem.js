import styles from "./MenuItem.module.css";
import Button from "../../UI/Button/Button";
import { useState } from "react";

const MenuItem = (props) => {
  const [quantity, setQuantity] = useState("1");

  function changeHandler(event) {
    const newAmount = event.target.value;
    setQuantity(newAmount);
  }

  function clickHandler() {
    if (quantity.trim().length > 0) {
      const item = {
        id: props.id,
        quantity: parseInt(quantity),
        product: props.itemName,
        price: props.itemPrice,
      };
      props.onSubmit(item);
    }
  }

  return (
    <>
      <div className={styles.row}>
        <div className={styles.column}>
          <h2 className={styles.product}>{props.itemName}</h2>
          <p className={styles.description}>{props.itemDescription}</p>
          <p className={styles.price}>${props.itemPrice}</p>
        </div>
        <div className={styles.column}>
          <div className={styles.row}>
            <h2 className={styles.amount}>Amount</h2>
            <input
              type="number"
              step="1"
              min="1"
              className={styles.quantity}
              onChange={changeHandler}
              value={quantity}
            ></input>
          </div>
          <Button className={styles["add-button"]} onClick={clickHandler}>
            + Add
          </Button>
        </div>
      </div>
      <hr />
    </>
  );
};
export default MenuItem;
