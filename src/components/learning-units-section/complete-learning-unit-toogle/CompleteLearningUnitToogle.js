import { ToggleButton } from 'primereact/togglebutton';
import styles from './CompleteLearningUnitToogle.module.scss';

export const CompleteLearningUnitToggle = ({ completed, onChangeHandler, className, tooltip }) => {
  return (
    <div className={styles.checkbox}>
      <ToggleButton
        onLabel="Completado"
        offLabel="No Completado"
        onIcon="pi pi-check"
        offIcon="pi pi-times"
        checked={completed}
        onChange={onChangeHandler}
        className={className}
        tooltip={tooltip}
        tooltipOptions={{ showOnDisabled: true }}
      />
    </div>
  );
};
