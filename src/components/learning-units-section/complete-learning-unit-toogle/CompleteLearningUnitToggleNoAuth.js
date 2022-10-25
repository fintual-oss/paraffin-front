import { CompleteLearningUnitToggleButton } from './CompleteLearningUnitToggleButton';
import { Button } from 'primereact/button';
import style from './CompleteLearningUnitToogle.module.scss';
import useLoginDialog from '@hooks/useLoginDialog';

export const CompleteLearningUnitToggleNoAuth = () => {
  const loginDialog = useLoginDialog();
  return (
    <div>
      <Button
        className={`p-button-text p-button-plain ${style.button_without_style}`}
        onMouseEnter={() => loginDialog.setDisplayLoginDialog(true)}
      >
        <CompleteLearningUnitToggleButton className="p-disabled" />
      </Button>
    </div>
  );
};
