import styles from "./Products.module.css";

function Product(props) {
  const onSectionCLickHandler = () => {
    console.log(props.imgurl);
  };

  return (
    <div className={styles.Item} onClick={onSectionCLickHandler}>
      <div className={styles.image}>
        <img src={props.imgurl} alt="MyPicture"></img>
      </div>
      <div className={styles.Name}>{props.name}</div>
      <div className={styles.Price}>{props.price} &#8381;</div>
    </div>
  );
}

export default Product;
