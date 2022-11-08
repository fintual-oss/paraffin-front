import { Card } from 'primereact/card';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LearningUnitListItem.module.scss';
import mujeres_felices_aprendiendo from '@utils/images/mujeres-felices-aprendiendo.png';
import { CompleteLearningUnitToggle } from '@components/cycle-section/learning-units-section/complete-learning-unit-toogle/completeLearningUnitToggle';

function LearningUnitItem({ learningUnit, showSuccess, mutate }) {
  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Link href={`/learning-units/${learningUnit.id}`}>
          <div>
            <Image
              width="235"
              height="150"
              className={styles.img}
              src={mujeres_felices_aprendiendo}
              alt={learningUnit.name}
            />
          </div>
        </Link>
        <div className={styles.productListDetail}>
          <div className={styles.productName}>
            <span>Learning unit</span>
            <div>
              <i className="pi pi-link">&nbsp;</i>
              <Link href={`/learning-units/${learningUnit.id}`}>
                {learningUnit.name}
              </Link>
            </div>
          </div>
          <CompleteLearningUnitToggle
            learningUnit={learningUnit}
            showSuccess={showSuccess}
            mutate={mutate}
          />
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
