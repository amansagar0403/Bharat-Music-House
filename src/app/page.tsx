"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.innerNav}>
          <div className={styles.logo}>
            <img src="logo.png" alt="Logo" />
            <h1>Bharat Music House</h1>
          </div>
          <div className={styles.parameter}>
            <button>Home</button>
            <button>About Us</button>
            <button>Contact Us</button>
            <button>Login/SignUp</button>
          </div>
          <button className={styles.hamburger} onClick={toggleOptions}>
            &#x22EE;
          </button>
          {optionsVisible && (
            <div
              className={`${styles.optionsPanel} ${
                optionsVisible ? styles.show : ""
              }`}
            >
              <button>Home</button>
              <button>About Us</button>
              <button>Contact Us</button>
              <button>Login/SignUp</button>
            </div>
          )}
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <div className={styles.text}>
            <h1>WELCOME</h1>
            <h1>
              TO<span className={styles.bharat}> BHARAT MUSIC HOUSE</span>
            </h1>
            <p className={styles.details}>
              We are 100 year old company started in Lahore (now in Pakistan).
              With a humble and small beginning, we have now become one of the
              largest exporters, and retailers of Indian musical instruments in
              India.
            </p>
            <button className={styles.shop}>Shop Us</button>
          </div>
          <div className={styles.image}>
            <img src="musicalInstument.png" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}
