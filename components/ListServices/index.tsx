import { GiCarWheel, GiSoundWaves, GiPaintBucket } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa'
import ServiceCard from "../ServiceCard";
import styles from './services.module.scss';

const ListServices = () => {
  return (
    <section className={styles.container}>
      <h4>Servicios</h4>
      <ServiceCard
        route='/instalacion'
        title='Instalaciones'
        description='Consulta los servicios de instalacion disponibles'
        icon={<FaTools />}
      />
      <ServiceCard
        route='/pintura'
        title='Pintura'
        description='Hojalateria y pintura de tu automovil'
        icon={<GiPaintBucket />}
      />
      <ServiceCard
        route='/products'
        title='Productos'
        description='Encuentra los mejores productos para tu automovil'
        icon={<GiCarWheel />}
      />
      <ServiceCard
        route='/audio'
        title='Audio'
        description='Instalacion de audio para tu automovil'
        icon={<GiSoundWaves />}
      />
      {/* <ServiceCard />
      <ServiceCard />
      <ServiceCard /> */}
    </section>
  );
}

export default ListServices;