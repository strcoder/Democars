import styles from './card.module.scss';

const CategorieCard = ({ title, icon, color = 'white' }: { title: string, icon: any, color: string }) => {
  return (
    <div className={`${styles.container} ${styles[color]}`}>
      <p><strong>{title}</strong></p>
      <figure className={styles.figure}>
        {icon}
      </figure>
    </div>
  );
}

export default CategorieCard;