import WorkshopCard from "../../components/WorkshopCard"
import styles from './workshop.module.scss';

const imgs1 = [
  'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
];

const imgs2 = [
  'https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const imgs3 = [
  'https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/474/black-and-white-car-vehicle-vintage.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const Workshop = ({ title } : { title?: string }) => {
  return (
    <section className={styles.container}>
      <h1>{title || 'Ultimos trabajos'}</h1>
      <div className={styles.list}>
        <WorkshopCard imgs={imgs1} />
        <WorkshopCard imgs={imgs2} />
        <WorkshopCard imgs={imgs3} />
      </div>
    </section>
  );
};

export default Workshop;
