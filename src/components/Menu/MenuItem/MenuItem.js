import styles from "./MenuItem.module.css";
import Button from "../../UI/Button/Button";

const MenuItem = (props) => {
  return ( <>
  <div className={styles.row}>
  <div className={styles.column}>
      <h2 className={styles.product}>{props.itemName}</h2>
      <p className={styles.description}>{props.itemDescription}</p>
      <p className={styles.price}>${props.itemPrice}</p>
  </div>
  <div className={styles.column}>
      <div className={styles.row}>
          <h2 className={styles.amount}>Amount</h2>
          <input className={styles.quantity}></input>
      </div>
      <Button className = {styles['add-button']}>+ Add</Button>
  </div>

  </div>
  <hr/>
  </>)

};
export default MenuItem;
