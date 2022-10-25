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
            Hoy en día puedes encontrar todo lo que necesitas en internet. Si tu intención es convertirte en dev dispones de una gran cantidad de recursos en línea. ¿Pero cómo podrás determinar si la información que encuentres en verdad es valiosa y será útil para tu formación? E incluso, ¿cómo puedes saber por dónde empezar a buscar?
            </p>
          </div>
        </div>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <Image src={IMAGES.humaaan_1} alt="Logo" />
          <div class={styles.problem__card_wrap_info}>
            <h3 className={styles.problem__card__title}>Parálisis por análisis</h3>
            <p className={styles.problem__card__description}>
            ¿Alguna vez te ha pasado que pasas horas decidiendo qué película o serie ver, y al final no ves ninguna? En un mundo donde tenemos tanta información al alcance de nuestras manos, llegar a ser difícil decidir con cuál quedarnos. Este exceso de información puede paralizarnos y hasta hacer que dejemos nuestro estudio de lado.
            </p>
          </div>
        </div>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <Image src={IMAGES.humaaans_2} alt="Logo" />
          <div class={styles.problem__card_wrap_info}>
            <h3 className={styles.problem__card__title}>¿Con qué continúo?</h3>
            <p className={styles.problem__card__description}>
            Podría pasar que encuentres un recurso excelente y lo sigas de principio a fin, pero probablemente al terminarlo no sabrás hacia dónde continuar. Internet está lleno de recursos sin conexión que no te marcan un camino que seguir. ¿Deberías seguir con el mismo tema en un nivel más avanzado? ¿O deberías empezar con un tema nuevo?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
