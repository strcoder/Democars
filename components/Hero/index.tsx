import styles from './styles.module.scss';

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* <div className={''} /> */}
      <div className={styles.card}>
        <h2>Encuentra las mejores piezas para tu auto</h2>
        <form className={styles.form}>
          <label htmlFor='' className={styles.label}>
            <small className={styles.small}>¿Que deseas encontrar hoy?</small>
            <input type='text' name='' placeholder='Buscar...' className={styles.input} />
          </label>
          <button type='submit' className={`${styles.btn} btn`}>
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;
