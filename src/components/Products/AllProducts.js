import { Fragment } from "react";
import Product from "./Product";

// import allProductsJSON from "../../data/products.json";

function AllProducts(props) {
  const newArr =
    props.data &&
    props.data.filter(
      (product) => product.SectionName === props.selectedSection
    );
  return (
    <Fragment>
      {newArr &&
        newArr.map((product) => (
          <Product
            // name={product.name}
            // price={product.price}
            key={product.id}
            imgurl={product.imgURL}
            data={product}
          />
        ))}
    </Fragment>
  );
}

export default AllProducts;
