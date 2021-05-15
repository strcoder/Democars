import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './modal.module.scss';

const Modal = ({ show, onClose, children, title }: any) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modal = document.getElementById("modal-root");

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <section className={styles.modal}>
      <div className={styles.container}>
        <button
          type='button'
          onClick={handleCloseClick}
          className='btn-link-danger'
          title='Cerrar modal'
        >
          <FaTimes size={20} />
        </button>
        <main className={styles.main}>
          {title && (
            <h5>{title}</h5>
          )}
          {children}
        </main>
      </div>
    </section>
  ) : null;

  if (isBrowser &&  modal) {
    return ReactDOM.createPortal(
      modalContent,
      modal
    );
  } else {
    return null;
  }
};

export default Modal;
