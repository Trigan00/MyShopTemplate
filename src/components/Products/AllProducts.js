import { Fragment } from "react";
import Product from "./Product";

function AllProducts(props) {
  const AllProducts = [
    { SectionName: "Кофты", name: "Белая кофта", price: 3000, id: 0 },
    { SectionName: "Футболки", name: "Желтая футболка", price: 1200, id: 1 },
    { SectionName: "Штаны", name: "Черные штаны", price: 2500, id: 2 },
    { SectionName: "Кроссовки", name: "Розовые кроссовки", price: 3000, id: 3 },
    { SectionName: "Кроссовки", name: "Черные кроссовки", price: 3100, id: 4 },
    { SectionName: "Кроссовки", name: "Белые кроссовки", price: 3200, id: 5 },
    { SectionName: "Кроссовки", name: "Розовые кроссовки", price: 3000, id: 6 },
    { SectionName: "Кроссовки", name: "Черные кроссовки", price: 3100, id: 7 },
    { SectionName: "Кроссовки", name: "Белые кроссовки", price: 3200, id: 8 },
    { SectionName: "Шорты", name: "Оранжевые шорты", price: 2000, id: 9 },
    { SectionName: "Куртки", name: "Синяя куртка", price: 5000, id: 10 },
  ];

  const newArr = AllProducts.filter(
    (product) => product.SectionName === props.selectedSection
  );

  return (
    <Fragment>
      {newArr.map((product) => (
        <Product name={product.name} price={product.price} key={product.id} />
      ))}
    </Fragment>
  );
}

export default AllProducts;
