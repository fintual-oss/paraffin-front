import Head from 'next/head';
import styles from './CycleSection.module.scss';
import CycleInfoCard from '@components/cycle-section/cycle-section/CycleInfoCard';
import ChallengeCard from './ChallengeCard';
import Error from './error';
import { CycleTopContainer } from './CycleTopContainer';
import { CycleBreadCrumb } from '@components/common/BreadCrumb';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { Panel } from 'primereact/panel';
import LearningUnitsSection from './LearningUnitsSection';

const CycleSection = ({ cycleId, handleLearningUnitRedirection }) => {
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
          <CycleTopContainer cycle={cycle} />
          <div className={styles.middleContainer}>
            <CycleInfoCard cycle={cycle} />
            <ChallengeCard cycle={cycle} />
          </div>
          <div className={styles.bottomContainer}>
            <LearningUnitsSection
              learningUnits={learningUnits}
              successions={successions}
              handleLearningUnitClick={(learningUnitId, isCompleted) =>
                handleLearningUnitRedirection(learningUnitId, isCompleted)
              }
            />
          </div>
        </div>
      </Panel>
    </>
  );
};

export default CycleSection;