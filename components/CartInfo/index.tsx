import { useState } from "react";
import Modal from "../Modal";
import ShippingModal from "../ShippingModal";
import styles from './cartInfo.module.scss';

const CartInfo = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handlerPayment = () => {
    if (Object.keys(user).length === 0) {
      setError(true);
      setShowModal(true);
    }
  };

  return (
    <div className={styles.container}>
      <p><strong>Informacion de pago</strong></p>
      <div className={styles.info}>
        <p title={Object.keys(user).length !== 0 ? `${user.name} ${user.lastname}` : 'Sin usuario'}>
          {Object.keys(user).length !== 0 ? `${user.name} ${user.lastname}` : 'Sin usuario'}
        </p>
        {/* <p title={Object.keys(user).length !== 0 ? user.email : 'Sin correo'}>
          {Object.keys(user).length !== 0 ? user.email : 'Sin correo'}
        </p> */}
        <p title={Object.keys(user).length !== 0 ? user.address : 'Sin datos de envio'}>
          {Object.keys(user).length !== 0 ? user.address : 'Sin datos de envio'}
        </p>
        <button type='button' className='btn-link-acent' onClick={() => setShowModal(true)}>
          Editar información
        </button>
        <p>Envio: $0 MXN</p>
        <p>Impuestos: $20 MXN</p>
        <p>Productos: $500 MXN</p>
        <p><strong>Total: $500 MXN</strong></p>
      </div>
      <div className={styles.method}>
        <button
          disabled={error}
          type='button'
          onClick={handlerPayment}
          className={!error ? 'btn-success' : 'btn-disabled'}
          title='Pago con tarjeta de credito'
        >
          {!error ? 'Proceder al pago' : 'Acualiza tus datos'}
        </button>
      </div>
      <ShippingModal
        showModal={showModal}
        setShowModal={setShowModal}
        user={user}
        setUser={setUser}
        setError={setError}
      />
    </div>
  );
};

export default CartInfo;