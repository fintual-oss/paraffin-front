import { useState } from 'react';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import Link from 'next/link';
import style from './CyclesSection.module.scss';

const CyclesSection = ({ curriculumId }) => {
  const {
    data: cycles,
    isLoading: isLoadingCurriculum,
    isError: isErrorCurriculum,
  } = useGet(endpoints('cyclesOfCurriculum', curriculumId));

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [activeGoalId, setActiveGoalId] = useState('');
  const [goals, setGoals] = useState('');

  if (isLoadingCurriculum) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorCurriculum) {
    return 'error';
  }

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

  if (goals == '') {
    setGoals(ordered_cycles[0].learning_goals_description);
  }
  if (activeGoalId == '') {
    setActiveGoalId(ordered_cycles[0].id);
  }
  const goalsArray = goals?.split('\\n');

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
          <h2>Objetivos de aprendizaje</h2>
          <ul>
            {goalsArray.map((str) => (
              <li key={`goal-${goalsArray.indexOf(str)}`}>{str}</li>
            )) ?? null}
          </ul>
        </div>
        <Link href={`/cycles/${activeGoalId}`} className={`${style.flex_item}`}>
          <Button label="Ver ciclo" />
        </Link>
      </div>
    </>
  );
};

export default CyclesSection;
