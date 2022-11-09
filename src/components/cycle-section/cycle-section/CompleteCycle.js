import { ToggleButton } from 'primereact/togglebutton';
import { Toast } from 'primereact/toast';
import useCurrentUser from '@hooks/useCurrentUser';
import { Tooltip } from 'primereact/tooltip';

export const CompleteCycle = ({ cycle, changeHandler, toast }) => {
  const currentUser = useCurrentUser();
  const tooltip =
    !currentUser && 'Debes iniciar sesión para registrar tu avance';
  const toggleDisabled = cycle.completed || !currentUser ? 'p-disabled' : '';
  return (
    <div>
      <Toast ref={toast} position="bottom-center" />
      <Tooltip target=".CompleteCycleToggleButton" />
      <span>
        <ToggleButton
          className={`CompleteCycleToggleButton ${toggleDisabled}`}
          onLabel="Completado"
          offLabel="Marcar como completado"
          onIcon="pi pi-verified"
          offIcon="pi pi-verified"
          checked={cycle.completed}
          onChange={changeHandler}
          tooltip={tooltip}
          tooltipOptions={{ showOnDisabled: true, position: 'bottom' }}
        />
      </span>
    </div>
  );
};
