import React from 'react';
import IMAGES from '@components/images/images';
import Fade from 'react-reveal/Fade';
import styles from './Problem.module.scss';
import ProblemCard from './ProblemCard';

const Problem = () => {
  return (
    <section id={`${styles.problem}`} className={`grid`}>
      <div className={`${styles.titleSections}`}>
        <Fade bottom>
          <h2 className={`${styles.textCenter}`}>
            ¿Por dónde comienzo mi estudio para ser.dev?
          </h2>
        </Fade>
      </div>
      <ProblemCard
        imgCard={IMAGES.humaaans_3}
        altImg="Todo está en Internet"
        title="Todo está en Internet"
        description="Hoy en día puedes encontrar todo lo que necesitas en internet. Si tu intención es convertirte en dev, dispones de una gran cantidad de recursos en línea. ¿Pero cómo puedes determinar si la información que encuentras en verdad es valiosa y será útil para tu formación? E incluso, ¿cómo puedes saber por dónde empezar a buscar?"
      />
      <ProblemCard
        imgCard={IMAGES.humaaan_1}
        altImg="Parálisis por análisis"
        title="Parálisis por análisis"
        description="¿Alguna vez te ha pasado que pasas horas decidiendo qué película o serie ver, y al final no ves ninguna? En un mundo donde tenemos tanta información al alcance de nuestras manos, llega a ser difícil decidir con cuál quedarnos. Este exceso de información puede paralizarnos y hasta hacer que dejemos nuestro estudio de lado."
      />
      <ProblemCard
        imgCard={IMAGES.humaaans_2}
        altImg="¿Con qué continúo?"
        title="¿Con qué continúo?"
        description="Podría pasar que encuentres un recurso excelente y lo sigas de principio a fin, pero probablemente al terminarlo no sabrás hacia dónde continuar. Internet está lleno de recursos sin conexión que no te marcan un camino que seguir. ¿Deberías seguir con el mismo tema en un nivel más avanzado? ¿O deberías empezar con un tema nuevo?"
      />
    </section>
  );
};

export default Problem;
