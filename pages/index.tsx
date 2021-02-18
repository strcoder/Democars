import Head from 'next/head';
import Hero from '../components/Hero';
import Promotion from '../components/Promotion';
import NewProducts from '../components/NewProducts';
import FeaturedProducts from '../components/FeaturedProducts';
import ListServices from '../components/ListServices';
// import styles from '../sass/pages/Home.module.scss';
import Categories from '../components/Categories';
import Banner from '../components/Banner';
import Banner2 from '../components/Banner2';

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
      <Banner />
      <Categories />
      <FeaturedProducts />
      <Banner2 />
      <ListServices />
    </>
  );
}
