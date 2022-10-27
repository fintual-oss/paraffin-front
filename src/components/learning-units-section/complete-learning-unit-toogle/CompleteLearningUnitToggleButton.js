import { ToggleButton } from 'primereact/togglebutton';
import styles from './CompleteLearningUnitToogle.module.scss';

export const CompleteLearningUnitToggleButton = ({
  completed,
  onChangeHandler,
  disabled,
}) => {
  const buttonClassName = disabled ? "p-disabled" : "p-button"
  return (
    <div className={styles.checkbox}>
      <ToggleButton
        onLabel="Completado"
        offLabel="No Completado"
        onIcon="pi pi-check"
        offIcon="pi pi-times"
        checked={completed}
        onChange={onChangeHandler}
        className={buttonClassName}
      />
    </div>
  );
};
