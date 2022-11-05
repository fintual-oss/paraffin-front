import { useState } from 'react';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import Link from 'next/link';
import style from './CyclesSection.module.scss';

const CyclesSection = ({ cycles }) => {
  const ordered_cycles = cycles.sort(function (a, b) {
    return a.order_number - b.order_number;
  });

  const items = ordered_cycles.map((c) => ({
    label: c.name,
    command: () => {
      setGoals(c.learning_goals_description);
      setActiveGoalId(c.id);
    },
  }));

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeGoalId, setActiveGoalId] = useState(ordered_cycles[0].id);
  const [goals, setGoals] = useState(
    ordered_cycles[0].learning_goals_description
  );

  const goalsArray = goals?.split('\\n');
  const GoalsDescription = () => {
    return (
      <>
        <h2>Objetivos de aprendizaje</h2>
        <ul>
          {goalsArray.map((str) => (
            <li key={`goal-${goalsArray.indexOf(str)}`}>{str}</li>
          )) ?? null}
        </ul>
      </>
    );
  };

  return (
    <>
      <h1>Ciclos de desarrollo</h1>
      <Steps
        model={items}
        activeIndex={activeStepIndex}
        onSelect={(e) => setActiveStepIndex(e.index)}
        readOnly={false}
        className={`${style.stepper}`}
      />
      <div className={`${style.flex_container}`}>
        <div className={`${style.flex_item}`}>
          <GoalsDescription />
        </div>
        <Link href={`/cycles/${activeGoalId}`} className={`${style.flex_item}`}>
          <Button label="Ver ciclo" />
        </Link>
      </div>
    </>
  );
};

export default CyclesSection;
