import { Card } from 'primereact/card';
import styles from './CycleSection.module.scss';
import Link from 'next/link';

const LearningUnitsCard = ({ learningUnits }) => {
  return (
    <Card className={styles.learningUnitsCard} title="Learning units">
      <ul>
        {learningUnits.map((lu) => (
          <li key={lu.id}>
            <Link href={'/learning-units/' + lu.id}>{lu.name}</Link>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default LearningUnitsCard;
