import React from 'react';
import Image from 'next/image';
import Flip from 'react-reveal/Flip';
import styles from './Problem.module.scss';

const ProblemCard = ({ imgCard, altImg, title, description }) => {
  return (
    <div className={`col-12 md:col-4 ${styles.problem__card}`}>
      <Flip top>
        <Image src={imgCard} alt={altImg} />
      </Flip>
      <div class={styles.problem__card_wrap_info}>
        <Flip top>
          <h3 className={styles.problem__card__title}>{title}</h3>
        </Flip>
        <Flip top>
          <p className={styles.problem__card__description}>{description}</p>
        </Flip>
      </div>
    </div>
  );
};

export default ProblemCard;
