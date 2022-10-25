import React from 'react';
import IMAGES from '@components/images/images';
import styles from './Problem.module.scss';
import Image from 'next/image';

const Problem = () => {
  return (
    <section id={`${styles.problem}`} className={`grid`}>
      <div className={`${styles.titleSections}`}>
        <h2 class={`${styles.textCenter}`}>¿Por dónde comienzo mi estudio para ser.dev?</h2>
      </div>
      <div className={`${styles.problem__cards} grid`}>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <Image src={IMAGES.humaaans_3} alt="Logo" />
          <div class={styles.problem__card_wrap_info}>
            <h3 className={styles.problem__card__title}>Todo está en Internet</h3>
            <p className={styles.problem__card__description}>
            Para ser.dev puedes conseguir todo lo que necesitas en Internet, solo necesitas buscar bien pero, ¿Cómo saber que esa información te servirá?
            </p>
          </div>
        </div>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <Image src={IMAGES.humaaan_1} alt="Logo" />
          <div class={styles.problem__card_wrap_info}>
            <h3 className={styles.problem__card__title}>Parálisis por análisis</h3>
            <p className={styles.problem__card__description}>
              Tenemos al alcance de nuestras manos, toda la información necesaria pero esto nos puede paralizar y dejar nuestro estudio por la sobre-información.
            </p>
          </div>
        </div>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <Image src={IMAGES.humaaans_2} alt="Logo" />
          <div class={styles.problem__card_wrap_info}>
            <h3 className={styles.problem__card__title}>¿Con qué continúo?</h3>
            <p className={styles.problem__card__description}>
              Puedes encontrar un recurso excelente y al terminarlo probablemente no sabrás como continuar. Internet está lleno de recursos sin conexión.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
