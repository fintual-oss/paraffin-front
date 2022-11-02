import { Card } from 'primereact/card';
import styles from './CycleSection.module.scss';
 

const CycleInfoCard = ({ cycle }) => {
  return (
    <Card className={styles.cycleSectionCard} title="Objetivos de aprendizaje">
      <p>{cycle.learning_goals_description}</p>
    </Card>
  );
};

export default CycleInfoCard