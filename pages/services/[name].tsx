import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ListServices from '../../containers/ListServices';
import Workshop from '../../containers/Workshop';
import styles from '../../sass/pages/Service.module.scss';

const Service = () => {
  const { query } = useRouter();
  const { register, handleSubmit, watch } = useForm();
  const nameWatch = watch('name', '');
  const emailWatch = watch('email', '');
  const reasonWatch = watch('reason', '');
  const commentsWatch = watch('comments', '');
  // const [error, setError] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <section>
      <ListServices />
      <main className={styles.main}>
        <h1>Agendar una cita</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} form-control`}>
          <label htmlFor='Name'>
            <p>Nombre</p>
            <input
              id='Name'
              name='name'
              type='text'
              className='form-input'
              placeholder='Digita tu nombre'
              ref={register({ required: 'Nombre requerido' })}
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
              ref={register({ required: 'Email requerido' })}
            />
          </label>
          <label htmlFor='Service'>
            <p>Servicio</p>
            <input
              disabled
              id='Service'
              name='service'
              type='text'
              value={query.name}
              className='form-input'
              ref={register({ required: 'Email requerido' })}
            />
          </label>
          <label htmlFor='Reason'>
            <p>Selecciona el motivo de la cita</p>
            <select
              name='reason'
              id='Reason'
              className='form-select'
              ref={register()}
            >
              <option value='default'>Motivo de la cita</option>
              <option value='reason-1'>Motivo 1</option>
              <option value='reason-2'>Motivo 2</option>
              <option value='reason-3'>Motivo 3</option>
              <option value='other'>Otro</option>
            </select>
          </label>
          <label htmlFor='Comments'>
            <p>Comentarios</p>
            <textarea
              id='Comments'
              name='comments'
              // cols={30}
              rows={5}
              className='form-textarea'
              placeholder='Dejame tus comentarios a una descripcion más detallada del servicio que deseas'
              ref={register()}
            />
          </label>
          <button type='submit' className='btn-success form-button'>Agendar cita</button>
        </form>
        <div className={styles.info}>
          <h5>Datos de la cita</h5>
          <p><strong>Nombre: </strong>{nameWatch || 'Digita tu nombre'}</p>
          <p><strong>Correo: </strong>{emailWatch || 'Digita tu correo '}</p>
          <p><strong>Servicio: </strong>{query.name}</p>
          <p><strong>Motivo: </strong>{reasonWatch !== 'default' ? reasonWatch : 'Selecciona el motivo'}</p>
          <p><strong>Comentarios: </strong>{commentsWatch || 'Sin comentarios'}</p>
          <p><strong>Costo aproximado del servicio: </strong>{`$30`}</p>
        </div>
      </main>
      <Workshop title={`Trabajos de ${query.name}`} />
    </section>
  );
};

export default Service;
