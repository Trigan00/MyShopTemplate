import React from "react";
import Carousel from "../components/Carousel/Carousel";
import styles from "./HomePage.module.css";

function Home() {
  return (
    <div className={styles.Home}>
      <Carousel />

      <div className={styles.Description}>
        <h3>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h3>
        <p>
          Pretium lectus quam id leo in vitae turpis massa. Adipiscing elit
          pellentesque habitant morbi tristique. Nisl pretium fusce id velit ut
          tortor pretium viverra. Pharetra convallis posuere morbi leo urna
          molestie at elementum. Accumsan in nisl nisi scelerisque eu ultrices.
        </p>
        <p>
          Diam phasellus vestibulum lorem sed risus. Scelerisque eleifend donec
          pretium vulputate. Ut tellus elementum sagittis vitae et leo. Sed odio
          morbi quis commodo odio. Egestas fringilla phasellus faucibus
          scelerisque eleifend donec pretium vulputate sapien.{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
