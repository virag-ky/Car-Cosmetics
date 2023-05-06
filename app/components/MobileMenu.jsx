import Link from 'next/link';
import { ImHome } from 'react-icons/im';
import { ImProfile } from 'react-icons/im';
import { MdAttachMoney } from 'react-icons/md';
import { MdMiscellaneousServices } from 'react-icons/md';
import { GrGallery } from 'react-icons/gr';
import styles from '../styles/navbar/navbar.module.css';

const MobileMenu = ({ handleMenu }) => {
  return (
    <ul className={styles.menu_list}>
      <li>
        <Link onClick={handleMenu} href="/">
          <ImHome size="1.2rem" />
          Fő oldal
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} href="/about">
          <ImProfile size="1.2rem" />
          Rólunk
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} href="/prices">
          <MdAttachMoney size="1.3rem" />
          Árlista
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} href="/services">
          <MdMiscellaneousServices size="1.3rem" />
          Szolgáltatások
        </Link>
      </li>
      <li>
        <Link onClick={handleMenu} href="/gallery">
          <GrGallery size="1.2rem" />
          Galéria
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
