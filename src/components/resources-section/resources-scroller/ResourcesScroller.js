import { DataScroller } from 'primereact/datascroller';
import ResourcesListItem from '../resources-list-item/ResourcesListItem';

const ResourcesScroller = ({ resources }) => {
  const itemTemplate = (resource) => <ResourcesListItem resource={resource} />;

  return <DataScroller value={resources} itemTemplate={itemTemplate} rows={10} inline />;
};

export default ResourcesScroller;
