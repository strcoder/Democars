import Link from 'next/link';
import ProductCard from '../../components/ProductCard';
import styles from './featuredProducts.module.scss';

const FeaturedProducts = () => {
  return (
    <section className={styles.container}>
      <div>
        <h3>Productos destacados</h3>
      </div>
      <div className={styles.list}>
        <ProductCard name='Nombre' image='/product-default.png' />
        <ProductCard name='Nombre de ejemplo' image='/product-1.jpg' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='/product-2.jpg' />
        <ProductCard name='Nombre de ejemplo grande' image='rin-1.png' />
        <ProductCard name='Nombre' image='product-3.jpg' />
        <ProductCard name='Nombre' image='product-3.jpg' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
      </div>
      <div className={styles.footer}>
        <Link href='/products'>
          <a className='btn-link'>Ver más</a>
        </Link>
      </div>
    </section>
  );
}

export default FeaturedProducts;