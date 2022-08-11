import styles from "./ProductPreview.module.css";

function ProductPreview(props) {
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
                turpis tincidunt id aliquet. Ultrices in iaculis nunc sed augue
                lacus. A pellentesque sit amet porttitor eget. Suscipit tellus
                mauris a diam maecenas sed. In hac habitasse platea dictumst
                vestibulum rhoncus est pellentesque.
              </p>
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
