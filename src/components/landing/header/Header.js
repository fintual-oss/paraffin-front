import React from 'react';
import styles from './Header.module.scss';
import { Button } from 'primereact/button';
import Image from 'next/image';
import Flip from 'react-reveal/Flip';
import logo from '@utils/images/fin-logo.svg';

const Header = () => {
  return (
    <section id={styles.header}>
      <ul className={styles.circles}>
        {[...Array(10)].map((i) => (
          <li key={i} />
        ))}
      </ul>
      <div className={`col-12 md:col-6 ${styles.header__content}`}>
        <Flip bottom>
          <h1 className={styles.header__title}>Tu ruta para ser.dev</h1>
        </Flip>
        <Flip bottom>
          <p className={styles.header__description}>
          ¿Sabes programar pero te falta algo más para Ser.dev? ¡Con nuestra guía y el apoyo de la comunidad lo lograrás!
          </p>
        </Flip>
        <Flip bottom>
          <Button label="Quiero registrarme en Ser.dev" />
        </Flip>
      </div>
      <div className={`col-12 md:col-6 xl:col-3 ${styles.header__image}`}>
        <Image src={logo} alt="Logo" id={styles.header__logo} />
      </div>
    </section>
  );
};

export default Header;
