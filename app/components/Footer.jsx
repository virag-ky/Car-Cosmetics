import Image from 'next/image';
import { BiCopyright } from 'react-icons/bi';
import styles from '../styles/footer/footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>
        <BiCopyright size="1rem" /> {currentYear} Car Detailing KFT - Minden jog
        fenntartva
      </span>
      <div className={styles.logo_container}>
        <div className={styles.image} id={styles.car_logo}>
          <Image src="/logo/logo_car.png" alt="car logo" fill={true} />
        </div>
        <div className={styles.image} id={styles.text_logo}>
          <Image src="/logo/logo_text.png" alt="text logo" fill={true} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
