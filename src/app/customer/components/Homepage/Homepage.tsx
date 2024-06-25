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
import MainCarousel from "../HomeCarousel/mainCarousel";
import CardCarousel from "../HomeCard/CardCarousel";
import { guitar } from "../HomeCard/guitar";
import { BrowserRouter } from "react-router-dom";

export default function HomePage() {
  const [panelVisible, setPanelVisible] = useState(false);

  const togglePanel = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <main className={styles.main}>
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
