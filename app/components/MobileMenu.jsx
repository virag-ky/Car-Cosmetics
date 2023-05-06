import Link from 'next/link';

const MobileMenu = ({ handleMenu }) => {
  return (
    <div>
      <ul>
        <li>
          <Link onClick={handleMenu} href="/">
            Fő oldal
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} href="/about">
            Rólunk
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} href="/prices">
            Árlista
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} href="/services">
            Szolgáltatások
          </Link>
        </li>
        <li>
          <Link onClick={handleMenu} href="/gallery">
            Galéria
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
