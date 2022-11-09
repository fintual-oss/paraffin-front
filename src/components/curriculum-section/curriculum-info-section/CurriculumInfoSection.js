import { Panel } from 'primereact/panel';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import CyclesSection from '../cycles-list/CyclesSection';
import Image from 'next/image';
import { Card } from 'primereact/card';
import style from './CurriculumInfoSection.module.scss';
import laptopImage from '@utils/images/person-laptop.png';

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

  return (
    <Panel header={curriculum.name}>
      <div className={style.row}>
        <Card className={style.leftColumn}>
          <div className={style.row}>
            <Image
              src={laptopImage}
              alt="img_curriculum"
              width="330"
              height="220"
            />
            <p className={style.paragrapText}>{curriculum.description}</p>
          </div>
        </Card>
        <Card className={style.rightColumn}>
          <CyclesSection cycles={cycles} />
        </Card>
      </div>
    </Panel>
  );
};

export default CurriculumInfoSection;
