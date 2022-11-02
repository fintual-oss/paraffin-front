import { useState } from 'react';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { Steps } from 'primereact/steps';
import { Button } from 'primereact/button';
import Link from 'next/link';

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

  return (
    <>
      <h2>Ciclos de aprendizaje</h2>
      <Steps
        model={items}
        activeIndex={activeStepIndex}
        onSelect={(e) => setActiveStepIndex(e.index)}
        readOnly={false}
      />
      <div>
        <i>Objetivos de aprendizaje</i>
        <p>{goals}</p>
        <Link href={`cycles/${activeGoalId}`}>
          <Button label="Ver ciclo" />
        </Link>
      </div>
    </>
  );
};

export default CyclesSection;
