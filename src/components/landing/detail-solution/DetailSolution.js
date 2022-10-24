import React from 'react';
import styles from './DetailSolution.module.scss';

const DetailSolution = () => {
  return (
    <section className={`${styles.detailSolution} grid`}>
      <p class="textCenter">(Detalle de la solución)</p>
      <p class="textCenter">(Call to action)</p>
    </section>
  );
};

export default DetailSolution;
