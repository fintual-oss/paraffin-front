import { Panel } from 'primereact/panel';
import LearningUnitsList from '../learning-units-list/LearningUnitsList';

const LearningUnitsListTab = ({ learningUnits }) => {
  return (
    <>
      <Panel>
        <LearningUnitsList learningUnits={learningUnits} />
      </Panel>
    </>
  );
};

export default LearningUnitsListTab;
