import React, { useEffect, useState, useRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import styles from './AddEvaluation.module.scss';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';

const AddEvaluationAuth = ({ resourceId, updatesAddEvaluation }) => {
  const {
    data,
    isLoading: isLoadingEvaluation,
    isError: isErrorEvaluation,
    mutate: updateResourceEvaluation,
  } = useGet(endpoints('resourceEvaluation', resourceId));

  const [evaluation, setEvaluation] = useState();
  const [comment, setComment] = useState();
  const toast = useRef(null);

  useEffect(() => {
    if (data) {
      setEvaluation(data.evaluation);
      setComment(data.comment);
    }
  }, [data]);

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
    handleSubmitForm: handleSubmitForm,
    toast: toast,
  };

  const handleErase = () => {
    setComment('');
    setEvaluation('');
  };
  let title = formOptions.evaluated ? 'Tu evaluación' : 'Agregar comentario';

  const handleSubmit = () => {
    formOptions.handleSubmitForm(evaluation, comment);
  };

  return (
    <Card title={title}>
      <Rating
        value={evaluation}
        onChange={(e) => setEvaluation(e.value)}
        cancel={false}
        readOnly={formOptions.evaluated}
        className={styles.inputRating}
      />
      <InputTextarea
        rows={4}
        cols={15}
        value={comment || ''}
        onChange={(e) => setComment(e.target.value)}
        disabled={formOptions.evaluated}
        autoResize
      />
      <div className="dialog-demo">
        <Button
          type="button"
          label="Borrar"
          icon="pi pi-times"
          className="p-button-text"
          onClick={() => handleErase()}
          visible={!formOptions.evaluated}
        />
        <Button
          type="submit"
          label="Guardar evaluación"
          icon="pi pi-check"
          onClick={handleSubmit}
          visible={!formOptions.evaluated}
          disabled={evaluation < 1}
        />
      </div>
      <Toast ref={formOptions.toast} position="bottom-center" />
    </Card>
  );
};

export default AddEvaluationAuth;
