import ResourcesListItem from '@components/resources-section/resources-list-item/ResourcesListItem';
import { DataView } from 'primereact/dataview';

const ResourcesList = ({ resources }) => {
  const renderGridItem = (resource) => <ResourcesListItem resource={resource} />;

  return (
    <>
      <DataView value={resources} layout="grid" itemTemplate={renderGridItem} paginator rows={8} sortOrder={-1} sortField="average_evaluation" />
    </>
  );
};

export default ResourcesList;
