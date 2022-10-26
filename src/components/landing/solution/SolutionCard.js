import Image from 'next/image';
import React from 'react'
import styles from './Solution.module.scss';

const SolutionCard = ({imgCard='', altImg='', classCard='', title='', description=''}) => {
  return (
    <div className={`col-12 xl:col-10 ${classCard}`}>
      <Image src={imgCard} alt={altImg} />
      <div className="col-6">
        <h3 className={styles.solution__card__title}>{title}</h3>
        <p className={styles.solution__card__description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default SolutionCard