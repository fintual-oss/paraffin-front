import ResourcesSection from '@components/resources-section/resources-section/ResourcesSection';
import { endpoints } from '@utils/endpoints';

const LearningUnitPage = (props) => {
  const { learningUnit, resources, isError } = props;
  const resourceList = resources;

  return (
    <ResourcesSection
      learningUnit={learningUnit}
      resources={resourceList}
      isError={isError}
    />
  );
};

export default LearningUnitPage;

export async function getServerSideProps(context) {
  const learningUnitId = context.query.id;

  const resUnit = await fetch(endpoints('learningUnit', learningUnitId));
  const learningUnit = await resUnit.json();

  const resResource = await fetch(
    endpoints('learningUnitResources', learningUnitId)
  );
  const resources = await resResource.json();
  const isErrorUnit = learningUnit ? null : true;
  const isErrorResources = resources ? null : true;
  const isError = isErrorUnit || isErrorResources;

  return {
    props: {
      learningUnit: learningUnit,
      resources: resources,
      isError: isError,
    },
  };
}
