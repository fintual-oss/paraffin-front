import React from 'react';
import styles from './Header.module.scss';
import { Button } from 'primereact/button';
import Link from 'next/link';
import useCurrentUser from '@hooks/useCurrentUser';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import logo from '@utils/images/fin-logo.svg';

const Header = () => {
  const currentUser = useCurrentUser();
  const curriculum_path = '/curriculums/1';
  return (
    <section id={styles.header}>
      <ul className={styles.circles}>
        {[...Array(10).keys()].map((i) => (
          <li key={i} />
        ))}
      </ul>
      <div className={`col-12 md:col-6 ${styles.header__content}`}>
        <Fade bottom>
          <h1 className={styles.header__title}>Tu ruta para ser.dev</h1>
        </Fade>
        <Fade bottom>
          <p className={styles.header__description}>
            ¿Sabes programar, pero te falta algo más para ser.dev? ¡Con nuestra
            guía y el apoyo de la comunidad lo lograrás!
          </p>
        </Fade>
        <div className="flex gap-4">
          <Fade bottom>
            <Link href={curriculum_path}>
              <Button
                label={`${
                  currentUser
                    ? 'Quiero seguir estudiando'
                    : 'Quiero entrar sin registrarme'
                }`}
                className={`${
                  currentUser
                    ? 'p-button p-component'
                    : 'p-button p-component p-button-text'
                }`}
              />
            </Link>
          </Fade>
          <Fade bottom>
            <Link href={`/users/sign_up?redirect_to=${curriculum_path}`}>
              <Button
                label="Quiero registrarme en ser.dev"
                disabled={currentUser}
                className={`${currentUser ? 'hidden' : 'p-button p-component'}`}
              />
            </Link>
          </Fade>
        </div>
      </div>
      <div className={`col-12 md:col-6 xl:col-3 ${styles.header__image}`}>
        <Image src={logo} alt="Logo" id={styles.header__logo} />
      </div>
    </section>
  );
};

export default Header;
