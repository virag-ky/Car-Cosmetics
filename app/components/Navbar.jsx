"use client";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import MobileMenu from "./MobileMenu";
import { BiMenuAltRight } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import styles from "../styles/navbar/navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navStyles = clsx({
    [styles.navbar]: true,
    [styles.mobile_menu]: open,
  });

  const handleMenu = () => setOpen(!open);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className={navStyles}>
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <span>Pro Polír</span>
          <span className={styles.sub_logo}>Autókozmetika</span>
        </div>
        <ul className={styles.nav_list}>
          <li>
            <Link
              className={activeLink === "home" ? styles.active : ""}
              onClick={() => handleNavLinkClick("home")}
              href="/"
            >
              Fő oldal
            </Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link
              className={activeLink === "about" ? styles.active : ""}
              onClick={() => setActiveLink("about")}
              href="/about"
            >
              Rólunk
            </Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link
              className={activeLink === "prices" ? styles.active : ""}
              onClick={() => setActiveLink("prices")}
              href="/prices"
            >
              Árlista
            </Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link
              className={activeLink === "services" ? styles.active : ""}
              onClick={() => setActiveLink("services")}
              href="/services"
            >
              Szolgáltatások
            </Link>
          </li>
          <li>
            <div className={styles.divider}></div>
          </li>
          <li>
            <Link
              className={activeLink === "gallery" ? styles.active : ""}
              onClick={() => setActiveLink("gallery")}
              href="/gallery"
            >
              Galéria
            </Link>
          </li>
        </ul>
        {open ? (
          <IoClose
            onClick={handleMenu}
            size="2rem"
            className={styles.menu_button}
          />
        ) : (
          <BiMenuAltRight
            onClick={handleMenu}
            size="2rem"
            className={styles.menu_button}
          />
        )}
      </div>
      {open && <MobileMenu handleMenu={handleMenu} />}
    </nav>
  );
};

export default Navbar;
