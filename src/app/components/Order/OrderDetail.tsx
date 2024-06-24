import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import styles from "./page.module.css";

const OrderDetail = () => {
  return (
    <div className={styles.page}>
      <div className={styles.orders}>
        <h1 className={styles.heading}>Delivery address</h1>
        <AddressCard />
      </div>
    </div>
  );
};

export default OrderDetail;
