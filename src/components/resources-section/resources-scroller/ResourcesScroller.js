import { DataScroller } from 'primereact/datascroller';
import ResourcesListItem from '../resources-list-item/ResourcesListItem';
import styles from './ResourceScroller.module.scss';

const ResourcesScroller = ({ resources, resourceViewButtonHandler }) => {
  const itemTemplate = (resource) => (
    <ResourcesListItem
      resource={resource}
      resourceViewButtonHandler={resourceViewButtonHandler}
    />
  );

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
