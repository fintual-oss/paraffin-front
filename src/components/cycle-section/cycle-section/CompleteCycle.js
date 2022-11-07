import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { ToggleButton } from 'primereact/togglebutton';
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import useCurrentUser from '@hooks/useCurrentUser';
import { Tooltip } from 'primereact/tooltip';

export const CompleteCycle = ({ cycle }) => {
  const completedCycleEndpoint = endpoints('completeCycle', cycle.id);

  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Hurra! Se ha marcado el ciclo como completado',
      life: 2000,
    });
  };
  const showError = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Primero debes completar todos los learning units',
      life: 2000,
    });
  };

  const currentUser = useCurrentUser();
  const tooltip = !currentUser
    ? 'Debes iniciar sesión para registrar tu avance'
    : '';

  const {
    data: cycleData,
    isLoading,
    isError,
    mutate,
  } = useGet(endpoints('cycle', cycle.id));

  const changeHandler = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(completedCycleEndpoint, requestOptions);

    if (response.ok) {
      mutate();
      showSuccess();
    } else {
      showError();
    }
  };

  if (isLoading) {
    return <Skeleton shape="rectangle" width="50%" />;
  }
  if (isError) {
    throw isError;
  }
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
          checked={cycleData.completed}
          onChange={changeHandler}
          disabled={cycleData.completed || !currentUser}
          tooltip={tooltip}
          tooltipOptions={{ showOnDisabled: true, position: 'bottom' }}
        />
      </span>
    </div>
  );
};
