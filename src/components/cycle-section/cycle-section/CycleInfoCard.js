import { Card } from 'primereact/card';
import styles from './CycleSection.module.scss';

const GoalsDescription = ({ learningGoals }) => {
  const goalsArray = learningGoals.split('\\n');

  return (
    <ul>
      {goalsArray.map((str) => (
        <li key={`goal-${goalsArray.indexOf(str)}`}>{str}</li>
      )) ?? null}
    </ul>
  );
};

const CycleInfoCard = ({ cycle }) => {
  return (
    <Card className={styles.cycleSectionCard} title="Objetivos de aprendizaje">
      <GoalsDescription learningGoals={cycle.learning_goals_description} />
    </Card>
  );
};

export default CycleInfoCard;
