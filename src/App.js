import ReactDOM from "react-dom"

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import CartModal from "./components/CartModal/CartModal";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        {ReactDOM.createPortal(<CartModal />, document.getElementById("modal"))}

        <Header />
        <Menu />
      </div>
    </>
  );
}

export default App;
