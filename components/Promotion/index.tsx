import Link from 'next/link';
import styles from './promotion.module.scss';

const Promotion = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h4>Promociones</h4>
        <Link href='/products'>
          <a className='btn-link-acent'>Ver todas</a>
        </Link>
      </div>
      <Link href='/products'>
        <a className={styles.link}>
          <figure className={styles.figure}>
            <img src='/product-default.png' alt='Promotion' />
          </figure>
          <div className={styles.info}>
            <p><strong>Descuento 20%</strong></p>
            <p>Finaliza en: 30:00 min</p>
            <p><strong>Precio: $200 MX</strong></p>
            <p>Precio de lista: $250 MX</p>
          </div>
          <div>
            <p>Producto de ejemplo (10)</p>
          </div>
        </a>
      </Link>
    </section>
  );
}

export default Promotion;