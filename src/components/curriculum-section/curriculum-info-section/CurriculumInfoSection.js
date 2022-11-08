import { Panel } from 'primereact/panel';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import CyclesSection from '../cycles-list/CyclesSection';
import { Image } from 'primereact/image';
import style from './CurriculumInfoSection.module.scss';
import laptopImage from "../../../utils/images/person-laptop.png"

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
            <div className={style.column}>
              <CyclesSection cycles={cycles} />  
            </div>
            <div className={style.column}>
              <div className={style.row}>
                <Image src={laptopImage.src} alt="img_curriculum"  className={style.image} /> 
          
                <p className={style.paragrapText}>
                  {curriculum.description}
                </p>

              </div> 
            </div>
          </div>
      </Panel>
  );
};

export default CurriculumInfoSection;
