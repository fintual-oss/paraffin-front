import React from 'react';
import styles from './Header.module.scss';

import { Button } from 'primereact/button';
import Image from 'next/image';
// import developer_header from '@utils/images/developer_header.png';
import fin_logo from '@utils/images/fin_logo.png'

const Header = () => {
  return (
    <section id={styles.header}>
      <ul className={styles.circles}>
        {[...Array(10)].map((i) => (
          <li key={i} />
        ))}
      </ul>
      <div className={`col-12 md:col-6 ${styles.header__content}`}>
        <h1 className={styles.header__title}>Tu ruta para ser.dev</h1>
        <p className={styles.header__description}>
        Sabes programar pero te falta algo más para ser.dev, con nuestra guía y el apoyo de la comunidad lo lograrás.
        </p>
        <Button label="Quiero registrarme en Paraffin" />
      </div>
      <div className={`col-12 md:col-6 xl:col-3 ${styles.header__image}`}>
        <Image src={fin_logo} alt="Logo" id={styles.header__logo} />
      </div>
    </section>
  );
};

export default Header;
