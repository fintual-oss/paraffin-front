import { ToggleButton } from 'primereact/togglebutton';
import { Toast } from 'primereact/toast';
import useCurrentUser from '@hooks/useCurrentUser';
import { Tooltip } from 'primereact/tooltip';

export const CompleteCycle = ({ cycle, changeHandler, toast }) => {
  const currentUser = useCurrentUser();
  const tooltip =
    !currentUser && 'Debes iniciar sesión para registrar tu avance';

  return (
    <div>
      <Toast ref={toast} position="bottom-center" />
      <Tooltip target=".thisButton" />
      <span>
        <ToggleButton
          className="thisButton"
          onLabel="Completado"
          offLabel="Marcar como completado"
          onIcon="pi pi-verified"
          offIcon="pi pi-verified"
          checked={cycle.completed}
          onChange={changeHandler}
          disabled={cycle.completed || !currentUser}
          tooltip={tooltip}
          tooltipOptions={{ showOnDisabled: true, position: 'bottom' }}
        />
      </span>
    </div>
  );
};
