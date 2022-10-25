import { CompleteLearningUnitToggleButton } from './CompleteLearningUnitToggleButton';
import useSetLoginDialog from '@hooks/useSetLoginDialog';
import { Button } from 'primereact/button';

export const CompleteLearningUnitToggleNoAuth = () => {
  const setLoginDialog = useSetLoginDialog();
  return (
    <div>
      <Button className="p-button-text p-button-plain" onClick={() => setLoginDialog(true)}>
        <CompleteLearningUnitToggleButton className="p-disabled" tooltip="Necesita ingresar para completar" />
      </Button>
    </div>
  );
};
