import { Card } from 'primereact/card';
import Image from 'next/image';
import styles from '@styles/LearningUnitInformation.module.scss';

const LearningUnitInformation = ({ learningUnit }) => {
  return (
    <Card className={styles.cardFull}>
      <div className={styles.productListItem}>
        <Image
          width="235"
          height="150"
          className={styles.img}
          src={
            "https://img.freepik.com/vector-gratis/mujeres-felices-aprendiendo-idioma-linea-aislado-ilustracion-vectorial-plana-personajes-femeninos-dibujos-animados-que-toman-lecciones-individuales-traves-messenger-concepto-educacion-tecnologia-digital_74855-10088.jpg?w=2000&t=st=1665151875~exp=1665152475~hmac=e788b587fbbe1bdd29332d55dc1a5965dd181962a0ee5719dc83ef09c895f0b4img.freepik.com/vector-gratis/mujeres-felices-aprendiendo-idioma-linea-aislado-ilustracion-vectorial-plana-personajes-femeninos-dibujos-animados-que-toman-lecciones-individuales-traves-messenger-concepto-educacion-tecnologia-digital_74855-10088.jpg?w=2000&t=st=1665151875~exp=1665152475~hmac=e788b587fbbe1bdd29332d55dc1a5965dd181962a0ee5719dc83ef09c895f0b4'"
          }
          alt={learningUnit.name}
        />
        <div className={styles.productListDetail}>
          <div className={styles.productName}>
            <span>Learning unit</span>
            <h3>{learningUnit.name}</h3>
            <p className={styles.productDescription}>{learningUnit.description}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LearningUnitInformation;
