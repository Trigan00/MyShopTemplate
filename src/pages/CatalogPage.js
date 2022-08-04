import React from "react";
import CatalogSections from "../components/catalogSection/CatalogSection";

import styles from "./Catalog.module.css";

function Catalog() {
  const сatalogSections = [
    { name: "Кофты", id: 0 },
    { name: "Футболки", id: 1 },
    { name: "Штаны", id: 2 },
    { name: "Кроссовки", id: 3 },
    { name: "Шорты", id: 4 },
    { name: "Куртки", id: 5 },
  ];

  const SectoionsList = сatalogSections.map((item) => (
    <CatalogSections product={item} key={item.id} />
  ));

  return <div className={styles.Sections}>{SectoionsList}</div>;
}

export default Catalog;
