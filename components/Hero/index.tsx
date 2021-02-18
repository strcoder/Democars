import React from 'react';
// import { Link } from 'react-router-dom';
// import Image from './../../assets/Rin-Seat.png';
import Link from 'next/link';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titles}>
        <h1>Apasionados por los autos</h1>
        <h6>Encuentra los mejores accesorios y productos para tu auto</h6>
        <Link href='/products'>
          <a title='Si no es ahora será mañana' className='btn-success'>Comienza ahora</a>
        </Link>
      </div>
      <div className={styles.images}>
        <figure className={styles.figure}>
          <img src='/Rin-Seat.png' alt="Llanta" />
        </figure>
        <Link href='/products'>
          <a title='Si no es ahora será mañana' className='btn-success'>Comienza ahora</a>
        </Link>
      </div>
    </div>
  );
}

export default Hero;