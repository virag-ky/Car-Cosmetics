import Link from 'next/link';

const MobileMenu = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Fő oldal</Link>
        </li>
        <li>
          <Link href="/about">Rólunk</Link>
        </li>
        <li>
          <Link href="/prices">Árlista</Link>
        </li>
        <li>
          <Link href="/services">Szolgáltatások</Link>
        </li>
        <li>
          <Link href="/gallery">Galéria</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
