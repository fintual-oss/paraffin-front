import styles from './CycleSection.module.scss';

export const CycleTopContainer = ({ cycle }) => {
  return (
    <div className={styles.topContainer}>
      <div>
        <h2>Ciclo {cycle.order_number}</h2>
        <h1>{cycle.name}</h1>
      </div>
    </div>
  );
};
