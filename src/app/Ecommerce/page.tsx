"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerRoute from "@/Routers/CustomerRoute";
import HomePage from "../customer/components/Homepage/Homepage";

export default function Home() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <BrowserRouter>
      <main className={styles.main}>
        <Routes>
          <Route path="/*" element={<CustomerRoute />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
