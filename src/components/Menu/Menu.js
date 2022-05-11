import { useContext, useEffect, useState } from "react";

import useHttp from "../../hooks/use-http";

import Card from "../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";
import CartContext from "../../store/cart-context"

import styles from "./Menu.module.css";

const Menu = () => {
const cartCtx = useContext(CartContext)
const {error, isLoading, sendRequest: getMenuItems} = useHttp()
const [menuItems, setMenuItems] = useState([])

useEffect(() => {
  function transformData(data){
    const loadedMenuItems = []
    for (const menuKey in data) {
      loadedMenuItems.push({
        key: menuKey,
        name: data[menuKey].name,
        description: data[menuKey].description,
        price: data[menuKey].price
      })
    }
    setMenuItems(loadedMenuItems)
  }

  getMenuItems({
    url: "https://react-course-80b51-default-rtdb.firebaseio.com/menus.json"
  }, transformData)
}, [getMenuItems])


function submitHandler(item) {
  cartCtx.onAddToCart(item)
}

  return (
    <Card className={styles.menu}>
    {error && <p>Menu not found. Please try again later.</p>}
    {isLoading && <p>Loading...</p>}
      {menuItems.map((item) => {
        return (
          <MenuItem
            id={item.key}
            key={item.key}
            itemName={item.name}
            itemDescription={item.description}
            itemPrice={item.price}
            onSubmit={submitHandler}
          />
        );
      })}
    </Card>
  );
};
export default Menu;
