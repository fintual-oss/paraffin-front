import Head from 'next/head';
import styles from './CycleSection.module.scss';
import CycleInfoCard from '@components/cycle-section/cycle-section/CycleInfoCard';
import ChallengeCard from './ChallengeCard';
import Error from '@components/common/Error';
import { CycleTopContainer } from './CycleTopContainer';
import { CycleBreadCrumb } from '@components/common/BreadCrumb';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { useRef } from 'react';
import { Panel } from 'primereact/panel';
import LearningUnitsSection from './LearningUnitsSection';

const CycleSection = ({ cycleId, learningUnitRedirection }) => {
  const {
    data: learningUnits,
    isLoading: isLoadingLearningUnits,
    isError: isErrorLearningUnits,
    mutate: mutateLearningUnits,
  } = useGet(endpoints('cycleLearningUnits', cycleId));
  const {
    data: cycle,
    isLoading: isLoadingCycle,
    isError: isErrorCycle,
    mutate: mutateCycle,
  } = useGet(endpoints('cycle', cycleId));
  const {
    data: successions,
    isLoading: isLoadingSuccessions,
    isError: isErrorSuccessions,
    mutate: mutateSuccessions,
  } = useGet(endpoints('learningUnitSuccessions', cycleId));

  const completedCycleEndpoint = endpoints('completeCycle', cycleId);
  const completeCycle = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(completedCycleEndpoint, requestOptions);

    if (response.ok) {
      mutateCycle();
      showSuccess();
    } else {
      showError();
    }
  };
  const toastCompletition = useRef(null);
  const showSuccess = () => {
    toastCompletition.current.show({
      severity: 'success',
      summary: 'Hurra! Se ha marcado el ciclo como completado',
      life: 2000,
    });
  };
  const showError = () => {
    toastCompletition.current.show({
      severity: 'error',
      summary: 'Primero debes completar todas las unidades del ciclo',
      life: 2000,
    });
  };

  if (isLoadingLearningUnits || isLoadingCycle || isLoadingSuccessions) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorLearningUnits) return <Error reset={mutateLearningUnits} />;
  if (isErrorCycle) return <Error reset={mutateCycle} />;
  if (isErrorSuccessions) return <Error reset={mutateSuccessions} />;

  return (
    <>
      <Head>
        <title>{cycle.name}</title>
        <meta property="og:title" content={cycle.name} key="title" />
      </Head>
      <CycleBreadCrumb cycle={cycle} />
      <Panel>
        <div className={styles.panelContainer}>
          <CycleTopContainer
            cycle={cycle}
            completeCycle={completeCycle}
            toastCompletition={toastCompletition}
          />
          <div className={styles.middleContainer}>
            <CycleInfoCard cycle={cycle} />
            <ChallengeCard cycle={cycle} />
          </div>
          <div className={styles.bottomContainer}>
            <LearningUnitsSection
              learningUnits={learningUnits}
              successions={successions}
              handleLearningUnitClick={learningUnitRedirection}
              mutate={mutateLearningUnits}
            />
          </div>
        </div>
      </Panel>
    </>
  );
};

export default CycleSection;
