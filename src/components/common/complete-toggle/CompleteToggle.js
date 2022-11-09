import { ToggleButton } from 'primereact/togglebutton';

export const CompleteToggle = ({ completed, onChangeHandler, disabled }) => {
  const toggleDisabled = disabled ? 'p-disabled' : '';
  return (
    <ToggleButton
      className={`CompleteResourceToggleButton ${toggleDisabled}`}
      onLabel="Completado"
      offLabel="No Completado"
      onIcon="pi pi-check"
      offIcon="pi pi-times"
      checked={completed}
      onChange={onChangeHandler}
    />
  );
};
