import Link from 'next/link';
import Image from 'next/image';
import Logo from './components/Logo';
import { FaHandshake } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';
import { BiBadgeCheck } from 'react-icons/bi';
import styles from './styles/home-page/homePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Pro Polír</h1>
        <h2>Car Detailing KFT</h2>
        <Logo styles={styles} />
        <Link role="button" className={styles.button} href="/about">
          Rólunk
        </Link>
      </header>
      <section className={styles.intro_section}>
        <div className={styles.keywords_container}>
          <div className={styles.keyword}>
            <FaHandshake size="1.8rem" color="#555555" />
            <span>Bizalom</span>
          </div>
          <div className={styles.keyword}>
            <BiBadgeCheck size="1.8rem" color="#555555" />
            <span>Minőség</span>
          </div>
          <div className={styles.keyword}>
            <TbTargetArrow size="1.8rem" color="#555555" />
            <span>Precizitás</span>
          </div>
        </div>
        <div className={styles.main_image_container}>
          <Image
            src="/images/main.png"
            alt="owners of the business with a red car"
            fill={true}
          />
        </div>
      </section>
    </main>
  );
};

export default HomePage;
