import React, { useEffect, useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import styles from './AddEvaluation.module.scss';
import useCurrentUser from '@hooks/useCurrentUser';
import useLoginDialog from '@hooks/useLoginDialog';

const AddEvaluation = ({ formOptions }) => {
  const [evaluation, setEvaluation] = useState(formOptions.evaluation);
  const [comment, setComment] = useState(formOptions.comment);
  const currentUser = useCurrentUser();
  const loginDialog = useLoginDialog();

  useEffect(() => {
    setEvaluation(formOptions.evaluation);
    setComment(formOptions.comment);
  }, [formOptions]);

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

  const tooltipEvaluate = 'Ingresa para poder evaluar';

  return (
    <div onClick={handleOnClick} onKeyPress={null} role="button" tabIndex="0">
      <Card title={title}>
        <Rating
          value={evaluation}
          onChange={(e) => setEvaluation(e.value)}
          cancel={false}
          readOnly={formOptions.evaluated}
          className={styles.inputRating}
          disabled={!currentUser}
          tooltip={!currentUser && tooltipEvaluate}
          tooltipOptions={{ showOnDisabled: true, position: 'left' }}
        />
        <InputTextarea
          rows={4}
          cols={35}
          value={comment || ''}
          onChange={(e) => setComment(e.target.value)}
          disabled={formOptions.evaluated || !currentUser}
          autoResize
          tooltip={!currentUser && tooltipEvaluate}
          tooltipOptions={{ showOnDisabled: true, position: 'left' }}
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
            tooltip={!currentUser && tooltipEvaluate}
            tooltipOptions={{ showOnDisabled: true, position: 'left' }}
          />
          <Button
            type="submit"
            label="Guardar evaluación"
            icon="pi pi-check"
            onClick={handleSubmit}
            visible={!formOptions.evaluated}
            disabled={evaluation < 1 || !currentUser}
            tooltip={!currentUser && tooltipEvaluate}
            tooltipOptions={{ showOnDisabled: true, position: 'left' }}
          />
        </div>
        <Toast ref={formOptions.toast} position="bottom-center" />
      </Card>
    </div>
  );
};

export default AddEvaluation;
