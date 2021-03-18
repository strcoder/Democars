import { useState } from 'react';
import { RiMenu4Line } from 'react-icons/ri';
import { FaOpencart, FaChevronRight } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { TiHomeOutline } from 'react-icons/ti'
import Link from 'next/link';
import styles from './header.module.scss';

const Header = () => {
  const [sidenav, setSidenav] = useState(false);
  return (
    <header className={styles.container}>
      <button
        type='button'
        className={`${styles.sidenavBackground}  ${sidenav && styles.sidenavBackgroundActive}`}
        onClick={() => setSidenav(false)}
      />
      <section className={`${styles.sidenav} ${sidenav && styles.sidenavActive}`}>
        <button type='button' className={styles.btnLink} onClick={() => setSidenav(false)}>
          <IoIosCloseCircleOutline />
        </button>
        <nav className={styles.nav}>
          <Link href='/'>
              <a>
                <TiHomeOutline />
                <span>Home</span>
                <FaChevronRight />
              </a>
          </Link>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/'>
            <a>Home</a>
          </Link>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </nav>
      </section>


      <button type='button' className={`${styles.menuButton} btn-link`} onClick={() => setSidenav(true)}>
        <RiMenu4Line />
      </button>
      <Link href='/'>
        <a className={styles.logo}>
          <img src='/logo2.png' alt='Logo' />
        </a>
      </Link>
    </header>
  );
};

export default Header;
