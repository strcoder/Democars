import Link from 'next/link';
import styles from './service.module.scss';

const ServiceCard = ({ route, title, description, icon }: any) => {
  return (
    <Link href={`${route}`}>
      <a className={styles.container}>
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