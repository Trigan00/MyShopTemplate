import { NavLink } from "react-router-dom";
import styles from "./GoToCart.module.css";

function GoToCartBut() {
  return (
    <NavLink to={"/Cart"}>
      <button className={styles.GoToCartBut}>В корзине</button>
    </NavLink>
  );
}

export default GoToCartBut;
