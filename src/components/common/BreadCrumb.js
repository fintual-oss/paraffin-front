import { BreadCrumb } from 'primereact/breadcrumb';
import styles from './BreadCrumb.module.scss';

export const CycleBreadCrumb = ({ cycle }) => {
  const items = [
    { label: 'Ruta de aprendizaje', url: '/curriculums/1' },
    { label: cycle.name },
  ];

  const home = { icon: 'pi pi-home', url: '/' };

  return (
    <BreadCrumb className={styles.cycleBreadCrumb} model={items} home={home} />
  );
};
