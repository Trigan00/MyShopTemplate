import { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartPageProduct from "../components/CartPageProduct/CartPageProduct";
import Context from "../store/context";

import styles from "./CartPage.module.css";

function CartPage() {
  const ctx = useContext(Context);
  const deleteHandler = (id) => {
    const newArr = ctx.inCartProducts.filter((product) => product.id !== id);
    localStorage.setItem("CartProducts", JSON.stringify(newArr));
    ctx.SetInCartProducts(newArr);
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Left}>
        {ctx.inCartProducts &&
          ctx.inCartProducts.map((value) => {
            return (
              <CartPageProduct
                key={value.id}
                id={value.id}
                name={value.ItemName}
                count={value.ItemCount}
                Price={value.Price}
                ImgUrl={value.ImgUrl}
                onDelete={deleteHandler}
              />
            );
          })}
      </div>
      <div className={styles.Right}>
        <div className={styles.Info}>
          <div className={styles.ProductsCount}>
            QTY :{" "}
            {ctx.inCartProducts.reduce((acc, el) => acc + el.ItemCount, 0)}
          </div>
          <div className={styles.TotalPrice}>
            {ctx.inCartProducts.reduce(
              (acc, el) => acc + el.ItemCount * el.Price,
              0
            )}{" "}
            &#36;
          </div>
        </div>
        <div className={styles.GoToFormButton}>
          <NavLink to={"/Checkout"}>
            <button>Checkout</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
