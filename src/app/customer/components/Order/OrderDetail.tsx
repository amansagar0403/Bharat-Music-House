import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import styles from "./page.module.css";
import OrderTracker from "./OrderTracker";

const OrderDetail = () => {
  return (
    <div className={styles.page}>
      <div className={styles.orders}>
        <h1 className={styles.heading}>Delivery address</h1>
        <AddressCard />
        <div className="py-20">
          <OrderTracker activeStep={3} />
        </div>
        {[1, 1, 1, 1].map((item) => (
          <div className="space-x-5 mb-5">
            <div className="border p-5 rounded-md align-center justify-between ">
              <div className="flex">
                <div className={styles.image}>
                  <img src="guitarcard.jpeg" alt="" />
                </div>
                <div className="text-white ml-5">
                  <p className="font-bold text-2xl">Colt Guitar</p>
                  <p className="font-semibold opacity-65">Colt</p>
                  <p className="mt-5">2000</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderDetail;
