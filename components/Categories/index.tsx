import CategorieCard from '../CategorieCard';
import styles from './categories.module.scss';
import { GiCartwheel, GiCarSeat } from 'react-icons/gi';
import { IoCarSport } from 'react-icons/io5';
import { SiAudiomack } from 'react-icons/si';

const Categories = () => {
  return (
    <section className={styles.container}>
      <h4>Categorias</h4>
      <div className={styles.list}>
        <CategorieCard title='Rines' icon={<GiCartwheel />} color='success' />
        <CategorieCard title='Audio' icon={<SiAudiomack />} color='tertiary' />
        <CategorieCard title='Body Kits' icon={<IoCarSport />} color='secondary' />
        <CategorieCard title='Accesorios' icon={<GiCarSeat />} color='warning' />
      </div>
    </section>
  );
}

export default Categories;