import styles from "./ProductCounter.module.css";

function ProductCounter(props) {
  const amountChangeHandler = (event) => {
    if (+event.target.value <= 10 && +event.target.value >= 0) {
      props.SetInputAmount(+event.target.value);
    }
  };

  const onBlurHandler = (event) => {
    if (+event.target.value === 0 || isNaN(event.target.value))
      props.SetInputAmount(1);
  };

  const stepDown = () => {
    props.SetInputAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const stepUp = () => {
    props.SetInputAmount((prev) => (prev < 10 ? prev + 1 : 10));
  };

  return (
    <div className={styles.Number}>
      <button className={styles.NumberMinus} type="button" onClick={stepDown}>
        -
      </button>
      <input
        type="number"
        min="1"
        max="10"
        step="1"
        value={props.inputAmount}
        onChange={amountChangeHandler}
        onBlur={onBlurHandler}
      ></input>
      <button className={styles.NumberPlus} type="button" onClick={stepUp}>
        +
      </button>
    </div>
  );
}

export default ProductCounter;
