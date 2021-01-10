import { GiCarWheel, GiSoundWaves, GiPaintBucket } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa'
import ServiceCard from "../ServiceCard";
import styles from './services.module.scss';

const ListServices = () => {
  return (
    <section className={styles.container}>
      <ServiceCard
        route='/products'
        title='Productos'
        description='Encuentra los mejores productos para tu automovil'
        icon={<GiCarWheel />}
      />
      <ServiceCard
        route='/audio'
        title='Audio'
        description='Encuentra el mejor audio para tu automovil'
        icon={<GiSoundWaves />}
      />
      <ServiceCard
        route='/pintura'
        title='Pintura'
        description='Pintamos tu coche a domicilio'
        icon={<GiPaintBucket />}
      />
      <ServiceCard
        route='/instalacion'
        title='Instalaciones'
        description='Consulta los servicios de instalacion disponibles'
        icon={<FaTools />}
      />
      {/* <ServiceCard />
      <ServiceCard />
      <ServiceCard /> */}
    </section>
  );
}

export default ListServices;