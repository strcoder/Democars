import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { IoReturnUpBack } from 'react-icons/io5';
import ProductCard from '../../components/ProductCard';
import styles from '../../sass/pages/Product.module.scss';

const ReviewCard = () => {
  return (
    <div className={styles.reviewContainer}>
      <div className={styles.reviewHeader}>
        <figure className={styles.reviewFigure}>
          <img src='https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' />
        </figure>
        <p><strong>Username</strong></p>
        <p>Estrellitas</p>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugit praesentium iste ducimus nulla, dolorem beatae autem eius illo qui nostrum doloremque ipsum cumque libero recusandae. Vero, mollitia ullam. Alias.</p>
      </div>
    </div>
  );
}

const Product = () => {
  const router = useRouter();
  const { query } = router;
  return (
    <section className={styles.container}>
      <div className={styles.back}>
        <button
          type='button'
          className='btn-link-secondary'
          onClick={() => router.back()}
        >
          <IoReturnUpBack size={20} />
          <span>Atras</span>
        </button>
      </div>
      <div className={styles.header}>
        <figure className={styles.figure}>
          <img src='/product-3.jpg' alt='' />
        </figure>
      </div>

      <div className={styles.info}>
        <div className={styles.infoHeader}>
          <h1>Product name</h1>
          <p>(10)</p>
        </div>
        <p>Estrellitas</p>
        <p><strong>$450.00 mxn</strong></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eveniet adipisci ab accusamus corporis alias assumenda doloremque praesentium voluptatibus quas non impedit earum quisquam, facere temporibus voluptas, excepturi iste suscipit?</p>
        <div className={styles.actions}>
          <button type='button' className='btn-outline-acent'>Comprar ahora</button>
          <button type='button' className='btn-success'>Agregar al carrito</button>
        </div>
        <div className={styles.categories}>
          <p><strong>Categorias:</strong></p>
          <Link href='/products'>
            <a className='btn-link-gray'>Accesorios</a>
          </Link>
          <Link href='/products'>
            <a className='btn-link-gray'>Otra cosa</a>
          </Link>
        </div>
      </div>

      <div className={styles.reviews}>
        <p><strong>Reseñas</strong></p>
        <div className={styles.list}>
          {[0, 1, 2, 3].map((item) => (
            <Fragment key={item}>
              <ReviewCard />
            </Fragment>
          ))}
        </div>
        <div className={styles.form}>
          <p><strong>Deja tu comentario</strong></p>
          <form className='form-control'>
            <label htmlFor='Comment'>
              <p>Comentario</p>
              <textarea
                rows={5}
                id='Comment'
                name='comment'
                className='form-textarea'
                placeholder='Deja tu comentario del producto'
              />
            </label>
            <button type='submit' className='form-button btn'>
              Guardar comentario
            </button>
          </form>
        </div>
      </div>

      <div className={styles.related}>
        <p><strong>Productos relacionados</strong></p>
        {[10, 11, 12, 13].map((item) => (
          <Fragment key={item}>
            <ProductCard name='Nombre' image='/product-default.png' />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

export default Product;