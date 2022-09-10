import { useContext, useState } from "react";
import Context from "../../context/context";

import ProductCounter from "../UI/ProductCounter";
import styles from "./CartPageProduct.module.css";

function CartPageProduct(props) {
  const [inputAmount, SetInputAmount] = useState(props.count);
  // const [totalPriceOneProduct, SetTotalPriceOneProduct] = useState(
  //   props.Price * inputAmount
  // );
  const ctx = useContext(Context);
  const cartItemIndex = ctx.inCartProducts.findIndex(
    (item) => item.id === props.id
  );
  const totalPrice = ctx.inCartProducts[cartItemIndex].ItemCount * props.Price;
  // useEffect(() => {
  //   const cartProductsList = JSON.parse(localStorage.getItem("CartProducts"));
  //   const newarr = [...cartProductsList];

  //   for (let i = 0; i < cartProductsList.length; i++) {
  //     if (cartProductsList[i].id === props.id) {
  //       newarr.splice(i, 1, { ...cartProductsList[i], ItemCount: inputAmount });
  //       localStorage.setItem("CartProducts", JSON.stringify(newarr));
  //       SetTotalPriceOneProduct(props.Price * inputAmount);
  //       ctx.SetInCartProducts(newarr);
  //     }
  //   }
  // }, [inputAmount, props, ctx]);

  // const OnChangeHandler = () => {
  //   const cartProductsList = JSON.parse(localStorage.getItem("CartProducts"));
  //   const newarr = [...cartProductsList];

  //   for (let i = 0; i < cartProductsList.length; i++) {
  //     if (cartProductsList[i].id === props.id) {
  //       newarr.splice(i, 1, { ...cartProductsList[i], ItemCount: inputAmount });
  //       localStorage.setItem("CartProducts", JSON.stringify(newarr));
  //       ctx.SetInCartProducts(newarr);
  //       SetTotalPriceOneProduct(props.Price * inputAmount);
  //     }
  //   }
  // };

  return (
    <div className={styles.BackGround}>
      <div className={styles.Description}>
        <div className={styles.Image}>
          <img src={props.ImgUrl} alt="PoductImage" />
        </div>
        <div className={styles.Name}>{props.name}</div>
      </div>
      <div className={styles.CountAndPrice}>
        <div className={styles.Counter}>
          <ProductCounter
            // OnChange={OnChangeHandler}
            inputAmount={inputAmount}
            SetInputAmount={SetInputAmount}
            isProductPreview={false}
            id={props.id}
          />
          <div className={styles.Price}>{props.Price} &#8381;/шт.</div>
        </div>
        <div className={styles.TotalPrice}>{totalPrice} &#8381;</div>
      </div>

      <div className={styles.Delete} onClick={() => props.onDelete(props.id)}>
        &#10006;
      </div>
    </div>
  );
}

export default CartPageProduct;
