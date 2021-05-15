import Link from 'next/link';
import { AiFillHeart } from 'react-icons/ai';
import { FaOpencart, FaShippingFast } from 'react-icons/fa';
import styles from './productCard.module.scss';

const ProductCard = ({ name, image }: { name: string, image: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button type='button' className='btn-link-acent'>
          <AiFillHeart size={30} />
        </button>
        <Link href='/products/12ab34'>
          <a className={styles.link}>
            <figure className={styles.figure}>
              <img src={image} alt={name} />
            </figure>
          </a>
        </Link>
      </div>
      <p><strong>{name}</strong></p>
      <div className={styles.body}>
        <div className={styles.info}>
          <p><strong>Price: $350</strong></p>
          <small>(10)</small>
        </div>
        <div className={styles.actions}>
          <button type='button' className='btn-acent' title='Comprar ahora'>
            <FaShippingFast size={20} />
            <span>Comprar ahora</span>
          </button>
          <button type='button' className='btn-success' title='Agregar al carrito'>
            <FaOpencart size={20} />
            <span>Agragar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
