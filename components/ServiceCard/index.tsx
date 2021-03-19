import Link from 'next/link';
import styles from './service.module.scss';

type ServiceCardProps = {
  active: boolean,
  route: string,
  title: string,
  description: string,
  icon: any,
};

const ServiceCard = ({ active, route, title, description, icon }: ServiceCardProps) => {
  return (
    <Link href={`${active ? '/services' : route}`}>
      <a className={`${styles.container} ${active ? styles.active : ''}`}>
        <figure className={styles.figure}>
          {icon}
        </figure>
        <p><strong>{title}</strong></p>
        <p>{description}</p>
      </a>
    </Link>
  );
}

export default ServiceCard;