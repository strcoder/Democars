import { GiCarWheel, GiSoundWaves, GiPaintBucket } from 'react-icons/gi';
import { FaTools } from 'react-icons/fa'
import ServiceCard from "../../components/ServiceCard";
import styles from './services.module.scss';

const ListServices = ({ active }: { active?: string }) => {
  return (
    <section className={styles.container}>
      <h4>Servicios</h4>
      <div className={styles.list}>
        <ServiceCard
          active={active === 'instalacion'}
          route='/services/instalacion'
          title='Instalaciones'
          description='Consulta los servicios de instalacion disponibles'
          icon={<FaTools />}
        />
        <ServiceCard
          active={active === 'pintura'}
          route='/services/pintura'
          title='Pintura'
          description='Hojalateria y pintura de tu automovil'
          icon={<GiPaintBucket />}
        />
        <ServiceCard
          active={active === 'productos'}
          route='/services/productos'
          title='Productos'
          description='Encuentra los mejores productos para tu automovil'
          icon={<GiCarWheel />}
        />
        <ServiceCard
          active={active === 'audio'}
          route='/services/audio'
          title='Audio'
          description='Instalacion de audio para tu automovil'
          icon={<GiSoundWaves />}
        />
        {/* <ServiceCard />
        <ServiceCard />
        <ServiceCard /> */}
      </div>
    </section>
  );
}

export default ListServices;