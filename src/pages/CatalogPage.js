import { Fragment } from "react";
import Product from "../components/Products/Product";
import Loader from "../components/UI/Loader";
import styles from "./CatalogPage.module.css";

// import allProductsJSON from "../../data/products.json";

function CatalogPage(props) {
  const newArr =
    props.data &&
    props.data.filter(
      (product) => product.SectionName === props.selectedSection
    );

  return (
    <Fragment>
      <div className={styles.SectionName}>{props.selectedSection}</div>
      <div className={styles.Wrapper}>
        {newArr ? (
          newArr.map((product) => (
            <Product
              // name={product.name}
              // price={product.price}
              key={product.id}
              imgurl={product.imgURL}
              productData={product}
            />
          ))
        ) : (
          <Loader />
        )}

        {/* // {newArr &&
        //   newArr.map((product) => (
        //     <Product
        //       // name={product.name}
        //       // price={product.price}
        //       key={product.id}
        //       imgurl={product.imgURL}
        //       data={product}
        //     />
        //   ))} */}
      </div>
    </Fragment>
  );
}

export default CatalogPage;
