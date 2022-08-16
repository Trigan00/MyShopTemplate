import { Fragment, useState } from "react";
import ProductPreview from "../ProductPreview/ProductPreview";
import styles from "./Products.module.css";

function Product(props) {
  const [isPreviewOpen, SetIsPreviewOpen] = useState(false);

  const onSectionCLickHandler = () => {
    SetIsPreviewOpen(true);
  };

  const closePreview = () => {
    SetIsPreviewOpen(false);
  };

  return (
    <Fragment>
      <div className={styles.Item} onClick={onSectionCLickHandler}>
        <div className={styles.image}>
          <img src={props.imgurl} alt="PoductImage" />
        </div>
        <div className={styles.Description}>
          <div className={styles.Name}>{props.data.name}</div>
          <div className={styles.Price}>{props.data.price} &#8381;</div>
        </div>
      </div>

      {isPreviewOpen && (
        <ProductPreview
          onClosePreview={closePreview}
          data={props.data}
          imgurl={props.imgurl}
        />
      )}
    </Fragment>
  );
}

export default Product;
