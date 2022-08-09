import styles from "./ProductPreview.module.css";

function ProductPreview(props) {
  return (
    <div className={styles.BackGround} onClick={props.onClosePreview}>
      <div className={styles.Wrapper} onClick={(e) => e.stopPropagation()}>
        <div className={styles.Close} onClick={props.onClosePreview}>
          &#10006;
        </div>
      </div>
    </div>
  );
}

export default ProductPreview;
