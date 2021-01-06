import Head from 'next/head';
import Hero from '../components/Hero';
import ListServices from '../components/ListServices';
import styles from '../sass/pages/Home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Democars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <ListServices />
    </>
  )
}
