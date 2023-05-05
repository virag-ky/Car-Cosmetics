'use client';
import { GiHamburgerMenu } from 'react-icons/gi';
import styles from '../styles/navbar/navbar.module.css';

const Navbar = () => {
  const handleMenu = () => {};

  return (
    <nav className={styles.navbar}>
      <span>Car Detailing KFT</span>
      <GiHamburgerMenu
        onClick={handleMenu}
        size="1.5rem"
        className={styles.mobile_menu}
      />
    </nav>
  );
};

export default Navbar;
