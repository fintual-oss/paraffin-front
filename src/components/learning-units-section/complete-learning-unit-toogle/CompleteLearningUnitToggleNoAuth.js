import { Button } from 'primereact/button';
import style from './CompleteLearningUnitToogle.module.scss';
import useLoginDialog from '@hooks/useLoginDialog';
import { ToggleButton } from 'primereact/togglebutton';

export const CompleteLearningUnitToggleNoAuth = () => {
  const loginDialog = useLoginDialog();
  return (
    <Button
      className={`p-button-text p-button-plain ${style.button_without_style}`}
      onClick={() => loginDialog.setDisplayLoginDialog(true)}
    >
      <div className={style.checkbox}>
        <ToggleButton
          onLabel="Completado"
          offLabel="No Completado"
          onIcon="pi pi-check"
          offIcon="pi pi-times"
          className="p-disabled"
          tooltip="Necesita ingresar para completar"
          tooltipOptions={{ showOnDisabled: true }}
        />
      </div>
    </Button>
  );
};
