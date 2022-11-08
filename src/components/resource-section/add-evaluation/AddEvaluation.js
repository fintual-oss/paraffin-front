import useCurrentUser from '@hooks/useCurrentUser';
import useLoginDialog from '@hooks/useLoginDialog';
import AddEvaluationAuth from './AddEvaluationAuth';
import AddEvaluationAuthWidgets from './AddEvaluationAuthWidgets';

const AddEvaluation = ({ resourceId, updatesAddEvaluation }) => {
  const currentUser = useCurrentUser();
  const loginDialog = useLoginDialog();

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

  return (
    <div
      className="cardEvaluation"
      onClick={() => {
        loginDialog.setDisplayLoginDialog(true);
      }}
      onKeyPress={null}
      role="button"
      tabIndex="0"
      data-pr-tooltip="Ingresa para poder evaluar un recurso"
      data-pr-position="left"
    >
      <AddEvaluationAuthWidgets formOptions={formOptions} />;
    </div>
  );
};

export default AddEvaluation;
