"use client";

import { Fade } from "react-awesome-reveal";
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
          <Fade damping={0.5} direction="left" triggerOnce cascade>
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
          </Fade>
        </div>
      </section>
      <section className={styles.services_section}>
        <h3>Szolgáltatások</h3>
        <div>
          <div className={styles.inner_services}>
            <h4>Belső Autókozmetika</h4>
            <ul>
              <li>Kárpittisztítás</li>
              <li>Bőrtisztítás és ápolás</li>
              <li>Gőzfertőtlenítés</li>
            </ul>
          </div>
          <div className={styles.outer_services}>
            <h4>Külső Autókozmetika</h4>
            <ul>
              <li>Prémium külső mosás</li>
              <li>Felni tisztítás</li>
              <li>Műanyag és gumi ápolás</li>
              <li>Fényszóró felújítás</li>
              <li>Autó polírozás</li>
              <li>Szélvédő és üveg felületek impregnálása</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
