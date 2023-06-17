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
        <div className={styles.keywords_container}>
          <Fade direction="bottom" cascade={true} triggerOnce>
            <div className={styles.keyword}>
              <div className={styles.icon_container}>
                <FaHandshake size="5rem" color="#fb5310" />
              </div>
              <h3>Bizalom</h3>
              <div className={styles.decorator} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vero magnam sapiente explicabo, omnis, placeat ratione fuga
                magni sit nisi perspiciatis tempora repellat, totam dolor
                doloremque eaque molestias excepturi nobis?
              </p>
            </div>
            <div className={styles.keyword}>
              <div className={styles.icon_container}>
                <BiBadgeCheck size="5rem" color="#fb5310" />
              </div>
              <h3>Minőség</h3>
              <div className={styles.decorator} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vero magnam sapiente explicabo, omnis, placeat ratione fuga
                magni sit nisi perspiciatis tempora repellat, totam dolor
                doloremque eaque molestias excepturi nobis?
              </p>
            </div>
            <div className={styles.keyword}>
              <div className={styles.icon_container}>
                <TbTargetArrow size="5rem" color="#fb5310" />
              </div>
              <h3>Precizitás</h3>
              <div className={styles.decorator} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                vero magnam sapiente explicabo, omnis, placeat ratione fuga
                magni sit nisi perspiciatis tempora repellat, totam dolor
                doloremque eaque molestias excepturi nobis?
              </p>
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
