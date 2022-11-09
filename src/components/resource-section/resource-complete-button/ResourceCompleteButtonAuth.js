import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { CompleteToggle } from '@components/common/complete-toggle/CompleteToggle';

const ResourceCompleteButtonAuth = ({ resourceId }) => {
  const {
    data: isCompleted,
    isLoading: isLoadingCompleted,
    isError: isErrorCompleted,
    mutate: updateCompleted,
  } = useGet(endpoints('isResourceCompleted', resourceId));

  if (isLoadingCompleted) return 'loading';
  if (isErrorCompleted) return 'error';

  const checkboxChangeHandler = (clicked) => {
    const requestOptions = {
      method: clicked.value ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(endpoints('isResourceCompleted', resourceId), requestOptions).then(
      (response) => {
        if (response.ok) {
          updateCompleted();
        }
      }
    );
  };

  return (
    <CompleteToggle
      completed={isCompleted.completed}
      onChangeHandler={checkboxChangeHandler}
      disabled={false}
    />
  );
};

export default ResourceCompleteButtonAuth;
