import { TabView, TabPanel } from 'primereact/tabview';
import LearningUnitsListTab from '@components/cycle-section/learning-units-section/learning-units-section/LearningUnitsListTab';
import LearningUnitsGraph from '@components/cycle-section/learning-units-section/learning-units-graph/LearningUnitsGraph';
import ChallengeCard from '@components/cycle-section/cycle-section/ChallengeCard';

const LearningUnitsSection = ({
  learningUnits,
  successions,
  cycle,
  handleLearningUnitClick,
  mutate,
}) => {
  return (
    <TabView>
      <TabPanel header="Desafío del ciclo">
        <div style={style}>
          <ChallengeCard cycle={cycle} />
        </div>
      </TabPanel>
      <TabPanel header="Lista de contenidos">
        <div style={style}>
          <LearningUnitsListTab learningUnits={learningUnits} mutate={mutate} />
        </div>
      </TabPanel>
      <TabPanel header="Mapa interactivo de contenidos">
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
