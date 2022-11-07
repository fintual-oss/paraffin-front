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
      <TabPanel header="Mapa de pre requisitos">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div
            style={{
              height: 600,
              width: '89.6vw',
              margin: 15,
              position: 'relative',
            }}
          >
            <LearningUnitsGraph
              handleNodeClick={(id, isCompleted) =>
                handleLearningUnitClick(id, isCompleted)
              }
              learningUnits={learningUnits}
              successions={successions}
            />
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Lista de unidades">
        <LearningUnitsListTab learningUnits={learningUnits} />
      </TabPanel>
    </TabView>
  );
};

export default LearningUnitsSection;
