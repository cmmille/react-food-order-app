import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Header />
        <Menu />
      </div>
    </div>
  );
}

export default App;
