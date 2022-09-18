import styles from "./CarouselPage.module.css";
import { NavLink } from "react-router-dom";

function CarouselPage({ data }) {
  return (
    <div
      className={styles.Page}
      style={{ backgroundImage: `url(${data.url})`, backgroundSize: "cover" }}
    >
      <h2>{data.name}</h2>

      <div className={styles.Description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </div>

      <ul>
        <li>34 mi tempus imperdiet</li>
        <li>iaculis 1 eu 3 non</li>
        <li>ante in nibh 2500</li>
      </ul>

      <NavLink to={`/${data.link}`}>
        <button className={styles.GoToCatalogBut}>Shop Now</button>
      </NavLink>
    </div>
  );
}

export default CarouselPage;
