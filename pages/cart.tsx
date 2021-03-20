import { Fragment } from "react";
import CartCard from "../components/CartCard";
import CartInfo from "../components/CartInfo";
import styles from '../sass/pages/Cart.module.scss';

const cart = [
  {
    id: '1A',
    name: 'Product 1',
    description: 'Descripción de ejemplo',
    price: 500,
    count: 1,
    image: 'https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '2A',
    name: 'Product 2',
    description: 'Descripción de ejemplo',
    price: 500,
    count: 1,
    image: 'https://images.pexels.com/photos/6044781/pexels-photo-6044781.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: '3A',
    name: 'Product 3',
    description: 'Descripción de ejemplo con mucho texto',
    price: 500,
    count: 1,
    image: 'https://images.pexels.com/photos/6044800/pexels-photo-6044800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: '4A',
    name: 'Product 4',
    description: 'Descripción de ejemplo con mucho texto',
    price: 500,
    count: 1,
    image: '',
  },
  {
    id: '5A',
    name: 'Product 5',
    description: 'Descripción de ejemplo con mucho texto',
    price: 500,
    count: 1,
    image: '',
  },
];

const Cart = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>Carrito de compras</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.list}>
          {cart.length <= 0 && (
            <h1>Carrito vacio</h1>
          )}
          {cart.map((item) => (
            <Fragment key={item.id}>
              <CartCard product={item} />
            </Fragment>
          ))}
        </div>
        <div>
          <CartInfo />
        </div>
      </div>
    </section>
  );
}

export default Cart;