import Link from 'next/link';
import { Card } from 'primereact/card';
import { Fieldset } from 'primereact/fieldset';
import styles from './CycleSection.module.scss';

const ChallengeCard = ({ cycle }) => {
  return (
    <Card
      className={`${styles.cycleSectionCard} ${styles.challengeCard}`}
      title="Tienes un desafío esperando para ti 😎"
    >
      <p>
        En esta sección podrás encontrar un proyecto con un repositorio base
        para que puedas aplicar lo aprendido en este ciclo:
      </p>

      <div className={styles.challengeField}>
        <Fieldset legend="Descripción del proyecto">
          <p>{cycle.challenge_description}</p>
        </Fieldset>
      </div>
      <div className={styles.challengeField}>
        <Fieldset legend="Repositorio GitHub">
          <p>
            <Link href={cycle.boilerplate_url}>Aquí podras encontrar un repositorio base para construir tu proyecto</Link>
          </p>
        </Fieldset>
      </div>
    </Card>
  );
};

export default ChallengeCard;
