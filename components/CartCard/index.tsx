import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import styles from './cartCard.module.scss';

const CartCard = ({ product }: any) => {
  return (
    <div className={styles.container}>
      <button type='button' className='btn-link'>
        <FaTrash size={18} />
      </button>
      <figure className={styles.image}>
        <img src={product.image || '/product-default.png'} alt='' />
      </figure>
      <div className={styles.contain}>
        <p><strong>{product.name}</strong></p>
        <p>{product.description}</p>
        <p>{`$${product.price} MXN`}</p>
        <div className={styles.actions}>
          <button
            disabled={product.count <= 1}
            type='button'
            className='btn-outline-danger'
            onClick={() => {}}
          >
            <FaMinus />
          </button>
          <p>{product.count}</p>
          <button
            type='button'
            className='btn-outline-success'
            onClick={() => {}}
          >
            <FaPlus />
          </button>
          <p>{`Total: $${product.price * product.count}`}</p>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
