"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import MobileMenu from "./MobileMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import styles from "../styles/navbar/navbar.module.css";

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
        <div className={styles.nav_logo}>
          <span>Pro Polír</span>
          <span className={styles.sub_logo}>Autókozmetika</span>
        </div>
        <ul className={styles.nav_list}>
          <li>
            <Link href="/">Fő oldal</Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link href="/about">Rólunk</Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link href="/prices">Árlista</Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link href="/services">Szolgáltatások</Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link href="/gallery">Galéria</Link>
          </li>
        </ul>
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
      {open && <MobileMenu handleMenu={handleMenu} />}
    </nav>
  );
};

export default Navbar;
