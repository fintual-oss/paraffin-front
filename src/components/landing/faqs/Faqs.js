import React from 'react';
import styles from './Faqs.module.scss';
import { Accordion, AccordionTab } from 'primereact/accordion';

const Faqs = () => {
  return (
    <section className={`${styles.faqs} grid`}>
      <div className={`${styles.titleSections}`}>
        <h2 className={`${styles.textCenter} ${styles.fin_font}`}>
          Preguntas frecuentes
        </h2>
      </div>
      <div className={`col-8 ${styles.faqs__accordion_wrap}`}>
        <Accordion
          activeIndex={0}
          className={`${styles.full_width} ${styles.faqsAccordion}`}
        >
          <AccordionTab header="¿Qué es Ser.dev?">
            <p>
              Ser.dev es una plataforma de aprendizaje colaborativo que te guía
              en tu camino para convertirte en desarrollador de software.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Ser.dev me sirve si nunca he programado?">
            <p>
              Ser.dev está pensado para personas que ya tienen ciertos
              conocimientos de programación pero aún no son verdaderos
              desarrolladores.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Cómo está organizado Ser.dev?">
            <p>
              Ser.dev ofrece un currículum dividido en ciclos, que a su vez se
              dividen en unidades, cada una compuesta por varios recursos que te
              permitirán ir aprendiendo paso a paso todo lo que necesitas saber.
            </p>
          </AccordionTab>
          <AccordionTab header="¿Ser.dev es gratis?">
            <p>
              Ser.dev es totalmente gratuita; sin embargo, debes considerar que
              algunos de los recursos que la comunidad aporta podrían ser de
              pago. Esto se indicará en las etiquetas de cada recurso. De todos
              modos, siempre trataremos de asegurar que existan recursos
              equivalentes gratuitos.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
