import Link from 'next/link';
import { TiHomeOutline } from 'react-icons/ti';
import { GiCartwheel } from 'react-icons/gi';
import { FaOpencart } from 'react-icons/fa';
import { ImEnter } from 'react-icons/im';
import { BiNews } from 'react-icons/bi';
import { useRouter } from 'next/router';

import styles from './bnb.module.scss';

const BotomNavigationBar = () => {
  const { route } = useRouter();
  return (
    <section className={styles.container}>
      <nav className={styles.nav}>
        <Link href='/products'>
          <a title='Products' className={`${styles.navLink} ${route === '/products' && styles.navLinkActive}`}>
            <GiCartwheel />
            <span>Products</span>
          </a>
        </Link>
        <Link href='/cart'>
          <a title='Cart' className={`${styles.navLink} ${route === '/cart' && styles.navLinkActive}`}>
            <FaOpencart />
            <span>Cart</span>
          </a>
        </Link>
        <Link href='/'>
          <a title='Home Page' className={`${styles.navLink} ${route === '/' && styles.navLinkActive}`}>
            <TiHomeOutline />
            <span>Home</span>
          </a>
        </Link>
        <Link href='/services'>
          <a title='Services' className={`${styles.navLink} ${route === '/services' && styles.navLinkActive}`}>
            <BiNews />
            <span>Services</span>
          </a>
        </Link>
        <Link href='/login'>
          <a title='Login' className={`${styles.navLink} ${route === '/login' && styles.navLinkActive}`}>
            <ImEnter />
            <span>Login</span>
          </a>
        </Link>
      </nav>
    </section>
  );
};


export default BotomNavigationBar;
