import React, { useContext } from "react";
import styles from "./CheckoutPage.module.css";
import Context from "../store/context";

function CheckoutPage() {
  const ctx = useContext(Context);
  const totalPrice = ctx.inCartProducts.reduce(
    (acc, el) => acc + el.ItemCount * el.Price,
    0
  );

  return (
    <React.Fragment>
      <div className={styles.mainTitle}>Checkout</div>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form action="">
            <h1 className={`${styles.title} ${styles.DevileryDetails}`}>
              Enter delivery details
            </h1>

            <div>
              <label htmlFor="f-name">First</label>
              <input type="text" name="f-name" />
            </div>
            <div>
              <label htmlFor="l-name">Last</label>
              <input type="text" name="l-name" />
            </div>
            <div className={styles.street}>
              <label htmlFor="address">Street</label>
              <input type="text" name="address" />
            </div>

            <div>
              <label htmlFor="city">City</label>
              <input type="text" name="city" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input type="text" name="state" />
            </div>
            <div>
              <label htmlFor="zip">Zip</label>
              <input type="text" name="zip" />
            </div>

            <h1 className={styles.PaymentInfo}>Payment Information</h1>
            <div className={styles.ccNum}>
              <label htmlFor="card-num">Credit Card No.</label>
              <input type="text" name="card-num" />
            </div>
            <div className={styles.ccInfo}>
              <div>
                <label htmlFor="card-num">Exp</label>
                <input type="text" name="expire" />
              </div>
              <div>
                <label htmlFor="card-num">CCV</label>
                <input type="text" name="security" />
              </div>
            </div>
            <div className={styles.btn}>
              <button>confirm the order </button>
            </div>
          </form>
        </div>
        <div className={styles.container}>
          <h1 className={styles.title}>Your order</h1>
          <div className={styles.OrderList}>
            {ctx.inCartProducts.map((item) => (
              <div className={styles.OrderItemWrapper} key={item.id}>
                <div className={styles.Product}>
                  <span className={styles.ProductName}>{item.ItemName}</span>
                  <div className={styles.ProductInfo}>
                    <span className={styles.ProductTitle}>
                      Quantity: <span>{item.ItemCount}</span>
                    </span>
                  </div>
                  <div className={styles.ProductInfo}>
                    <span className={styles.ProductTitle}>
                      Price: <span>{item.Price * item.ItemCount} USD</span>
                    </span>
                  </div>
                </div>
                <hr />
              </div>
            ))}

            <div className={styles.ProductsTotalInfo}>
              <div className={styles.ProductsInfo}>
                <span className={styles.ProductsInfoTitle}>
                  Cost of the items:<span>{totalPrice} USD</span>
                </span>
              </div>
              <div className={styles.ProductsInfo}>
                <span className={styles.ProductsInfoTitle}>
                  Delivery cost:
                  <span>{totalPrice * 0.08} USD</span>
                </span>
              </div>
              <div className={styles.ProductsInfo}>
                <span className={styles.ProductsInfoTitle}>
                  Delivery type: <span>{} Ground</span>
                </span>
              </div>
            </div>
          </div>

          <div className={styles.TotalCost}>
            <span className={styles.TotalCostTitle}>
              TOTAL DUE:
              <span>{totalPrice * 0.08 + totalPrice} USD</span>
            </span>
          </div>
          <hr className={styles.TotalCostHr} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default CheckoutPage;
