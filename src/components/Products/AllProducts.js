import { Fragment } from "react";
import Product from "./Product";

import allProductsJSON from "../../data/products.json";

function AllProducts(props) {
  const newArr = allProductsJSON.filter(
    (product) => product.SectionName === props.selectedSection
  );

  return (
    <Fragment>
      {newArr.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          key={product.id}
          imgurl={product.imgURL}
        />
      ))}
    </Fragment>
  );
}

export default AllProducts;
