import { useContext, useState } from "react";
import Context from "../../store/context";

import ProductCounter from "../UI/ProductCounter";
import styles from "./CartPageProduct.module.css";

function CartPageProduct(props) {
  const [inputAmount, SetInputAmount] = useState(props.count);

  const ctx = useContext(Context);
  const cartItemIndex = ctx.inCartProducts.findIndex(
    (item) => item.id === props.id
  );
  const totalPrice = ctx.inCartProducts[cartItemIndex].ItemCount * props.Price;

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
          <div className={styles.Price}>{props.Price} &#36;/pcs.</div>
        </div>
        <div className={styles.TotalPrice}>{totalPrice} &#36;</div>
      </div>

      <div className={styles.Delete} onClick={() => props.onDelete(props.id)}>
        &#10006;
      </div>
    </div>
  );
}

export default CartPageProduct;
