"use client";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import Logo from "./components/Logo";
import { FaHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { BiBadgeCheck } from "react-icons/bi";
import styles from "./styles/home-page/homePage.module.css";

const HomePage = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h1>Pro Polír</h1>
          <h2>Autókozmetika</h2>
          <Logo styles={styles} />
        </div>
        <Link role="button" className={styles.button} href="/about">
          Rólunk
        </Link>
      </header>
      <section className={styles.intro_section}>
        <h3>Mi jellemez minket?</h3>
        <div className={styles.keywords_container}>
          <div className={styles.keyword}>
            <FaHandshake size="3rem" color="#555555" />
            <span>Bizalom</span>
          </div>
          <div className={styles.keyword}>
            <BiBadgeCheck size="3rem" color="#555555" />
            <span>Minőség</span>
          </div>
          <div className={styles.keyword}>
            <TbTargetArrow size="3rem" color="#555555" />
            <span>Precizitás</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
