import Card from "../UI/Card/Card";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <Card className={styles.header}>
      <h2>
        <span className={styles.underline}>fooce</span>:{" "}
        <span className={styles.underline}>foo</span>d for your fa
        <span className={styles.underline}>ce</span>
      </h2>
      <p>Stuff your face with your favorites, delivered right to your door!</p>
      <p>
        All our meals are prepared by our world-class chefs. With
        years of training, we guarantee your meal
        will be something special.{" "}
      </p>
    </Card>
  );
};
export default Header;
