"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Whatdo from "./components/Whatdo";
import Whatdo2 from "./components/Whatdo2";

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
        <div className={styles.whatdo}>
          <h1 className={styles.heading}>What we do?</h1>
          <div className={styles.services}>
            <Whatdo
              title="Musical Instruments"
              description="Experience the harmony of convenience and quality with our personalized services. From guitar to drums, find your perfect instrument that matches you."
              imageSrc="instument.jpg" // Update the path accordingly
            />
            <Whatdo2
              title="Studio Equipment"
              description="Step into the realm of sonic excellence with our 
premier selection of studio equipment. Elevate 
your sound production to new heights with our 
expertly curated gear and personalized service."
              imageSrc="studio.jpg" // Update the path accordingly
            />
            <Whatdo
              title="Professional Audio"
              description="Dive into a world of pristine sound and unparalleled 
performance with our range of professional audio 
equipment. From stage to studio, unleash your 
sonic potential with our top-tier gear 
and expert guidance"
              imageSrc="professional.webp" // Update the path accordingly
            />
            <Whatdo2
              title="Commercial Audio"
              description="Transform any space into an auditory masterpiece 
with our comprehensive range of install and 
commercial audio solutions. Elevate atmospheres and 
captivate audiences with our tailored sound systems 
and professional installations."
              imageSrc="commerical.jpg" // Update the path accordingly
            />
            <Whatdo
              title="Sound Proofing"
              description="Craft the perfect sonic environment with our cutting-edge 
soundproofing and acoustic treatment solutions. Enhance 
clarity, reduce noise, and immerse yourself in pure sound 
with our expertly designed acoustic treatments 
tailored to your space"
              imageSrc="proofing.webp" // Update the path accordingly
            />
            <Whatdo2
              title="Rentals"
              description="Elevate your event with our hassle-free rental service, 
providing top-quality sound equipment for any 
occasion. From concerts to conferences, ensure a 
seamless audio experience with our extensive rental 
inventory and expert support."
              imageSrc="rentals.avif" // Update the path accordingly
            />
          </div>
        </div>
        <div className="vision"></div>
      </div>
    </main>
  );
}
