import { BiCopyright } from 'react-icons/bi';
import Logo from './Logo';
import styles from '../styles/footer/footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <span>
        <BiCopyright size="1rem" /> {currentYear} Car Detailing KFT - Minden jog
        fenntartva
      </span>
      <Logo styles={styles} />
    </footer>
  );
};

export default Footer;
