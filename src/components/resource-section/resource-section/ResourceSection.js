import ResourceSidebar from '@components/resources-section/resource-sidebar/ResourceSidebar';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { useRef } from 'react';

const ResourceSection = ({
  onHideHandler,
  resourceId,
  onEvaluationSubmitionHandler,
}) => {
  const {
    data: resourceData,
    isLoading: isLoadingResource,
    isError: isErrorResource,
  } = useGet(endpoints('resource', resourceId));

  const {
    data,
    isLoading: isLoadingEvaluation,
    isError: isErrorEvaluation,
    mutate: updateResourceEvaluation,
  } = useGet(endpoints('resourceEvaluation', resourceId));

  const {
    data: average_evaluation,
    isLoading: isLoadingAverage,
    isError: isErrorAverage,
    mutate: updateAverage,
  } = useGet(endpoints('resourceAverage', resourceId));

  const {
    data: evaluations,
    isLoading: isLoadingEvaluations,
    isError: isErrorEvaluations,
    mutate: updateEvaluations,
  } = useGet(endpoints('resourceEvaluations', resourceId));

  const {
    data: isCompleted,
    isLoading: isLoadingCompleted,
    isError: isErrorCompleted,
    mutate: updateCompleted,
  } = useGet(endpoints('isResourceCompleted', resourceId));

  const checkboxChangeHandler = (clicked) => {
    const requestOptions = {
      method: clicked.value ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(endpoints('isResourceCompleted', resourceId), requestOptions).then(
      (response) => {
        if (response.ok) {
          updateCompleted();
          showSuccess();
        }
      }
    );
  };

  const toast = useRef(null);

  if (
    isLoadingResource ||
    isLoadingAverage ||
    isLoadingEvaluations ||
    isLoadingEvaluation ||
    isLoadingCompleted
  )
    return 'loading';

  if (
    isErrorResource ||
    isErrorAverage ||
    isErrorEvaluations ||
    isErrorEvaluation ||
    isErrorCompleted
  )
    return 'error';

  const showSuccess = () =>
    toast.current.show({
      severity: 'success',
      summary: 'Tu evaluación quedó registrada',
      detail: 'Gracias por contribuir!',
    });

  async function handleSubmitForm(evaluation, comment) {
    if (evaluation < 1) {
      return;
    }
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ evaluation: evaluation, comment: comment }),
    };
    const response = await fetch(
      endpoints('resourceEvaluation', resourceId),
      requestOptions
    );
    await response.json();
    updateEvaluations();
    updateAverage();
    updateResourceEvaluation();
    onEvaluationSubmitionHandler();
    showSuccess();
  }

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    average_evaluation: average_evaluation.average_evaluation,
    completed: isCompleted.completed,
  };

  const formOptions = {
    evaluation: data.evaluation,
    comment: data.comment,
    evaluated: data.evaluation ? true : false,
    handleSubmitForm: handleSubmitForm,
    toast: toast,
  };

  return (
    <ResourceSidebar
      onHideHandler={() => onHideHandler()}
      activeResource={resource}
      formOptions={formOptions}
      evaluations={evaluations}
      checkboxChangeHandler={checkboxChangeHandler}
    />
  );
};

export default ResourceSection;
