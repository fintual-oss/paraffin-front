import Link from "next/link";
import { Card } from 'primereact/card';
import { ScrollPanel } from 'primereact/scrollpanel';
import styles from './CycleSection.module.scss';
import { Accordion, AccordionTab } from 'primereact/accordion';

const ChallengeCard = ({ cycle }) => {
  return (
    <Card className={`${styles.cycleSectionCard} ${styles.challengeCard}`} title="Desafío">
      <ScrollPanel className={styles.scrollPanel} >
        {cycle.challenge_description}
      </ScrollPanel>
      <Accordion className={styles.accordionHeader}>
        <AccordionTab header="Repositorio base" >
          <Link href={cycle.boilerplate_url}>
            <a>Repositorio en GitHub</a>
          </Link>
        </AccordionTab>
      </Accordion>
    </Card>
  );
};

export default ChallengeCard;
