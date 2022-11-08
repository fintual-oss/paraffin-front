import React, { useRef } from 'react';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import AddEvaluationAuthWidgets from './AddEvaluationAuthWidgets';

const AddEvaluationAuth = ({ resourceId, updatesAddEvaluation }) => {
  const {
    data,
    isLoading: isLoadingEvaluation,
    isError: isErrorEvaluation,
    mutate: updateResourceEvaluation,
  } = useGet(endpoints('resourceEvaluation', resourceId));

  const toast = useRef(null);

  if (isLoadingEvaluation) return 'loading';
  if (isErrorEvaluation) return 'error';

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
    updatesAddEvaluation.updateEvaluations();
    updatesAddEvaluation.updateAverage();
    updateResourceEvaluation();
    updatesAddEvaluation.onEvaluationSubmitionHandler();
    showSuccess();
  }

  const formOptions = {
    evaluation: data.evaluation,
    comment: data.comment,
    evaluated: data.evaluation ? true : false,
    handleSubmitForm,
    toast,
    enabled: true,
  };
  return <AddEvaluationAuthWidgets formOptions={formOptions} />;
};

export default AddEvaluationAuth;
