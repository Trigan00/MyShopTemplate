import React from "react";
import styles from "./ProductItem.module.css";

function CatalogSection(props) {
  const onSectionCLickHandler = () => {
    props.onSectionClicked(props.index);
  };

  return (
    <div className={styles.Item} onClick={onSectionCLickHandler}>
      <div className={props.isClicked ? styles.imageClicked : styles.image} />
      <div className={styles.Name}>{props.product.name}</div>
    </div>
  );
}

export default CatalogSection;
