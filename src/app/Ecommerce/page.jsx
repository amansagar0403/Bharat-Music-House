"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerRoute from "@/Routers/CustomerRoute";
import HomePage from "../customer/components/Homepage/Homepage";
import { Provider } from "react-redux";
import store from "@/State/store";

export default function Home() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <BrowserRouter>
      <Provider store={store}>
        <main className={styles.main}>
          <Routes>
            <Route path="/*" element={<CustomerRoute />}></Route>
          </Routes>
        </main>
      </Provider>
    </BrowserRouter>
  );
}
