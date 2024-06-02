"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faBars,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function Home() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.innerNav}>
          <div className={styles.logo}>
            <img src="logo.png" alt="Logo" />
          </div>
          <div className={styles.profile}>
            <button className={styles.loginbtn}>Login/Signup</button>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.cart} />
            <FontAwesomeIcon icon={faCartShopping} className={styles.cart} />
            <FontAwesomeIcon
              icon={faBars}
              className={styles.cart}
              onClick={togglePanel}
            />
          </div>
        </div>
      </nav>
      <div
        className={`${styles.panel} ${panelVisible ? styles.panelVisible : ""}`}
      >
        <button onClick={togglePanel}>
          <FontAwesomeIcon icon={faArrowLeft} className={styles.cart} />
        </button>
      </div>
      <div className={styles.mainwallpaper}>
        <h1>
          Bharat Music <br />
          <span
            style={{
              color: "red",
              backgroundColor: "transparent",
              textShadow: "none",
            }}
          >
            House
          </span>
        </h1>
        <img src="guitar.png" alt="" />
      </div>
      <div className={styles.products}>
        <div className={styles.productlist}>
          <h1>Our Products</h1>
          <hr />
        </div>
      </div>
    </main>
  );
}
