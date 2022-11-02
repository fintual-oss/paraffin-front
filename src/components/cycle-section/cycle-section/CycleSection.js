import Head from 'next/head'
import styles from './CycleSection.module.scss';
import CycleInfoCard from '@components/cycle-section/cycle-section/CycleInfoCard';
import ChallengeCard from './ChallengeCard';
import LearningUnitsCard from './LearningUnitsCard';
import { CycleTopContainer } from './CycleTopContainer';
import { CycleBreadCrumb } from '@components/common/BreadCrumb';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { Panel } from 'primereact/panel';


const CycleSection = ({ cycleId }) => {
  const {
    data: learningUnits,
    isLoading: isLoadingUnits,
    isError: isErrorUnit,
  } = useGet(endpoints('cycleLearningUnits', cycleId));
  const {
    data: cycle,
    isLoading: isLoadingCurriculum,
    isError: isErrorCurriculum,
  } = useGet(endpoints('cycle', cycleId));

  if (isLoadingUnits || isLoadingCurriculum) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnit || isErrorCurriculum) {
    return 'error';
  }

  return (
    <>
      <Head>
        <title>{cycle.name}</title>
        <meta property="og:title" content={cycle.name} key="title"/>
      </Head>
      <CycleBreadCrumb cycle={cycle} />
      <Panel>
        <div className={styles.panelContainer}>
          <CycleTopContainer cycle={cycle} />
          <div className={styles.middleContainer}>
            <CycleInfoCard cycle={cycle}/>
            <ChallengeCard cycle={cycle}/>
          </div>
          <div className={styles.bottomContainer}>
            <LearningUnitsCard cycle={cycle} learningUnits={learningUnits}/>
          </div>
        </div>
      </Panel>
    </>
  );
};

export default CycleSection;