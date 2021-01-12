// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import { useStateValue } from '../../../Context';
import styles from './footer.module.scss';

const Footer = () => {
  // const { institute } = useStateValue();
  return (
    <section className={styles.container}>
      <div className={styles.information}>
        <h2>Democars</h2>
        {/* <p>{institute?.slogan}</p> */}
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, veniam nemo. Maxime, optio eveniet! Aperiam eaque facilis iure, ipsa similique minus obcaecati ullam quod, numquam error nemo, ut culpa amet.</p>
        <nav className={styles.socialMedia}>
          <Link href='/'>
            <a className='btn-link-facebook'><FaFacebookF size={30} /></a>
          </Link>
          <Link href='/'>
            <a className='btn-link-instagram'><FaInstagram size={30} /></a>
          </Link>
          <Link href='/'>
            <a className='btn-link-twitter'><FaTwitter size={30} /></a>
          </Link>
          <Link href='/'>
            <a className='btn-link-linkedin'><FaLinkedin size={30} /></a>
          </Link>
        </nav>
        <Link href='/'><a>All copyright reserved @democars 2021</a></Link>
      </div>
      {/* <div className='Footer__body'>
        <div className='Footer__body--navigation'>
          <p><strong>Products</strong></p>
          <nav>
            <Link href='/'>Schools</Link>
            <Link href='/'>Areas</Link>
            <Link href='/'>Levels</Link>
            <Link href='/'>Courses</Link>
            <Link href='/'>Platforms</Link>
          </nav>
        </div>
        <div className='Footer__body--about'>
          <p><strong>About</strong></p>
          <nav>
            <Link href='/'>Blog</Link>
            <Link href='/'>Jobs</Link>
            <Link href='/'>Support</Link>
            <Link href='/'>Services</Link>
            <Link href='/'>Partners</Link>
          </nav>
        </div>
        <div className='Footer__body--product'>
          <p><strong>Links</strong></p>
          <nav>
            <Link href='/'>Videos</Link>
            <Link href='/'>Images</Link>
            <Link href='/'>Registrate</Link>
            <Link href='/'>Iniciar Sesión</Link>
            <Link href='/'>Documentation</Link>
          </nav>
        </div>
      </div> */}
    </section>
  );
};

export default Footer;
