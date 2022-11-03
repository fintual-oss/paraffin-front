import React from 'react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import styles from './Problem.module.scss';

const ProblemCard = ({ imgCard, altImg, title, description }) => {
  return (
    <div className={`col-12 md:col-4 ${styles.problem__card}`}>
      <Fade top>
        <Image src={imgCard} alt={altImg} />
      </Fade>
      <div className={styles.problem__card_wrap_info}>
        <Fade top>
          <h3 className={styles.problem__card__title}>{title}</h3>
        </Fade>
        <Fade top>
          <p className={styles.problem__card__description}>{description}</p>
        </Fade>
      </div>
    </div>
  );
};

export default ProblemCard;
