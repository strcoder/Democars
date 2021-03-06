import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styles from '../sass/pages/Login.module.scss';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <section className={styles.container}>
      <h1>Bienvenido</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={`${styles.form} form-control`}>
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
          Iniciar sesión
        </button>

        <div className={styles.footer}>
          <Link href='/forgot'>
            <a className='btn-link-acent'>¿Olvidaste la contraseña?</a>
          </Link>

          <Link href='/register'>
            <a className='btn-link-success'>¿No tienes cuenta?</a>
          </Link>
        </div>
      </form>
    </section>
  );
}

export default Login;