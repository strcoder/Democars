import Link from 'next/link';
import styles from './productCard.module.scss';

const ProductCard = ({ name, image }: { name: string, image: string }) => {
  return (
    <Link href='/products'>
      <a className={styles.container}>
        <figure className={styles.figure}>
          <img src={image} alt={name} />
        </figure>
        <p>{name}</p>
        <div className={styles.body}>
          <p><strong>Price: $350</strong></p>
          <small>(10)</small>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
