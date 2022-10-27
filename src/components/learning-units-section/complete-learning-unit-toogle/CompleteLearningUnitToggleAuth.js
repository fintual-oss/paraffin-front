import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import style from './CompleteLearningUnitToogle.module.scss';
import { ToggleButton } from 'primereact/togglebutton';

export const CompleteLearningUnitToggleAuth = ({ unit, showSuccess }) => {
  const completedLearningUnitEndpoint = endpoints(
    'isLearningUnitCompleted',
    unit.id
  );
  const {
    data: isCompleted,
    isLoading,
    isError,
    mutate,
  } = useGet(completedLearningUnitEndpoint);
  const changeHandler = async (clicked) => {
    const requestOptions = {
      method: clicked.value ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(completedLearningUnitEndpoint, requestOptions) 

    if (response.ok) {
      mutate();
      showSuccess();
    }
  };

  if (isLoading) {
    return <Skeleton shape="rectangle" width="50%" />;
  }
  if (isError) {
    return 'error';
  }
  return (
    <div className={style.checkbox}>
      <ToggleButton
        onLabel="Completado"
        offLabel="No Completado"
        onIcon="pi pi-check"
        offIcon="pi pi-times"
        checked={isCompleted.completed}
        onChange={changeHandler}
      />
    </div>
  );
};
