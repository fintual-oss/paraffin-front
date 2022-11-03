import { ToggleButton } from 'primereact/togglebutton';
import styles from './CompleteToggle.module.scss';

export const CompleteToggle = ({ completed, onChangeHandler }) => {
  return (
    <div className={styles.checkbox}>
      <ToggleButton
        onLabel="Completado"
        offLabel="No Completado"
        onIcon="pi pi-check"
        offIcon="pi pi-times"
        checked={completed}
        onChange={onChangeHandler}
      />
    </div>
  );
};
