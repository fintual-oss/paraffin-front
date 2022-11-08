import { ToggleButton } from 'primereact/togglebutton';

export const CompleteToggle = ({ completed, onChangeHandler }) => {
  return (
    <ToggleButton
      onLabel="Completado"
      offLabel="No Completado"
      onIcon="pi pi-check"
      offIcon="pi pi-times"
      checked={completed}
      onChange={onChangeHandler}
    />
  );
};
