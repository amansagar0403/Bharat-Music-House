import React from "react";
import AliceCarousel from "react-alice-carousel";
import Homecard from "./Homecard";
import styles from "./Homecard.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardCarousel = () => {
  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = [1, 1, 1, 1, 1].map((item, index) => <Homecard key={index} />);

  return (
    <div className={styles.outercarousel}>
      <div className={styles.carousel}>
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          mouseTracking
        />
      </div>
    </div>
  );
};

export default CardCarousel;
