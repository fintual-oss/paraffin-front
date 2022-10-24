import { Button } from 'primereact/button';
import Average from '../average/Average';
import styles from './ResourcesListItem.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import profilePic from '@utils/images/resource.jpg';

const ResourcesListItem = ({ resource, resourceViewButtonHandler }) => {
  return (
    <div>
      <div className={styles.resourceGridItem}>
        <div className={styles.resourceListItem}>
          <Image className={styles.img} src={profilePic} alt={resource.name} />
          <div>
            <div className={styles.resourceName}>
              <Link href={`/resources/${resource.id}`}>{resource.name}</Link>
            </div>
            <div className={styles.resourceValidation}>
              <Average
                average={parseFloat(resource.average_evaluation).toFixed(1)}
              />
              <span className={styles.small_number}>
                ({resource.number_of_evaluations})
              </span>
            </div>
            <div className={styles.resourceUrl}>
              <i className="pi pi-link"></i>
              <a href={resource.url} target="_blank" rel="noreferrer">
                Enlace del recurso
              </a>
            </div>
            <div className={styles.resourceLink}>
              <Button
                label="Ver recurso"
                icon="pi pi-book"
                className="p-button-outlined p-button-sm"
                onClick={() => resourceViewButtonHandler(resource)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesListItem;
