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
import Product from "../components/Products/Product";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Order from "../components/Order/Order";
import OrderDetail from "../components/Order/OrderDetail";

export default function Home() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <BrowserRouter>
      <main className={styles.main}>
        <nav className={styles.nav}>
          <div className={styles.innerNav}>
            <div className={styles.logo}>
              <img src="logo.png" alt="Logo" />
            </div>
            <div className={styles.profile}>
              <button className={styles.loginbtn}>Login/Signup</button>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.cart}
              />
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
          className={`${styles.panel} ${
            panelVisible ? styles.panelVisible : ""
          }`}
        >
          <button onClick={togglePanel}>
            <FontAwesomeIcon icon={faArrowLeft} className={styles.cart} />
          </button>
        </div>
        <OrderDetail />
        {/* <Order /> */}
        {/* <Checkout /> */}
        {/* <Cart /> */}
        {/* <ProductDetails /> */}
        {/* <Product /> */}
        {/* <div>
        <MainCarousel />
        <div>
          <CardCarousel data={guitar} sectionName={"Guitar"} />
          <CardCarousel data={guitar} sectionName={"Mic"} />
          <CardCarousel data={guitar} sectionName={"Speakers"} />
          <CardCarousel data={guitar} sectionName={"Trufs"} />
          <CardCarousel data={guitar} sectionName={"Guitar"} />
        </div>
      </div> */}
        <div className={styles.vision} id="contact">
          <div className={styles.contact}>
            <div className={styles.whyus}>
              <div className={styles.dedicatedservice}>
                <h1>Store Information</h1>
                <p className={styles.details}>
                  New Bharat Music House
                  <br />
                  B-113, Lajpat Nagar Part 1
                  <br />
                  Near Defence Colony Flyover
                  <br />
                  New Delhi - 110024
                  <br />
                  Delhi
                  <br />
                  India
                </p>
              </div>
              <div className={styles.dedicatedservice}>
                <h1>Our Company</h1>
                <p className={styles.details}>
                  Terms and Conditions
                  <br />
                  Privacy Policy
                  <br />
                  Return & Refunds Policy
                  <br />
                  Contact us
                  <br />
                  Sitemap
                  <br />
                </p>
              </div>
              <div className={styles.dedicatedservice}>
                <h1>Contact us</h1>
                <p className={styles.details}>
                  Call us: 011 2981 0212
                  <br />
                  Email: bharat.support@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <h1 className={styles.details} id={styles.right}>
            © 2024 - New Bharat Music House, All rights reserved.
          </h1>
        </div>
      </main>
    </BrowserRouter>
  );
}
