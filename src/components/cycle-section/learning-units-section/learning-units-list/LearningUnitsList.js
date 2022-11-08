import React, { useRef } from 'react';
import LearningUnitListItem from '@components/cycle-section/learning-units-section/learning-unit-list-item/LearningUnitListItem';
import { Toast } from 'primereact/toast';
import { DataView } from 'primereact/dataview';

const LearningUnitsList = ({ learningUnits, mutate }) => {
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Learning unit actualizado',
      life: 2000,
    });
  };

  const renderListItem = (unit) => {
    return (
      <LearningUnitListItem
        unit={unit}
        showSuccess={showSuccess}
        mutate={mutate}
      />
    );
  };

  return (
    <div>
      <Toast ref={toast} position="bottom-center" />
      <DataView
        value={learningUnits}
        layout="list"
        itemTemplate={renderListItem}
        paginator
        rows={9}
      />
    </div>
  );
};

export default LearningUnitsList;
