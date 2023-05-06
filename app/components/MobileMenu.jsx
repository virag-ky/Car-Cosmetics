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
        <ImHome size="1.2rem" />
        <Link onClick={handleMenu} href="/">
          Fő oldal
        </Link>
      </li>
      <li>
        <ImProfile size="1.2rem" />
        <Link onClick={handleMenu} href="/about">
          Rólunk
        </Link>
      </li>
      <li>
        <MdAttachMoney size="1.3rem" />
        <Link onClick={handleMenu} href="/prices">
          Árlista
        </Link>
      </li>
      <li>
        <MdMiscellaneousServices size="1.3rem" />
        <Link onClick={handleMenu} href="/services">
          Szolgáltatások
        </Link>
      </li>
      <li>
        <GrGallery size="1.2rem" />
        <Link onClick={handleMenu} href="/gallery">
          Galéria
        </Link>
      </li>
    </ul>
  );
};

export default MobileMenu;
