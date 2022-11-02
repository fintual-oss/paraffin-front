import React from 'react';
import SolutionCard from './SolutionCard';
import Fade from 'react-reveal/Fade';
import IMAGES from '@components/images/images';
import styles from './Solution.module.scss';

const solution = () => {
  return (
    <section className={`${styles.solution} grid`}>
      <div className={`${styles.titleSections}`}>
        <Fade>
          <h2 className={`${styles.textCenter} ${styles.fin_font}`}>
            ser.dev
          </h2>
        </Fade>
      </div>
      <div className={`${styles.c} grid`}>
        <div className={`col-12 ${styles.solution__card_wrap}`}>
          <SolutionCard
            imgCard={IMAGES.humaaans_4}
            classCard={styles.column_info_card_right}
            altImg="Logo"
            title="Plataforma colaborativa"
            description="Es la plataforma colaborativa que te permite seguir un camino concreto para convertirte en un verdadero desarrollador de software. Los usuarios aportan con recursos para aprender sobre distintos temas, pueden evaluar dichos recursos y dejar sus comentarios para guiar mejor tu aprendizaje, ayudándote a elegir los mejores recursos."
          />

          <SolutionCard
            imgCard={IMAGES.statics}
            classCard={styles.column_info_card_left}
            altImg="Logo"
            title="Contenido variado y de calidad garantizada"
            description="Te entrega contenido variado y de calidad garantizada para poder aprender paso a paso. Nuestros recursos están organizados en Learnings Units para corresponder a un tema específico. A su vez, cada Learning Unit pertenece a un ciclo que definirá el paso a paso de tu formación."
          />

          <SolutionCard
            imgCard={IMAGES.space}
            classCard={styles.column_info_card_right}
            altImg="Logo"
            title="Gratuita"
            description="Es gratuita y está pensada para todas aquellas personas que tienen conocimientos básicos de programación, pero aún necesitan un impulso más para subir de nivel. Ser.dev es la profesión más demandada del mundo y te abrirá un sinnúmero de oportunidades de crecimiento personal y profesional."
          />
        </div>
      </div>
    </section>
  );
};

export default solution;
