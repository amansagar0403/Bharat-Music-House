import React from "react";
import styles from "./page.module.css";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

const CartItem = () => {
  return (
    <div className={styles.page}>
      <div className="p-5 w-100 border rounded-md">
        <div className="flex items-center">
          <div className={styles.image}>
            <img src="guitarcard.jpeg" alt="" />
          </div>
          <div className="ml-5 space-y-1">
            <p className="font-semibold text-white text-lg lg:text-xl">Cort</p>
            <p className="font-semibold text-white opacity-80">
              Cort G-100 Open Pore Walnut Electric Guitar
            </p>
            <div className="flex space-x-5 items-center text-lg lg:text-xl pt-6 text-white">
              <p className="font-semibold">199</p>
              <p className="opacity-60 line-through">200</p>
              <p className="text-green-500 font-semibold">5% off</p>
            </div>
            <div className="lg:flex item-center lg:space-x-10 pt-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  style={{ color: "red", cursor: "pointer" }}
                  size="xl"
                />
                <span className="py-1 px-7 border rounded-sm text-white">
                  3
                </span>
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  style={{ color: "red", cursor: "pointer" }}
                  size="xl"
                />
              </div>
              <div>
                <button className="text-red-500 pt-5 pb-5"> Remove </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
