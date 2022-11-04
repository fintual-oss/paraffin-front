import { Panel } from 'primereact/panel';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import CyclesSection from '../cycles-list/CyclesSection';
import CurriculumHeader from './CurriculumHeader';
import person_looking_curriculum from '@utils/images/person_looking_curriculum.png';
import Image from 'next/future/image';
import style from './CurriculumInfoSection.module.scss';

const CurriculumInfoSection = ({ curriculumId }) => {
  const {
    data: curriculum,
    isLoading: isLoadingCurriculum,
    isError: isErrorCurriculum,
  } = useGet(endpoints('curriculum', curriculumId));

  if (isLoadingCurriculum) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorCurriculum) {
    return 'error';
  }
  const paragraphsArray = curriculum?.description?.split('\\n');
  return (
    <>
      <Panel
        header=<CurriculumHeader curriculumName={curriculum?.name ?? null} />
      >
        <div className={`${style.flex_container}`}>
          <Image
            className={`${style.curriculum_image} ${style.flex_item}`}
            src={person_looking_curriculum}
            alt="drawed person looking curriculum"
          />
          <p className={`${style.flex_item}`}>
            {paragraphsArray?.map((paragraph) => (
              <p key={`paragraph-${paragraphsArray.indexOf(paragraph)}`}>
                {paragraph}
              </p>
            )) ?? null}
            {'\n'}
            <i>
              Explora los ciclos de desarrollo y sus objetivos de aprendizaje
              más abajo.
            </i>
          </p>
        </div>
        <CyclesSection curriculumId={curriculumId} />
      </Panel>
    </>
  );
};

export default CurriculumInfoSection;
