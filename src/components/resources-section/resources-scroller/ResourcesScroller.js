import { DataScroller } from 'primereact/datascroller';
import ResourcesListItem from '../resources-list-item/ResourcesListItem';
import styles from './ResourceScroller.module.scss';

const ResourcesScroller = ({ resources }) => {
  const itemTemplate = (resource) => <ResourcesListItem resource={resource} />;

  return (
    <DataScroller
      className={styles.myScroller}
      value={resources}
      itemTemplate={itemTemplate}
      rows={10}
    />
  );
};

export default ResourcesScroller;
