import styles from './CycleSection.module.scss'
import { Button } from 'primereact/Button';

export const CycleTopContainer = ({ cycle }) => {

  return (
    <div className={styles.topContainer}>
      <div>
        <h2>Ciclo {cycle.order_number}</h2>
        <h1>{cycle.name}</h1>
      </div>
      <div>
        <Button className={styles.cycleCompletitionButton}label="Completar ciclo"/>
      </div>
    </div>
);
};