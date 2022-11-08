import Head from 'next/head';
import styles from './CycleSection.module.scss';
import CycleInfoCard from '@components/cycle-section/cycle-section/CycleInfoCard';
import ChallengeCard from './ChallengeCard';
import LearningUnitsCard from './LearningUnitsCard';
import Error from './error';
import { CycleTopContainer } from './CycleTopContainer';
import { CycleBreadCrumb } from '@components/common/BreadCrumb';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { useRef } from 'react';
import { Panel } from 'primereact/panel';

const CycleSection = ({ cycleId }) => {
  const {
    data: learningUnits,
    isLoading: isLoadingUnits,
    isError: isErrorUnits,
    mutate: mutateUnits,
  } = useGet(endpoints('cycleLearningUnits', cycleId));
  const {
    data: cycle,
    isLoading: isLoadingCurriculum,
    isError: isErrorCurriculum,
    mutate: mutateCurriculum,
  } = useGet(endpoints('cycle', cycleId));

  const completedCycleEndpoint = endpoints('completeCycle', cycleId);
  const completeCycle = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(completedCycleEndpoint, requestOptions);

    if (response.ok) {
      mutateCurriculum();
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
      summary: 'Primero debes completar todos los learning units',
      life: 2000,
    });
  };

  if (isLoadingUnits || isLoadingCurriculum) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnits) return <Error reset={mutateUnits} />;
  if (isErrorCurriculum) return <Error reset={mutateCurriculum} />;

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
            <LearningUnitsCard cycle={cycle} learningUnits={learningUnits} />
          </div>
        </div>
      </Panel>
    </>
  );
};

export default CycleSection;
