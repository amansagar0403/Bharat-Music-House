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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "@/app/customer/components/Homepage/Homepage";
import Cart from "@/app/customer/components/Cart/Cart";
import Product from "@/app/customer/components/Products/Product";
import Navigation from "@/app/customer/components/Navigation/Navigation";
import ProductDetails from "@/app/customer/components/ProductDetails/ProductDetails";
import Checkout from "@/app/customer/components/Checkout/Checkout";
import Order from "@/app/customer/components/Order/Order";
import OrderDetail from "@/app/customer/components/Order/OrderDetail";

const CustomerRoute = () => {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };
  return (
    <div>
      <div>
        {/* <nav className={styles.nav}>
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
        </div> */}
        <Navigation />
      </div>
      <HomePage />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:ProductId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetail />}></Route>
      </Routes>
      <div>
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
      </div>
    </div>
  );
};

export default CustomerRoute;
