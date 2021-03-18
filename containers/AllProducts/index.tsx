import { useState } from "react";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";
import styles from './allProducts.module.scss';

const AllProducts = () => {
  const [page, setPage] = useState(0);
  return (
    <section className={styles.container}>
      <div>
        <h3>Todos los productos</h3>
      </div>
      <div className={styles.list}>
        <ProductCard name='Nombre' image='/product-default.png' />
        <ProductCard name='Nombre de ejemplo' image='/product-1.jpg' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='/product-2.jpg' />
        <ProductCard name='Nombre de ejemplo grande' image='rin-1.png' />
        <ProductCard name='Nombre' image='product-3.jpg' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
        <ProductCard name='Nombre de ejemplo bien pinche grandote' image='product-default.png' />
      </div>
      <div className={styles.footer}>
        <Pagination length={100} page={page} setPage={setPage} />
      </div>
    </section>
  );
}

export default AllProducts;