import React from "react";
import styles from "./Homecard.module.css";

const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src="guitarcard.jpeg" alt="Guitar" />
      </div>
      <div className={styles.content}>
        <h2>Yamaha</h2>
        <p>guitar</p>
      </div>
    </div>
  );
};

export default Card;
