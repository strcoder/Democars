import Head from 'next/head';
import Hero from '../containers/Hero';
import Promotion from '../components/Promotion';
import NewProducts from '../containers/NewProducts';
import FeaturedProducts from '../containers/FeaturedProducts';
import ListServices from '../containers/ListServices';
// import styles from '../sass/pages/Home.module.scss';
import Categories from '../containers/Categories';
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
