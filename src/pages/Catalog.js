import React from "react";
import ProductItem from "../components/productItem/ProductItem";

import styles from "./Catalog.module.css";

function Catalog() {
  const initialProducts = [
    { name: "item_1", Price: 2000, id: 0 },
    { name: "item_2", Price: 7000, id: 1 },
    { name: "item_3", Price: 5000, id: 2 },
  ];

  const ProductsList = initialProducts.map((item) => (
    <ProductItem product={item} key={item.id} />
  ));

  return <div className={styles.Products}>{ProductsList}</div>;
}

export default Catalog;
