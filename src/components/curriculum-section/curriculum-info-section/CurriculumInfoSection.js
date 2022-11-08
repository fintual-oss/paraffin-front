import { Panel } from 'primereact/panel';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import CyclesSection from '../cycles-list/CyclesSection';
import CurriculumHeader from './CurriculumHeader';
import person_looking_curriculum from '@utils/images/person_looking_curriculum.png';
import Image from 'next/future/image';
import style from './CurriculumInfoSection.module.scss';
import Head from 'next/head';

const CurriculumInfoSection = ({ curriculumId }) => {
  const {
    data: curriculum,
    isLoading: isLoadingCurriculum,
    isError: isErrorCurriculum,
  } = useGet(endpoints('curriculum', curriculumId));

  const {
    data: cycles,
    isLoading: isLoadingCurriculumCycles,
    isError: isErrorCurriculumCycles,
  } = useGet(endpoints('cyclesOfCurriculum', curriculumId));

  if (isLoadingCurriculum || isLoadingCurriculumCycles) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorCurriculum || isErrorCurriculumCycles) {
    return 'error';
  }
  const paragraphsArray = curriculum?.description?.split('\\n');
  const CurriculumDescription = () => {
    return (
      <>
        <Head>
          <title>{curriculum.name}</title>
          <meta property="og:title" content={curriculum.name} key="title" />
        </Head>
        <div className={style.flex_item}>
          {paragraphsArray?.map((paragraph) => (
            <p key={`paragraph-${paragraphsArray.indexOf(paragraph)}`}>
              {paragraph}
            </p>
          )) ?? null}
          {'\n'}
          <i>
            Explora los ciclos de desarrollo y sus objetivos de aprendizaje más
            abajo.
          </i>
        </div>
      </>
    );
  };

  return (
    <>
      <Panel
        header=<CurriculumHeader curriculumName={curriculum?.name ?? null} />
      >
        <div className={style.flex_container}>
          <div className={style.flex_container}>
            <CurriculumDescription />
            <Image
              className={`${style.curriculum_image} ${style.flex_item}`}
              src={person_looking_curriculum}
              alt="drawed person looking curriculum"
            />
          </div>
          <CyclesSection cycles={cycles} />
        </div>
      </Panel>
    </>
  );
};

export default CurriculumInfoSection;
