import React, { useContext } from "react";
import Context from "../../store/context";
import styles from "./ProductCounter.module.css";

const ProductCounter = (props) => {
  const ctx = useContext(Context);

  // const amountChangeHandler = (event) => {
  //   if (+event.target.value <= 10 && +event.target.value >= 0) {
  //     props.SetInputAmount(+event.target.value);
  //     props.OnChange();
  //   }
  // };

  // const onBlurHandler = (event) => {
  //   if (+event.target.value === 0 || isNaN(event.target.value)) {
  //     props.SetInputAmount(1);
  //     props.OnChange();
  //   }
  // };

  const stepDown = () => {
    props.SetInputAmount((prev) => (prev > 1 ? prev - 1 : 1));
    if (!props.isProductPreview) {
      const itemIndex = ctx.inCartProducts.findIndex(
        (item) => item.id === props.id
      );
      if (ctx.inCartProducts[itemIndex].ItemCount > 1)
        ctx.changeProductCount(props.id, -1);
    }
  };

  const stepUp = () => {
    props.SetInputAmount((prev) => (prev < 10 ? prev + 1 : 10));
    if (!props.isProductPreview) {
      const itemIndex = ctx.inCartProducts.findIndex(
        (item) => item.id === props.id
      );
      if (ctx.inCartProducts[itemIndex].ItemCount < 10)
        ctx.changeProductCount(props.id, 1);
    }
  };

  return (
    <div className={styles.Number}>
      <button className={styles.NumberMinus} type="button" onClick={stepDown}>
        -
      </button>
      <input
        readOnly={true}
        type="number"
        min="1"
        max="10"
        step="1"
        value={props.inputAmount}
        // onChange={amountChangeHandler}
        // onBlur={onBlurHandler}
      ></input>
      <button className={styles.NumberPlus} type="button" onClick={stepUp}>
        +
      </button>
    </div>
  );
};

export default ProductCounter;
