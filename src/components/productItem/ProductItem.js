import React from "react";
import styles from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <div className={styles.Item}>
      <div className={styles.image} />
      <label className={styles.Name}>{props.product.name}</label>
      <label className={styles.Price}>{props.product.Price} &#8381;</label>
    </div>
  );
}

export default ProductItem;
