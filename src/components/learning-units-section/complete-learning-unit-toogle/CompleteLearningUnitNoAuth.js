import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';
import useSetLoginDialog from '@hooks/useSetLoginDialog';

export const CompleteLearningUnitToggleNoAuth = () => {
  const setLoginDialog = useSetLoginDialog();
  return (
    <div>
      <div onClick={() => setLoginDialog(true)}>
        <CompleteLearningUnitToggle className="p-disabled" tooltip="Necesita ingresar para completar" />
      </div>
    </div>
  );
};
