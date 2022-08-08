import { Fragment, useEffect, useState } from "react";
import Product from "./Product";

// import allProductsJSON from "../../data/products.json";

function AllProducts(props) {
  const [data, SetData] = useState(null);

  useEffect(() => {
    fetch("https://trigan00.github.io/jsonapi/products.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetData(data);
      });
    // .catch((err) => console.log(err));
  }, []);

  const newArr =
    data &&
    data.filter((product) => product.SectionName === props.selectedSection);
  //useEffect надо перенести в app, чтобы данные загрузились сразу после открытия страницы
  //map надо перенести в компонент Product
  return (
    <Fragment>
      {newArr &&
        newArr.map((product) => (
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
