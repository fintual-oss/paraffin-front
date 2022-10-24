import React from 'react';
import { Rating } from 'primereact/rating';
import styles from './Average.module.scss';

const Average = ({ average }) => {
  return (
    <>
      {average !== 'NaN' ? (
        <>
          <span className={styles.ratingNumber}>{average}</span>
          <Rating value={average} readOnly cancel={false} />
        </>
      ) : (
        <span>Sin evaluación</span>
      )}
    </>
  );
};

export default Average;
