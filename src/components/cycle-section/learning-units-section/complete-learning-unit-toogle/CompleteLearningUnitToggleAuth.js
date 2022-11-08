import { endpoints } from '@utils/endpoints';
import style from './CompleteLearningUnitToogle.module.scss';
import { ToggleButton } from 'primereact/togglebutton';

export const CompleteLearningUnitToggleAuth = ({ unit, showSuccess, mutate }) => {

  const completeLearningUnitEndpoint = endpoints(
    'completeLearningUnit',
    unit.id
  );

  const changeHandler = async (clicked) => {
    const requestOptions = {
      method: clicked.value ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(completeLearningUnitEndpoint, requestOptions);

    if (response.ok) {
      mutate();
      showSuccess();
    }
  };

  return (
    <div className={style.checkbox}>
      <ToggleButton
        onLabel="Completado"
        offLabel="No Completado"
        onIcon="pi pi-check"
        offIcon="pi pi-times"
        checked={unit.completed}
        onChange={changeHandler}
      />
    </div>
  );
};
