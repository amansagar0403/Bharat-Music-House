import React from "react";
import styles from "./page.module.css";
import OrderCard from "./OrderCard";

const Order = () => {
  return (
    <div>
      <div className={styles.page}>
        <div className={styles.orders}>
          <h1 className={styles.header}>Your Orders</h1>
          <div className="space-y-5">
            {[1, 1, 1, 1].map((item) => (
              <OrderCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
