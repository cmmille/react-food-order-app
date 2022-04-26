import {useContext} from "react"
// import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/CartModal/CartModal";
import CartContext from "./store/cart-context";

function App() {
  const storeContext = useContext(CartContext)

  return (
    <>
      <Navbar />
      <div className="container">
      {storeContext.isCartOpen && <CartModal />}
        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
