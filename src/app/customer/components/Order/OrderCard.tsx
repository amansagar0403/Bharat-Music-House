import React from "react";
import styles from "./page.module.css";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => navigate(`/account/order/${5}`)}
        className="flex justify-between border p-5 cursor-pointer hover:border-red-500"
      >
        <div className="flex">
          <div className={styles.image}>
            <img src="guitarcard.jpeg" alt="Guitar" />
          </div>
          <div className="ml-5 space-y-5">
            <h1 className="text-white text-lg font-bold">Colt guitar</h1>
          </div>
        </div>
        <div>
          <p className="text-white">2000</p>
        </div>
        <div>
          {true && (
            <p className="text-white">
              <span>Delivered on March 20</span>
            </p>
          )}
          {false && (
            <p className="text-white">
              <span>Expected Delivery on March 3</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
