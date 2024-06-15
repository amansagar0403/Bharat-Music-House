import React from "react";
import AliceCarousel from "react-alice-carousel";
import Homecard from "./Homecard";
import styles from "./Homecard.module.css";
import { GuitarProduct } from "./types"; // Import the type

interface CardCarouselProps {
  data: GuitarProduct[];
  sectionName: string;
}

const CardCarousel: React.FC<CardCarouselProps> = ({ data, sectionName }) => {
  const responsive = {
    0: { items: 2 },
    720: { items: 3 },
    1024: { items: 4 },
  };

  const items = data
    .slice(0, 8)
    .map((item, index) => <Homecard key={index} product={item} />);

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
