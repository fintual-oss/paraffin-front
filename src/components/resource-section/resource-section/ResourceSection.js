import ResourceSidebar from '@components/resources-section/resource-sidebar/ResourceSidebar';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import Error from '@components/common/Error';

const ResourceSection = ({
  onHideHandler,
  resourceId,
  onEvaluationSubmitionHandler,
}) => {
  const {
    data: resourceData,
    isLoading: isLoadingResource,
    isError: isErrorResource,
    mutate: updateResource,
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

  if (
    isLoadingResource ||
    isLoadingAverage ||
    isLoadingEvaluations ||
    isLoadingCompleted
  )
    return <Skeleton shape="rectangle" width="100%" height="100%" />;

  if (isErrorResource) return <Error reset={updateResource} />;
  if (isErrorAverage) return <Error reset={updateAverage} />;
  if (isErrorEvaluations) return <Error reset={updateEvaluations} />;
  if (isErrorCompleted) return <Error reset={updateCompleted} />;

  const resource = {
    name: resourceData.name,
    url: resourceData.url,
    average_evaluation: average_evaluation.average_evaluation,
    completed: isCompleted.completed,
  };

  const updatesAddEvaluation = {
    onEvaluationSubmitionHandler,
    updateAverage,
    updateEvaluations,
  };
  return (
    <ResourceSidebar
      onHideHandler={() => onHideHandler()}
      resourceId={resourceId}
      activeResource={resource}
      updatesAddEvaluation={updatesAddEvaluation}
      evaluations={evaluations}
      checkboxChangeHandler={checkboxChangeHandler}
    />
  );
};

export default ResourceSection;
