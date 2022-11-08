import useCurrentUser from '@hooks/useCurrentUser';
import AddEvaluationAuth from './AddEvaluationAuth';
import AddEvaluationAuthWidgets from './AddEvaluationAuthWidgets';

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
  const formOptions = {
    evaluation: null,
    comment: null,
    evaluated: true,
    handleSubmitForm: null,
    toast: null,
    enabled: false,
  };

  return <AddEvaluationAuthWidgets formOptions={formOptions} />;
};

export default AddEvaluation;
