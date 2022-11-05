import useCurrentUser from '@hooks/useCurrentUser';
import AddEvaluationAuth from './AddEvaluationAuth';
import AddEvaluationNoAuth from './AddEvaluationNoAuth';

const AddEvaluation = ({ resourceId, updatesAddEvaluation }) => {
  const currentUser = useCurrentUser();
  if (currentUser) {
    return (
      <AddEvaluationAuth
        resourceId={resourceId}
        updatesAddEvaluation={updatesAddEvaluation}
      />
    );
  }

  return <AddEvaluationNoAuth />;
};

export default AddEvaluation;
