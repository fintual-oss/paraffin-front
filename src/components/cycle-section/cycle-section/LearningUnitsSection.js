import { TabView, TabPanel } from 'primereact/tabview';
import LearningUnitsListTab from '@components/cycle-section/learning-units-section/learning-units-section/LearningUnitsListTab';
import LearningUnitsGraph from '@components/cycle-section/learning-units-section/learning-units-graph/LearningUnitsGraph';

const LearningUnitsSection = ({
  learningUnits,
  successions,
  handleLearningUnitClick,
}) => {
  return (
    <TabView>
      <TabPanel header="Lista de unidades">
        <div style={style}>
          <LearningUnitsListTab learningUnits={learningUnits} />
        </div>
      </TabPanel>
      <TabPanel header="Mapa de pre requisitos">
        <div style={style}>
          <LearningUnitsGraph
            handleLearningUnitClick={handleLearningUnitClick}
            learningUnits={learningUnits}
            successions={successions}
          />
        </div>
      </TabPanel>
    </TabView>
  );
};

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '91vw',
  height: '75vh',
  margin: 3,
  position: 'relative',
};

export default LearningUnitsSection;
