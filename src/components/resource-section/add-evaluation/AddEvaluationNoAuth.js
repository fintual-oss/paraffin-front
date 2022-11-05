import { InputTextarea } from 'primereact/inputtextarea';
import { Rating } from 'primereact/rating';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import useLoginDialog from '@hooks/useLoginDialog';
import { Tooltip } from 'primereact/tooltip';

const AddEvaluationNoAuth = () => {
  const loginDialog = useLoginDialog();
  return (
    <div
      className="cardEvaluation"
      onClick={() => loginDialog.setDisplayLoginDialog(true)}
      onKeyPress={null}
      role="button"
      tabIndex="0"
      data-pr-tooltip="Ingresa para poder evaluar un recurso"
      data-pr-position="left"
    >
      <Tooltip target=".cardEvaluation" mouseTrack mouseTrackLeft={10} />
      <Card title="Agregar comentario">
        <Rating cancel={false} readOnly={true} disabled />
        <InputTextarea rows={4} cols={15} disabled autoResize />
        <div className="dialog-demo">
          <Button
            type="button"
            label="Borrar"
            icon="pi pi-times"
            className="p-button-text"
            disabled
          />
          <Button
            type="submit"
            label="Guardar evaluación"
            icon="pi pi-check"
            disabled
          />
        </div>
      </Card>
    </div>
  );
};

export default AddEvaluationNoAuth;
