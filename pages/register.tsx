import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styles from '../sass/pages/Register.module.scss';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <section className={styles.container}>
      <h1>Registrate</h1>
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
        <label htmlFor='Lastname'>
          <p>Apellidos</p>
          <input
            id='Lastname'
            name='lastname'
            type='text'
            className='form-input'
            placeholder='Digita tus apellidos'
            ref={register({ required: 'Apellidos requeridos' })}
          />
        </label>
        <label htmlFor='Email'>
          <p>Correo</p>
          <input
            id='Email'
            name='email'
            type='email'
            className='form-input'
            placeholder='Correo electronico'
            ref={register({ required: 'Correo requerido' })}
          />
        </label>

        <label htmlFor='Password' className='form-control'>
          <p>Contraseña</p>
          <input
            id='Password'
            name='password'
            type='password'
            className='form-input'
            placeholder='Digite su contraseña'
            ref={register({ required: 'Contraseña requerida' })}
          />
        </label>

        <button type='submit' className='form-button btn-success'>
          Registrate
        </button>

        <div className={styles.terms}>
          <p>Al dar click al boton de registro acepta los </p>
          <Link href='/terms'>
            <a className='btn-link-acent'>Terminos y condiciones</a>
          </Link>
        </div>

        <div className={styles.footer}>
          <Link href='/login'>
            <a className='btn-link-success'>¿Ya tienes cuenta?</a>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Register;