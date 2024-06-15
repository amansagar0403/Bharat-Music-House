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
import MainCarousel from "../components/HomeCarousel/mainCarousel";
import CardCarousel from "../components/HomeCard/CardCarousel";
import { guitar } from "../components/HomeCard/guitar";

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
      <div>
        <MainCarousel />
        <div>
          <CardCarousel data={guitar} sectionName={"Guitar"} />
          <CardCarousel data={guitar} sectionName={"Mic"} />
          <CardCarousel data={guitar} sectionName={"Speakers"} />
          <CardCarousel data={guitar} sectionName={"Trufs"} />
          <CardCarousel data={guitar} sectionName={"Guitar"} />
        </div>
      </div>
    </main>
  );
}
