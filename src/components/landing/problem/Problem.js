import React from 'react'
import styles from './Problem.module.scss'

const Problem = () => {
  return (
    <section id={`${styles.problem}`} className={`grid`}>
      <div className={`${styles.titleSections}`}>
        <h2 class={`${styles.textCenter}`}>(Describir el problema)</h2>
      </div>
      <div className={`${styles.problem__cards} grid`}>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <img src="https://picsum.photos/300" alt="Logo" />
          <h3 className={styles.problem__card__title}>¿Qué es Paraffin?</h3>
          <p className={styles.problem__card__description}>
            Paraffin es una plataforma educativa que busca ayudar a los jóvenes a encontrar su vocación y a los profesionales a encontrar su próximo talento.
          </p>
        </div>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <img src="https://picsum.photos/300" alt="Logo" />
          <h3 className={styles.problem__card__title}>¿Qué es Paraffin?</h3>
          <p className={styles.problem__card__description}>
            Paraffin es una plataforma educativa que busca ayudar a los jóvenes a encontrar su vocación y a los profesionales a encontrar su próximo talento.
          </p>
        </div>
        <div className={`col-12 md:col-4 ${styles.problem__card}`}>
          <img src="https://picsum.photos/300" alt="Logo" />
          <h3 className={styles.problem__card__title}>¿Qué es Paraffin?</h3>
          <p className={styles.problem__card__description}>
            Paraffin es una plataforma educativa que busca ayudar a los jóvenes a encontrar su vocación y a los profesionales a encontrar su próximo talento.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Problem