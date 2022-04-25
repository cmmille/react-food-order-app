import styles from "./Menu.module.css";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";
import { uid } from "uid";

const dummyItems = [
  {
    name: "Mariner's Select",
    description: "A fine blend of feesh chunks. Selected just for you!",
    price: 19.99,
    key: uid(),
  },
  {
    name: "Stinky Stink Feesh",
    description: "It's really stinky.",
    price: 5.99,
    key: uid(),
  },
  {
    name: "Salmon Dinner",
    description: "Pacific pink feesh.",
    price: 12.69,
    key: uid(),
  },
];

const Menu = () => {
  return (
    <Card className={styles.menu}>
      {dummyItems.map((item) => {
        return (
          <MenuItem
            key={item.key}
            itemName={item.name}
            itemDescription={item.description}
            itemPrice={item.price}
          />
        );
      })}
    </Card>
  );
};
export default Menu;
