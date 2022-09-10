import { useState, useContext } from "react";
import CartPageProduct from "../components/CartPageProduct/CartPageProduct";
import Context from "../context/context";

import styles from "./CartPage.module.css";

function CartPage() {
  const [cartProductsList, SetCartProductsList] = useState(
    JSON.parse(localStorage.getItem("CartProducts"))
  );
  const [totalPrice, SetTotalPrice] = useState(0);
  const [totalCount, SetTotalCount] = useState(0);
  const ctx = useContext(Context);

  // const totalInfoHandler = () => {
  //   SetTotalCount(
  //     JSON.parse(localStorage.getItem("CartProducts")).reduce(
  //       (acc, el) => acc + el.ItemCount,
  //       0
  //     )
  //   );
  //   SetTotalPrice(
  //     JSON.parse(localStorage.getItem("CartProducts")).reduce(
  //       (acc, el) => acc + el.ItemCount * el.Price,
  //       0
  //     )
  //   );

  //   ctx.inCartTotalCount = totalCount;
  //   ctx.inCartTotalPrice = totalPrice;
  //   console.log(ctx);
  //   ctx.SetInCartProducts(cartProductsList);
  // };

  const deleteHandler = (id) => {
    const newArr = cartProductsList.filter((product) => product.id !== id);
    localStorage.setItem("CartProducts", JSON.stringify(newArr));
    SetCartProductsList(JSON.parse(localStorage.getItem("CartProducts")));
    if (newArr.length === 0) {
      SetTotalPrice(0);
      SetTotalCount(0);
    }
    ctx.SetInCartProducts(newArr);
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
                // ontotalInfoHandler={totalInfoHandler}
              />
            );
          })}
      </div>
      <div className={styles.Right}>
        <div className={styles.Info}>
          <div className={styles.ProductsCount}>
            Кол-во товара :{" "}
            {ctx.inCartProducts.reduce((acc, el) => acc + el.ItemCount, 0)}
          </div>
          <div className={styles.TotalPrice}>
            {ctx.inCartProducts.reduce(
              (acc, el) => acc + el.ItemCount * el.Price,
              0
            )}{" "}
            &#8381;
          </div>
        </div>
        <div className={styles.GoToFormButton}>
          <button>Перейти к оформлению</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
