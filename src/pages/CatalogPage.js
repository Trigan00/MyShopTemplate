import React, { Fragment, useState } from "react";
import CatalogSection from "../components/catalogSection/CatalogSection";
import AllProducts from "../components/Products/AllProducts";

import styles from "./Catalog.module.css";

function CatalogPage(props) {
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
        {<AllProducts selectedSection={SectionName} data={props.data} />}
      </div>
    </Fragment>
  );
}

export default CatalogPage;
