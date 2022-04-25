import styles from "./Navbar.module.css";

import TinyCart from "./TinyCart/TinyCart";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <h1>fooce</h1>
        <TinyCart/>
      </div>
    </div>
  );
};
export default Navbar;
