import ResourcesListItem from '@components/resources-section/resources-list-item/ResourcesListItem';
import { DataView } from 'primereact/dataview';

const ResourcesList = ({ resources, resourceViewButtonHandler }) => {
  const renderGridItem = (resource) => <ResourcesListItem resource={resource} resourceViewButtonHandler={resourceViewButtonHandler} />;

  return (
    <>
      <DataView value={resources} layout="grid" itemTemplate={renderGridItem} paginator rows={8} sortOrder={-1} sortField="average_evaluation" />
    </>
  );
};

export default ResourcesList;
