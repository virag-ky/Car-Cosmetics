import Link from 'next/link';
import Logo from './components/Logo';
import { FaHandshake } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';
import { BiBadgeCheck } from 'react-icons/bi';
import styles from './styles/home-page/homePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Car Detailing KFT</h1>
        <Logo styles={styles} />
        <Link role="button" className={styles.button} href="/about">
          Rólunk
        </Link>
      </header>
      <section className={styles.intro_section}>
        <div className={styles.keywords_container}>
          <div className={styles.keyword}>
            <FaHandshake size="1rem" />
            <span>Bizalom</span>
          </div>
          <div className={styles.keyword}>
            <BiBadgeCheck />
            <span>Minőség</span>
          </div>
          <div className={styles.keyword}>
            <TbTargetArrow />
            <span>Precizitás</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
