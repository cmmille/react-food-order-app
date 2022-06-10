import { useContext, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartContext from "./store/cart-context";

function App() {
  const storeContext = useContext(CartContext);
  return (
    <>
      <Navbar />
      <div className="container">
        {storeContext.isCartOpen && <Cart />}
        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
