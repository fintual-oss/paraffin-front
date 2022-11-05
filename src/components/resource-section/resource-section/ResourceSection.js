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
        }
      }
    );
  };

  const toast = useRef(null);

  if (
    isLoadingResource ||
    isLoadingAverage ||
    isLoadingEvaluations ||
    isLoadingCompleted
  )
    return 'loading';

  if (
    isErrorResource ||
    isErrorAverage ||
    isErrorEvaluations ||
    isErrorCompleted
  )
    return 'error';

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    average_evaluation: average_evaluation.average_evaluation,
    completed: isCompleted.completed,
  };

  const updates = {
    onEvaluationSubmitionHandler,
    updateAverage,
    updateEvaluations,
    toast,
  };
  return (
    <ResourceSidebar
      onHideHandler={() => onHideHandler()}
      resourceId={resourceId}
      activeResource={resource}
      updates={updates}
      evaluations={evaluations}
      checkboxChangeHandler={checkboxChangeHandler}
    />
  );
};

export default ResourceSection;
