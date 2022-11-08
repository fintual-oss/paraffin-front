import useCurrentUser from '@hooks/useCurrentUser';
import useLoginDialog from '@hooks/useLoginDialog';
import { Button } from 'primereact/button';

const AddNewResourceButton = ({ setDisplayBasic }) => {
  const currentUser = useCurrentUser();
  const loginDialog = useLoginDialog();

  if (currentUser) {
    return (
      <Button
        icon="pi pi-plus"
        onClick={() => setDisplayBasic(true)}
        label="Agrega un recurso"
      />
    );
  }

  return (
    <div
      onClick={() => loginDialog.setDisplayLoginDialog(true)}
      onKeyPress={null}
      role="button"
      tabIndex="0"
    >
      <Button
        icon="pi pi-plus"
        label="Agrega un recurso"
        disabled
        tooltip="Ingresa para agregar un recurso"
        tooltipOptions={{ showOnDisabled: true, position: 'left' }}
      />
    </div>
  );
};

export default AddNewResourceButton;
