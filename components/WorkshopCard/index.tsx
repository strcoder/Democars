import { Fragment, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import styles from './workshopCard.module.scss';

const WorkshopCard = ({ imgs }: { imgs: string[] }) => {
  const [noImage, setNoImage] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          type='button'
          className={`${styles.before} btn-link-soft`}
          disabled={noImage <= 0}
          onClick={() => setNoImage(noImage - 1)}
        >
          <GoChevronLeft size={30} />
        </button>
        <figure className={styles.figure}>
          <img src={imgs[noImage]} alt='' />
        </figure>
        <button
          type='button'
          className={`${styles.after} btn-link-soft`}
          disabled={noImage >= imgs.length - 1}
          onClick={() => setNoImage(noImage + 1)}
        >
          <GoChevronRight size={30} />
        </button>
        {/* <div className={styles.dots}>
          {[0, 1, 2].map((item, index) => (
            <Fragment key={item}>
              {noImage === index && (
                <FaCircle />
              )}
              {noImage !== index && (
                <FaRegCircle />
              )}
            </Fragment>
          ))}
        </div> */}
      </div>

      <div className={styles.body}>
        <div className={styles.info}>
          <p><strong>Titulo</strong></p>
          <button type='button' className='btn-link'>
            <AiFillHeart size={25} />
            <span>(20)</span>
          </button>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium blanditiis facere distinctio molestias amet! molestias amet! molestias amet!</p>
      </div>
    </div>
  );
};

export default WorkshopCard;
