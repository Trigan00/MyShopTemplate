import React, { useState } from "react";
import CatalogSection from "../components/catalogSection/CatalogSection";

import styles from "./Catalog.module.css";

function Catalog() {
  const [isSectionClicked, SetisSectionClicked] = useState(false);

  const сatalogSections = [
    { name: "Кофты", id: 0 },
    { name: "Футболки", id: 1 },
    { name: "Штаны", id: 2 },
    { name: "Кроссовки", id: 3 },
    { name: "Шорты", id: 4 },
    { name: "Куртки", id: 5 },
  ];

  //нужно хранить массив компоненотов и вызвать один из них по индексу
  //либо
  //создать один компонент который будет содеражать все товары и рендрить
  //через фильтр только те у которых совпадает название раздела

  const onSectionClickedHandler = (i) => {
    SetisSectionClicked(true);
    console.log(i);
  };

  const SectoionsList = сatalogSections.map((item, i) => (
    <CatalogSection
      product={item}
      key={item.id}
      onSectionClicked={onSectionClickedHandler}
      isClicked={isSectionClicked}
      index={i}
    />
  ));

  return <div className={styles.Sections}>{SectoionsList}</div>;
}

export default Catalog;
