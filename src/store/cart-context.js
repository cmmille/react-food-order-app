import React, { useEffect, useState } from "react";

const CartContext = React.createContext({
  isCartOpen: false,
  items: [],
  total: 0,
  itemsInCart: 0,
  onCart: () => {},
  onAddToCart: () => {},
  increaseItem: () => {},
  decreaseItem: () => {},
  clearCart: () => {}
});

export const CartContextProvider = (props) => {
  // States
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    //   Update quantity
    if (items.length === 0) {
      console.log("Items empty...");
      setTotalItems(0);
    } else {
      console.log("Setting i...");
      const i = items.reduce((total, item) => total + item.quantity, 0);
      setTotalItems(i);
    }
    // Update total cost
    const t = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });

    setTotal(formatter.format(t));
  }, [items]);

  // Handlers
  function cartHandler() {
    setIsCartOpen((prev) => !prev);
  }

  function addToCart(newItem) {
    if (items.find((item) => item.id === newItem.id)) {
      const newItems = items.map((item) => {
        if (item.id === newItem.id) {
          return { ...item, quantity: newItem.quantity + item.quantity };
        }
        return item;
      });
      setItems(newItems);
    } else {
      setItems((prev) => [...prev, newItem]);
    }
  }

  function incrementItemHandler(id) {
    const newItems = items.map((item) => {
      console.log(item.id);
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    console.log(newItems);
    setItems(newItems);
  }

  function decrementItemHandler(id) {
    console.log("Decreasing...");
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        } else return null
      }
      return item;
    });
    console.log(newItems);
    setItems(newItems.filter(value => value != null));
  }

  function clearCart() {
    setItems([])
  }


  // Component
  return (
    <CartContext.Provider
      value={{
        isCartOpen: isCartOpen,
        items: items,
        itemsInCart: totalItems,
        total: total,
        onCart: cartHandler,
        onAddToCart: addToCart,
        increaseItem: incrementItemHandler,
        decreaseItem: decrementItemHandler,
        clearCart: clearCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
