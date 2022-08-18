// import { useContext } from "react";
import { useState } from "react";
import CartPageProduct from "../components/CartPageProduct/CartPageProduct";
// import Context from "../context/context";

import styles from "./CartPage.module.css";

function CartPage() {
  const [cartProductsList, SetCartProductsList] = useState(
    JSON.parse(localStorage.getItem("CartProducts"))
  );
  const [totalPrice, SetTotalPrice] = useState(0);
  const [totalCount, SetTotalCount] = useState(0);
  // const ctx = useContext(Context);

  const totalCountHandler = () => {
    SetTotalCount(
      JSON.parse(localStorage.getItem("CartProducts")).reduce(
        (acc, el) => acc + el.ItemCount,
        0
      )
    );
  };

  const totalPriceHandler = () => {
    SetTotalPrice(
      JSON.parse(localStorage.getItem("CartProducts")).reduce(
        (acc, el) => acc + el.ItemCount * el.Price,
        0
      )
    );
  };

  const deleteHandler = (id) => {
    const newArr = cartProductsList.filter((product) => product.id !== id);
    localStorage.setItem("CartProducts", JSON.stringify(newArr));
    SetCartProductsList(JSON.parse(localStorage.getItem("CartProducts")));
    if (newArr.length === 0) {
      SetTotalPrice(0);
      SetTotalCount(0);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Left}>
        {cartProductsList &&
          cartProductsList.map((value) => {
            return (
              <CartPageProduct
                key={value.id}
                id={value.id}
                name={value.ItemName}
                count={value.ItemCount}
                Price={value.Price}
                ImgUrl={value.ImgUrl}
                onDelete={deleteHandler}
                onTotalCountHandler={totalCountHandler}
                onTotalPriceHandler={totalPriceHandler}
              />
            );
          })}
      </div>
      <div className={styles.Right}>
        <div className={styles.Info}>
          <div className={styles.ProductsCount}>{totalCount} товаров</div>
          <div className={styles.TotalPrice}>{totalPrice} &#8381;</div>
        </div>
        <div className={styles.GoToFormButton}>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
