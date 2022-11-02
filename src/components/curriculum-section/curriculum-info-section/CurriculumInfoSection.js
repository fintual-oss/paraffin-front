import { Panel } from 'primereact/panel';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import CyclesSection from '../cycles-list/CyclesSection';
import CurriculumHeader from './CurriculumHeader';

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
  return (
    <>
      <Panel
        header=<CurriculumHeader curriculumName={curriculum?.name ?? null} />
      >
        <p>
          Aquí pondría la descripción del curriculum, pero la API no la entrega.
          Lo dejamos harcodeado o ké?
        </p>
        <CyclesSection curriculumId={curriculumId} />
      </Panel>
    </>
  );
};

export default CurriculumInfoSection;
