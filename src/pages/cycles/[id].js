import React from 'react';
import { useRouter } from 'next/router';
import CycleSection from '@components/cycle-section/cycle-section/CycleSection';
import { Skeleton } from 'primereact/skeleton';

const CyclePage = () => {
  const router = useRouter();
  const { query, isReady } = router;

  const learningUnitRedirection = (learningUnitId, isCompleted) => {
    router.push(
      `/learning-units/${learningUnitId}${isCompleted ? '' : '?not-completed'}`
    );
  };
  if (!isReady)
    return <Skeleton shape="rectangle" width="100%" height="100%" />;

  const cycleId = query.id;

  if (process.env.NODE_ENV === 'development') {
    return (
      <CycleSection
        cycleId={cycleId}
        learningUnitRedirection={learningUnitRedirection}
      />
    );
  } else {
    return <p>WIP</p>;
  }
};

export default CyclePage;
