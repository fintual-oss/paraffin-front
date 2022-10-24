import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from './LearningUnitInformation.module.scss';
import learningUnitPhoto from '/src/public/LearningUnit.jpg';

const LearningUnitInformation = ({ learningUnit }) => {
  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Image
          width="235"
          height="150"
          className={styles.img}
          src={learningUnitPhoto}
          alt={learningUnit.name}
        />
        <div className={styles.productListDetail}>
          <div className={styles.productName}>
            <span>Learning unit</span>
            <h3>{learningUnit.name}</h3>
            <p className={styles.productDescription}>
              {learningUnit.description}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LearningUnitInformation;
