"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Whatdo from "./components/Whatdo";
import Whatdo2 from "./components/Whatdo2";
import Link from "next/link";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

export default function Home() {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
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
            <button onClick={() => scrollToSection("service")}>
              Our Services
            </button>
            <button onClick={() => scrollToSection("vision")}>About Us</button>
            <button onClick={() => scrollToSection("contact")}>
              Contact Us
            </button>
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
              <button onClick={() => scrollToSection("vision")}>
                About Us
              </button>
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
            <Link href={"/Ecommerce"}>
              <button className={styles.shop}>Shop Us</button>
            </Link>
          </div>
          <div className={styles.image}>
            <img src="musicalInstument.png" alt="" />
          </div>
        </div>
        <div className={styles.whatdo} id="service">
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
expertly curated gear and personalized service."
              imageSrc="studio.jpg" // Update the path accordingly
            />
            <Whatdo
              title="Professional Audio"
              description="Dive into a world of pristine sound and unparalleled 
performance with our range of professional audio 
equipment. From stage to studio, unleash your 
sonic potential with our top-tier gear 
and expert guidance"
              imageSrc="professional.webp" // Update the path accordingly
            />
            <Whatdo2
              title="Commercial Audio"
              description="Transform any space into an auditory masterpiece 
with our comprehensive range of install and 
commercial audio solutions. Elevate atmospheres and 
captivate audiences with our tailored sound systems 
and professional installations."
              imageSrc="commerical.jpg" // Update the path accordingly
            />
            <Whatdo
              title="Sound Proofing"
              description="Craft the perfect sonic environment with our cutting-edge 
soundproofing and acoustic treatment solutions. Enhance 
clarity, reduce noise, and immerse yourself in pure sound 
with our expertly designed acoustic treatments 
tailored to your space"
              imageSrc="proofing.webp" // Update the path accordingly
            />
            <Whatdo2
              title="Rentals"
              description="Elevate your event with our hassle-free rental service, 
providing top-quality sound equipment for any 
occasion. From concerts to conferences, ensure a 
seamless audio experience with our extensive rental 
inventory and expert support."
              imageSrc="rentals.avif" // Update the path accordingly
            />
          </div>
        </div>
        <div className={styles.vision} id="vision">
          <div className={styles.innervision}>
            <h1 className={styles.heading}>Our Vision</h1>
            <p className={styles.details}>
              At Bharat Music House, our vision is to empower creativity and
              innovation in the world of music and sound. We strive to be the
              leading provider of top-quality instruments, cutting-edge studio
              equipment, and comprehensive soundproofing solutions. By offering
              flexible rental options and expert guidance, we aim to support
              artists, producers, and enthusiasts at every stage of their
              journey. Our commitment is to create an environment where
              creativity thrives, enabling our clients to produce exceptional
              soundscapes that inspire and resonate with audiences worldwide.
            </p>
          </div>
        </div>
        <div className={styles.vision}>
          <div className={styles.innerWhyus}>
            <h1 className={styles.heading}>Why us?</h1>
            <div className={styles.whyus}>
              <div className={styles.dedicatedservie}>
                <img src="quality.png" alt="" />
                <h1>NO.1 Quality</h1>
              </div>
              <div className={styles.dedicatedservie}>
                <img src="support.png" alt="" />
                <h1>Dedicated Service</h1>
              </div>
              <div className={styles.dedicatedservie}>
                <img src="affordable.png" alt="" />
                <h1>Affordable</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.vision}>
          <div className={styles.innervision}>
            <h1 className={styles.heading}>Collaborate with us</h1>
            <p className={styles.details}>
              We are passionate about fostering a creative and innovative
              environment in the music and sound industry. We are seeking
              enthusiastic and talented individuals to join our team. By
              partnering with us, you'll become part of a dynamic workplace that
              values teamwork, creativity, and excellence. We offer a
              collaborative atmosphere where your skills and ideas can thrive.
              Join us in shaping the future of sound and be a part of something
              extraordinary
            </p>
            <button className={styles.shop}>Contact us!</button>
          </div>
        </div>
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
        <h1 className={styles.details} id={styles.right}>
          © 2024 - New Bharat Music House, All rights reserved.
        </h1>
      </div>
    </main>
  );
}
