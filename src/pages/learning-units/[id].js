import ResourcesSection from '@components/resources-section/resources-section/ResourcesSection';
import { endpoints } from '@utils/endpoints';
import axios from 'axios';
import { Message } from 'primereact/message';
import { useRouter } from 'next/router';

const LearningUnitPage = (props) => {
  const Alert = ({ isPathCompleted, className }) => {
    if (!isPathCompleted) {
      return (
        <Message
          className={className}
          severity="warn"
          text="No has completado todas las unidades previas a esta."
        />
      );
    }
  };
  const { query, isReady } = useRouter();
  let isPathCompleted = false;
  console.log(query);
  if (isReady) {
    isPathCompleted = !('not-completed' in query);
  }
  const { learningUnit, resources, isError } = props;
  const resourceList = resources;
  return (
    <>
      <Alert isPathCompleted={isPathCompleted} className={'flex'} />
      <ResourcesSection
        learningUnit={learningUnit}
        resources={resourceList}
        isError={isError}
      />
    </>
  );
};

export default LearningUnitPage;

export async function getServerSideProps(context) {
  const learningUnitId = context.query.id;

  const resUnit = await axios.get(endpoints('learningUnit', learningUnitId));
  const learningUnit = await resUnit.data;

  const resResource = await axios.get(
    endpoints('learningUnitResources', learningUnitId)
  );
  const resources = await resResource.data;
  const isErrorUnit = learningUnit ? false : true;
  const isErrorResources = resources ? false : true;
  const isError = isErrorUnit || isErrorResources;

  return {
    props: {
      learningUnit: learningUnit,
      resources: resources,
      isError: isError,
    },
  };
}
