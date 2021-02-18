import Link from "next/link";
import styles from './Banner2.module.scss';

const Banner2 = () => {
  return (
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
  );
};

export default Banner2;
