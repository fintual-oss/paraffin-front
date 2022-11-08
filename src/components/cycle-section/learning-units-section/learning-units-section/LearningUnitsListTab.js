import { Panel } from 'primereact/panel';
import LearningUnitsList from '../learning-units-list/LearningUnitsList';

const LearningUnitsListTab = ({ learningUnits, mutate }) => {
  return (
    <>
      <Panel>
        <LearningUnitsList learningUnits={learningUnits} mutate={mutate} />
      </Panel>
    </>
  );
};

export default LearningUnitsListTab;
