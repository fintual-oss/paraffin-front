import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import styles from './AddEvaluation.module.scss';

const AddEvaluation = ({ formOptions }) => {
  const [evaluation, setEvaluation] = useState(formOptions.evaluation);
  const [comment, setComment] = useState(formOptions.comment);

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

export default AddEvaluation;
