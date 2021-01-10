import React from 'react';
import { FaQuestion } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import styles from './card.module.scss';

const Card = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className={styles.listItem}>
      <figure className={styles.itemIcon}>
        <FaQuestion />
      </figure>
      <p><strong>{title}</strong></p>
      <p>{description}</p>
      <Link href='/'>
        <a className='btn-link-acent'>Read More</a>
      </Link>
    </div>
  );
};

const Cards = () => {
  return (
    <section className={styles.container}>
      <h2>We have the plan for you to give you best</h2>
      <div className={styles.list}>
        <Card title='Andres es bien verga' description='esto es una descripcion pendeja' />
        <Card title='Chairo me la pela' description='esto es una descripcion pendeja' />
        <Card title='El profe es una verga' description='esto es una descripcion pendeja' />
        <Card title='El profe es una verga' description='esto es una descripcion pendeja' />
      </div>
    </section>
  );
}

export default Cards;