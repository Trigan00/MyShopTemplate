import React from "react";
import styles from "./CatalogSection.module.css";

function CatalogSection(props) {
  const onSectionCLickHandler = () => {
    props.onSectionClicked(props.index);
  };

  return (
    <div className={styles.Item} onClick={onSectionCLickHandler}>
      {!props.isClicked && (
        <div className={styles.image}>
          <img src="../img/pink.png" alt="MyPicture" />
        </div>
      )}

      <div className={styles.Name}>{props.product.name}</div>
    </div>
  );
}

export default CatalogSection;
