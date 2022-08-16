import { useContext, useState } from "react";
import Context from "../../context/context";
import GoToCartBut from "../UI/GoToCartBut";
import styles from "./ProductPreview.module.css";

function ProductPreview(props) {
  const [inputAmount, SetInputAmount] = useState(1);
  const [AddToCartBut, SetAddToCartBut] = useState(false);
  const ctx = useContext(Context);

  const amountChangeHandler = (event) => {
    if (+event.target.value <= 10 && +event.target.value >= 0)
      SetInputAmount(event.target.value);
  };

  const stepDown = () => {
    SetInputAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const stepUp = () => {
    SetInputAmount((prev) => (prev < 10 ? prev + 1 : 10));
  };

  const AddToCartHandler = () => {
    ctx.push({
      ItemName: props.data.name,
      ItemCount: inputAmount,
    });
    SetAddToCartBut(true);
  };

  const ButtonsLogic = AddToCartBut ? (
    <GoToCartBut />
  ) : (
    <div className={styles.ProductCount}>
      <div className={styles.Number}>
        <button className={styles.NumberMinus} type="button" onClick={stepDown}>
          -
        </button>
        <input
          type="number"
          min="1"
          max="10"
          step="1"
          value={inputAmount}
          onChange={amountChangeHandler}
        ></input>
        <button className={styles.NumberPlus} type="button" onClick={stepUp}>
          +
        </button>
      </div>

      <div className={styles.AddToCart}>
        <button
          className={styles.AddToCartBut}
          type="button"
          onClick={AddToCartHandler}
        >
          Добавить в корзину &#8594;
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.BackGround} onClick={props.onClosePreview}>
      <div className={styles.Body}>
        <div className={styles.Content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.Name}>{props.data.name}</div>
          <div className={styles.Wrapper}>
            <div className={styles.Image}>
              <img src={props.imgurl} alt="PoductImage" />
            </div>
            <div className={styles.Description}>
              <div className={styles.Price}>{props.data.price} &#8381;</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus sed turpis tincidunt id aliquet. Ultrices in iaculis nunc
                sed augue lacus. A pellentesque sit amet porttitor eget.
                Suscipit tellus mauris a diam maecenas sed. In hac habitasse
                platea dictumst vestibulum rhoncus est pellentesque. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Lacus sed
                turpis tincidunt id aliquet.
              </p>

              {ButtonsLogic}
            </div>
          </div>
          <div className={styles.Close} onClick={props.onClosePreview}>
            &#10006;
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
