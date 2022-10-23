import { Card } from 'primereact/card';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LearningUnitListItem.module.scss';
import useCurrentUser from '@hooks/useCurrentUser';
import { CompleteLearningUnitToggleAuth } from '../complete-learning-unit-toogle/CompleteLearningUnitToogleAuth';
import { CompleteLearningUnitToggleNoAuth } from '../complete-learning-unit-toogle/CompleteLearningUnitNoAuth';

function LearningUnitItem({ unit, showSuccess }) {
  const currentUser = useCurrentUser();

  const toogleButton = () => {
    if (currentUser) {
      return <CompleteLearningUnitToggleAuth unit={unit} showSuccess={showSuccess} />;
    } else {
      return <CompleteLearningUnitToggleNoAuth />;
    }
  };

  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Link href={`/learning-units/${unit.id}`}>
          <div>
            <Image
              width="235"
              height="150"
              className={styles.img}
              src={
                "https://img.freepik.com/vector-gratis/mujeres-felices-aprendiendo-idioma-linea-aislado-ilustracion-vectorial-plana-personajes-femeninos-dibujos-animados-que-toman-lecciones-individuales-traves-messenger-concepto-educacion-tecnologia-digital_74855-10088.jpg?w=2000&t=st=1665151875~exp=1665152475~hmac=e788b587fbbe1bdd29332d55dc1a5965dd181962a0ee5719dc83ef09c895f0b4img.freepik.com/vector-gratis/mujeres-felices-aprendiendo-idioma-linea-aislado-ilustracion-vectorial-plana-personajes-femeninos-dibujos-animados-que-toman-lecciones-individuales-traves-messenger-concepto-educacion-tecnologia-digital_74855-10088.jpg?w=2000&t=st=1665151875~exp=1665152475~hmac=e788b587fbbe1bdd29332d55dc1a5965dd181962a0ee5719dc83ef09c895f0b4'"
              }
              alt={unit.name}
            />
          </div>
        </Link>
        <div className={styles.productListDetail}>
          <div className={styles.productName}>
            <span>Learning unit</span>
            <div>
              <i className="pi pi-link">&nbsp;</i>
              <Link href={`/learning-units/${unit.id}`}>{unit.name}</Link>
            </div>
          </div>
          {toogleButton()}
        </div>
      </div>
    </Card>
  );
}

export default LearningUnitItem;
