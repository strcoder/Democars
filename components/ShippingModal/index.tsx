import { useForm } from 'react-hook-form';
import Modal from '../Modal';
import styles from './shippingModal.module.scss';

const ShippingModal = ({ showModal, setShowModal, user, setUser, setError }: any) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    // console.log(data);
    setUser({ ...data });
    setError(false);
    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onClose={() => setShowModal(false)}
      // title='Datos de envio'
    >
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} form-control`}>
        <p><strong>Dotos basicos</strong></p>
        <label htmlFor='Name'>
          <p>Nombre</p>
          <input
            id='Name'
            name='name'
            type='text'
            defaultValue={user.name || ''}
            placeholder='Digita tu nombre'
            className='form-input'
            ref={register({ required: 'Nombre requerido' })}
          />
        </label>

        <label htmlFor='Lastname'>
          <p>Apellidos</p>
          <input
            id='Lastname'
            name='lastname'
            type='text'
            defaultValue={user.lastname || ''}
            placeholder='Digita tus apellidos'
            className='form-input'
            ref={register({ required: 'Apellidos requerido' })}
          />
        </label>

        <label htmlFor='Email'>
          <p>Correo electronico</p>
          <input
            id='Email'
            name='email'
            type='email'
            className='form-input'
            placeholder='Digita tu correo'
            defaultValue={user.email || ''}
            ref={register({ required: 'Correo requerido' })}
          />
        </label>

        <label htmlFor='Phone'>
          <p>Numero de telefono</p>
          <input
            id='Phone'
            name='phone'
            type='number'
            className='form-input'
            placeholder='01 02 03 04 05'
            defaultValue={user.phone || ''}
            ref={register({ required: 'Telefono requerido' })}
          />
        </label>

        <div className={styles.divider} />
        <p><strong>Datos de envio</strong></p>
        <label htmlFor='City'>
          <p>Ciudad</p>
          <input
            id='City'
            name='city'
            type='text'
            className='form-input'
            placeholder='CDMX'
            defaultValue={user.city || ''}
            ref={register({ required: 'Ciudad requerido' })}
          />
        </label>

        <label htmlFor='ZIP'>
          <p>Codigo postal</p>
          <input
            id='ZIP'
            name='zip'
            type='number'
            className='form-input'
            placeholder='01234'
            defaultValue={user.zip || ''}
            ref={register({ required: 'Codigo postal requerido' })}
          />
        </label>

        <label htmlFor='Address'>
          <p>Dirección</p>
          <input
            id='Address'
            name='address'
            type='text'
            className='form-input'
            placeholder='Digita en donde deseas recibir tu paquete'
            defaultValue={user.address || ''}
            ref={register({ required: 'Dirección requerido' })}
          />
        </label>

        <button
          type='button'
          className='form-button btn-outline-danger'
          onClick={() => setShowModal(false)}
        >
          Cancelar
        </button>
        <button type='submit' className='form-button btn-success'>
          Guardar
        </button>
      </form>
    </Modal>
  );
}

export default ShippingModal;
