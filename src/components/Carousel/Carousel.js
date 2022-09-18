import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

import module from "./Carousel-Img/module.webp";
import frame from "./Carousel-Img/frame.webp";
import poster from "./Carousel-Img/poster.webp";
import clock from "./Carousel-Img/clock.webp";
import light from "./Carousel-Img/light.webp";
import CarouselPage from "./CarouselPage";

function Carousel() {
  const [offset, SetOffset] = useState(0);
  const [activeIndex, SetActiveIndex] = useState(0);
  const ref = useRef();

  const pages = [
    {
      id: 1,
      name: "Modular paintings",
      url: module,
      link: "Modular_paintings",
    },
    { id: 2, name: "Framed paintings", url: frame, link: "Framed_paintings" },
    { id: 3, name: "Posters ", url: poster, link: "Modular_paintings" },
    { id: 4, name: "Clock-paintings", url: clock, link: "Clock-paintings" },
    { id: 5, name: "Lightboxes", url: light, link: "Lightboxes" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      SetOffset((prev) => {
        if (activeIndex === 4) {
          SetActiveIndex(0);
          return 0;
        }
        SetActiveIndex((prev) => prev + 1);
        return prev - ref.current.offsetWidth;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div ref={ref} className={styles.CarouselContainer}>
      <div className={styles.window}>
        <div
          className={styles.allPagesContainer}
          style={{ transform: `translateX(${offset}px)` }}
        >
          {pages.map((item) => {
            return <CarouselPage key={item.id} data={item} />;
          })}
        </div>
      </div>

      <div className={styles.OwlDots}>
        {pages.map((item, i) => (
          <div
            key={i}
            className={`${styles.OwlDot} ${
              i === activeIndex ? styles.Active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
