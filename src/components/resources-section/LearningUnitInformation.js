import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from '@styles/LearningUnitInformation.module.scss';

const LearningUnitInformation = ({ learningUnit }) => {
  return (
    <Card className={styles.myCard}>
      <div className={styles.inlineInfo}>
        <Image alt="LearningUnit" src="https://picsum.photos/200" width="100%" height="100%" />
        <h2 className={styles.name}>{learningUnit.name}</h2>
      </div>
      <p style={{ lineHeight: '1.5' }}>{learningUnit.description}</p>
    </Card>
  );
};

export default LearningUnitInformation;
