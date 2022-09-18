import { useEffect, useState, useContext } from "react";
import Context from "../../store/context";
import GoToCartBut from "../UI/GoToCartBut";
import ProductCounter from "../UI/ProductCounter";
import styles from "./ProductPreview.module.css";

function ProductPreview(props) {
  const [inputAmount, SetInputAmount] = useState(1);
  const [AddToCartBut, SetAddToCartBut] = useState(false);
  const ctx = useContext(Context);

  useEffect(() => {
    const cartProductsList =
      JSON.parse(localStorage.getItem("CartProducts")) || [];
    cartProductsList.forEach((product) => {
      if (product.id === props.productData.id) {
        SetAddToCartBut(true);
        return;
      }
    });
  }, [props.productData.id]);

  const AddToCartHandler = () => {
    const cartProductsList =
      JSON.parse(localStorage.getItem("CartProducts")) || [];
    cartProductsList.push({
      id: props.productData.id,
      ItemName: props.productData.name,
      ItemCount: inputAmount,
      Price: props.productData.price,
      ImgUrl: props.imgurl,
    });
    localStorage.setItem("CartProducts", JSON.stringify(cartProductsList));

    ctx.SetInCartProducts(cartProductsList);
    SetAddToCartBut(true);
  };

  return (
    <div className={styles.BackGround} onClick={props.onClosePreview}>
      <div className={styles.Body}>
        <div className={styles.Content} onClick={(e) => e.stopPropagation()}>
          <div className={styles.Name}>{props.productData.name}</div>
          <div className={styles.Wrapper}>
            <div className={styles.Image}>
              <img src={props.imgurl} alt="PoductImage" />
            </div>
            <div className={styles.Description}>
              <div className={styles.Price}>
                {props.productData.price} &#36;
              </div>
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

              {AddToCartBut ? (
                <GoToCartBut />
              ) : (
                <div className={styles.ProductCount}>
                  <ProductCounter
                    inputAmount={inputAmount}
                    SetInputAmount={SetInputAmount}
                    isProductPreview={true}
                  />

                  <div className={styles.AddToCart}>
                    <button
                      className={styles.AddToCartBut}
                      type="button"
                      onClick={AddToCartHandler}
                    >
                      Add to Cart &#8594;
                    </button>
                  </div>
                </div>
              )}
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
