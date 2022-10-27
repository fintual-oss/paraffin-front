import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { CompleteLearningUnitToggleButton } from './CompleteLearningUnitToggleButton';

export const CompleteLearningUnitToggleAuth = ({ unit, showSuccess }) => {
  const completedLearningUnitEndpoint = endpoints('isLearningUnitCompleted', unit.id);
  const { data: isCompleted, isLoading, isError, mutate } = useGet(completedLearningUnitEndpoint);
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
  return <CompleteLearningUnitToggleButton completed={isCompleted.completed} onChangeHandler={changeHandler} />;
};
