import Head from 'next/head';
import Cards from '../components/ExampleCards';
import Hero from '../components/Hero';
import ListServices from '../components/ListServices';
import NewProducts from '../components/NewProducts';
import Promotion from '../components/Promotion';
import styles from '../sass/pages/Home.module.scss';

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
      <ListServices />
    </>
  )
}
