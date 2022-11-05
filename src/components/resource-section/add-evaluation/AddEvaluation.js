import React, { useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import styles from './AddEvaluation.module.scss';
import useCurrentUser from '@hooks/useCurrentUser';
import useLoginDialog from '@hooks/useLoginDialog';
import { Tooltip } from 'primereact/tooltip';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';

const AddEvaluation = ({ resourceId, updates }) => {
  const {
    data,
    isLoading: isLoadingEvaluation,
    isError: isErrorEvaluation,
    mutate: updateResourceEvaluation,
  } = useGet(endpoints('resourceEvaluation', resourceId));

  const [evaluation, setEvaluation] = useState();
  const [comment, setComment] = useState();
  const currentUser = useCurrentUser();
  const loginDialog = useLoginDialog();

  useEffect(() => {
    if (data) {
      setEvaluation(data.evaluation);
      setComment(data.comment);
    }
  }, [data]);

  if (isLoadingEvaluation) {
    return 'loading';
  }

  if (isErrorEvaluation) return 'error';

  const showSuccess = () =>
    updates.toast.current.show({
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
    updates.updateEvaluations();
    updates.updateAverage();
    updateResourceEvaluation();
    updates.onEvaluationSubmitionHandler();
    showSuccess();
  }

  const formOptions = {
    evaluation: data.evaluation,
    comment: data.comment,
    evaluated: data.evaluation ? true : false,
    handleSubmitForm: handleSubmitForm,
    toast: updates.toast,
  };

  const handleErase = () => {
    setComment('');
    setEvaluation('');
  };
  let title = formOptions.evaluated ? 'Tu evaluación' : 'Agregar comentario';

  const handleSubmit = () => {
    formOptions.handleSubmitForm(evaluation, comment);
  };

  const handleOnClick = () => {
    if (!currentUser) {
      loginDialog.setDisplayLoginDialog(true);
    }
  };

  return (
    <div
      className="cardEvaluation"
      onClick={handleOnClick}
      onKeyPress={null}
      role="button"
      tabIndex="0"
      disabled={currentUser}
      data-pr-tooltip="Ingresa para poder evaluar un recurso"
      data-pr-position="left"
    >
      <Tooltip target=".cardEvaluation" mouseTrack mouseTrackLeft={10} />
      <Card title={title}>
        <Rating
          value={evaluation}
          onChange={(e) => setEvaluation(e.value)}
          cancel={false}
          readOnly={formOptions.evaluated}
          className={styles.inputRating}
          disabled={!currentUser}
        />
        <InputTextarea
          rows={4}
          cols={35}
          value={comment || ''}
          onChange={(e) => setComment(e.target.value)}
          disabled={formOptions.evaluated || !currentUser}
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
            disabled={!currentUser}
          />
          <Button
            type="submit"
            label="Guardar evaluación"
            icon="pi pi-check"
            onClick={handleSubmit}
            visible={!formOptions.evaluated}
            disabled={evaluation < 1 || !currentUser}
          />
        </div>
        <Toast ref={formOptions.toast} position="bottom-center" />
      </Card>
    </div>
  );
};

export default AddEvaluation;
