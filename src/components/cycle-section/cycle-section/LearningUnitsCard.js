import { Card } from 'primereact/card';
import styles from './CycleSection.module.scss';

const LearningUnitsCard = ({ cycle, learningUnits }) => {
  return (
    <Card className={styles.learningUnitsCard} title="Learning units">
      <ul>
        {learningUnits.map(lu => (<li key={lu.id}>{lu.name}</li>))}
      </ul>
    </Card>
  );
};

export default LearningUnitsCard;
