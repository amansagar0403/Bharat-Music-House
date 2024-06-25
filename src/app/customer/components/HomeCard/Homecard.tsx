// Homecard.tsx
import React from "react";
import styles from "./Homecard.module.css";
import { GuitarProduct } from "./types"; // Import the type

interface HomecardProps {
  product: GuitarProduct;
}

const Homecard: React.FC<HomecardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={product.image} alt="Guitar" />
      </div>
      <div className={styles.content}>
        <h2>{product.brand}</h2>
        <p>{product.title}</p>
      </div>
    </div>
  );
};

export default Homecard;
