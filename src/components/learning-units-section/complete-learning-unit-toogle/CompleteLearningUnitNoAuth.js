import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';
import { Dialog } from 'primereact/dialog';
import { useState } from 'react';

export const CompleteLearningUnitToggleNoAuth = () => {
  const [displayDialog, setDisplayDialog] = useState(false);
  const onHide = () => {
    setDisplayDialog(false);
  };
  return (
    <div>
      <div onClick={() => setDisplayDialog(true)}>
        <CompleteLearningUnitToggle className="p-disabled" tooltip="Necesita ingresar para completar" />
      </div>

      <Dialog visible={displayDialog} style={{ width: '50vw' }} onHide={onHide}>
        <p> Paraffin se construye en comunidad </p>
      </Dialog>
    </div>
  );
};
