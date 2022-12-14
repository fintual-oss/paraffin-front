import React, { useRef } from 'react';
import LearningUnitListItem from '@components/cycle-section/learning-units-section/learning-unit-list-item/LearningUnitListItem';
import { Toast } from 'primereact/toast';
import { DataView } from 'primereact/dataview';

const LearningUnitsList = ({ learningUnits, mutate }) => {
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({
      severity: 'success',
      summary: 'Unidad actualizada',
      life: 2000,
    });
  };

  const renderListItem = (learningUnit) => {
    return (
      <LearningUnitListItem
        learningUnit={learningUnit}
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
        rows={8}
      />
    </div>
  );
};

export default LearningUnitsList;
