import { NavLink } from "react-router-dom";

function GoToCartBut() {
  return (
    <NavLink to={"/Cart"}>
      <button>В корзине</button>
    </NavLink>
  );
}

export default GoToCartBut;
