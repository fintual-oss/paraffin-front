import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';
import styles from './Solution.module.scss';

const SolutionCard = ({
  imgCard = '',
  altImg = '',
  classCard = '',
  title = '',
  description = '',
}) => {
  return (
    <div className={`col-12 xl:col-10 ${classCard}`}>
      <Fade bottom>
        <Image src={imgCard} alt={altImg} />
      </Fade>
      <div className="col-6">
        <Fade bottom>
          <h3 className={styles.solution__card__title}>{title}</h3>
        </Fade>
        <Fade bottom>
          <p className={styles.solution__card__description}>{description}</p>
        </Fade>
      </div>
    </div>
  );
};

export default SolutionCard;
