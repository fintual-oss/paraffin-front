import React from 'react'
import Image from 'next/image';
import styles from './Problem.module.scss';

const ProblemCard = ({imgCard, altImg, title, description}) => {
  return (
    <div className={`col-12 md:col-4 ${styles.problem__card}`}>
      <Image src={imgCard} alt={altImg} />
      <div class={styles.problem__card_wrap_info}>
        <h3 className={styles.problem__card__title}>{title}</h3>
        <p className={styles.problem__card__description}>
        {description}
        </p>
      </div>
    </div>
  )
}

export default ProblemCard