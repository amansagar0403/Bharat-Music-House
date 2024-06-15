import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./MainCarousel.module.css";
import { Content } from "./Content";

const items = Content.map((item) => (
  <div className={styles["carousel-item"]}>
    <img
      src={item.image}
      className={styles["carousel-image"]}
      role="presentation"
    />
  </div>
));

const MainCarousel = () => (
  <div className={styles["carousel-container"]}>
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  </div>
);

export default MainCarousel;
