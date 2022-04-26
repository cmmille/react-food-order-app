import {useContext, useState} from "react"

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import OrderConfirmedModal from "./components/Cart/OrderConfirmed/OrderConfirmed"
import CartContext from "./store/cart-context";

function App() {
  const storeContext = useContext(CartContext)
  const [isConfirmed, setIsConfirmed] = useState(false)

  function confirmHandler() {
    setIsConfirmed(prev => !prev)
  }

  return (
    <>
      <Navbar />
      <div className="container">
      {storeContext.isCartOpen && <Cart onConfirmed={confirmHandler}/>}
      {isConfirmed && <OrderConfirmedModal onClick = {confirmHandler}/>}
        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
