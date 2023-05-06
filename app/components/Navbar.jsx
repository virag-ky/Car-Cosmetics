'use client';
import { useState } from 'react';
import clsx from 'clsx';
import MobileMenu from './MobileMenu';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import styles from '../styles/navbar/navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => setOpen(!open);

  const navStyles = clsx({
    [styles.navbar]: true,
    [styles.mobile_menu]: open,
  });

  return (
    <nav className={navStyles}>
      <div className={styles.nav_container}>
        <span>Car Detailing KFT</span>
        {open ? (
          <IoClose
            onClick={handleMenu}
            size="2rem"
            className={styles.menu_button}
          />
        ) : (
          <GiHamburgerMenu
            onClick={handleMenu}
            size="1.5rem"
            className={styles.menu_button}
          />
        )}
      </div>
      {open && <MobileMenu />}
    </nav>
  );
};

export default Navbar;
