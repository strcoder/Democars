import Head from 'next/head';
import Link from 'next/link';
import Cards from '../components/ExampleCards';
import Hero from '../components/Hero';
import Promotion from '../components/Promotion';
import NewProducts from '../components/NewProducts';
import FeaturedProducts from '../components/FeaturedProducts';
import ListServices from '../components/ListServices';
import styles from '../sass/pages/Home.module.scss';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <>
      <Head>
        <title>Democars</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      {/* <Cards /> */}
      <Promotion />
      <NewProducts />
      <div className={styles.banner}>
        <h4>Poner otra cosa chingona</h4>
        <Link href='/'>
          <a className={`${styles.bannerBtn} btn-success`}>Conocer</a>
        </Link>
        <figure className={styles.container_svg}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 840 768'
            className={styles.svg_img}
            preserveAspectRatio='none'
          >
            <defs>
              <linearGradient
                id='a'
                x1='714.13'
                x2='1185.51'
                y1='215.09'
                y2='797.18'
                gradientUnits='userSpaceOnUse'
              >
                <stop offset='0' stopColor='#084A94' />
                <stop offset='1' stopColor='#0B0C0D' />
              </linearGradient>
            </defs>
            <g data-name='Capa 2'>
              <g data-name='Capa 1'>
                <path
                  fill='#313840'
                  d='M0 0h910.31L604 432l21 89 740.06 170.58L1365 768H0V0z'
                />
                <path
                  fill='#084A94'
                  d='M1365 768L590.46 632.41C462.46 610 411 454.09 500.41 359.84L842 0h90L584 492l781.11 171.88'
                  opacity='.13'
                />
                <path
                  fill='url(#a)'
                  d='M932 0h-43L577 377.82c-57.22 69.34-20.1 174.71 68 192.85L1365 719l.11-55.12-685.3-164.63a51.33 51.33 0 0 1-30.61-78.54z'
                />
              </g>
            </g>
          </svg>
        </figure>
      </div>
      <Categories />
      <FeaturedProducts />
      <section className={styles.highway}>
        <div className={styles.background} />
        <figure className={styles.figure}>
          <img src='/highway.jpg' alt='highway' />
        </figure>
        <div className={styles.front}>
          <h5>Poner algo chingo aqui</h5>
          <Link href='/'>
            <a className='btn-success'>Instalaciones</a>
          </Link>
        </div>
      </section>
      <ListServices />
    </>
  );
}
