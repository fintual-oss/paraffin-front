import React from 'react';
import styles from './Solution.module.scss';

const solution = () => {
  return (
    <section className={`${styles.solution} grid`}>
      <div className={`${styles.titleSections}`}>
        <h2 class={`${styles.textCenter} ${styles.fin_font}`}>
          ser.dev
        </h2>
      </div>
      <div className={`${styles.c} grid`}>
        <div class={`col-12 ${styles.solution__card_wrap}`}>
          <div className={`col-12 xl:col-10 ${styles.solution__card}`}>
            <img src="https://picsum.photos/400/200" alt="Logo" />
            <div className={styles.column_info_card_r}>
              <h3 className={styles.solution__card__title}>¿Qué es Paraffin?</h3>
              <p className={styles.solution__card__description}>
                Paraffin es una plataforma educativa que busca ayudar a los jóvenes a encontrar su vocación y a los profesionales a encontrar su próximo talento.
              </p>
            </div>
          </div>
          <div className={`col-12 xl:col-10 ${styles.solution__card}`}>
            <div className={`${styles.column_info_card_l} ${styles.textRight}`}>
              <h3 className={`${styles.solution__card__title}`}>¿Qué es Paraffin?</h3>
              <p className={styles.solution__card__description}>
                Paraffin es una plataforma educativa que busca ayudar a los jóvenes a encontrar su vocación y a los profesionales a encontrar su próximo talento.
              </p>
            </div>
            <img src="https://picsum.photos/400/200" alt="Logo" />
          </div>
          <div className={`col-12 xl:col-10 ${styles.solution__card}`}>
            <img src="https://picsum.photos/400/200" alt="Logo" />
            <div className={styles.column_info_card_r}>
              <h3 className={styles.solution__card__title}>¿Qué es Paraffin?</h3>
              <p className={styles.solution__card__description}>
                Paraffin es una plataforma educativa que busca ayudar a los jóvenes a encontrar su vocación y a los profesionales a encontrar su próximo talento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default solution;
