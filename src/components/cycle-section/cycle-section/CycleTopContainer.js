import styles from './CycleSection.module.scss';
import { CompleteCycle } from './CompleteCycle';

export const CycleTopContainer = ({
  cycle,
  completeCycle,
  toastCompletition,
}) => {
  return (
    <div className={styles.topContainer}>
      <div>
        <h2>Ciclo {cycle.order_number}</h2>
        <h1>{cycle.name}</h1>
      </div>
      <div className={styles.checkButtonContainer}>
        <CompleteCycle
          cycle={cycle}
          changeHandler={completeCycle}
          toast={toastCompletition}
        />
      </div>
    </div>
  );
};
