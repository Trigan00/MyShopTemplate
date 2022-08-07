import React, { Fragment, useState } from "react";
import CatalogSection from "../components/catalogSection/CatalogSection";
import AllProducts from "../components/Products/AllProducts";

import styles from "./Catalog.module.css";

function Catalog() {
  const [isSectionClicked, SetisSectionClicked] = useState(false);
  const [SectionName, SetSectionNAme] = useState("");

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
  //Удали фавикон

  const onSectionClickedHandler = (i) => {
    SetisSectionClicked(true);
    SetSectionNAme(сatalogSections[i].name);
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

  return (
    <Fragment>
      <div className={styles.Sections}>{SectoionsList}</div>
      <div className={styles.Sections}>
        {<AllProducts selectedSection={SectionName} />}
      </div>
    </Fragment>
  );
}

export default Catalog;
