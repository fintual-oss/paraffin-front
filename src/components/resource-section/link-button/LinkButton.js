import { Button } from 'primereact/button';
import styles from './LinkButton.module.scss';

const LinkButton = ({ url }) => {
  if (!url) return <></>;

  return (
    <p>
      <a className={styles.link} href={url} target="_blank" rel="noreferrer">
        <Button icon="pi pi-external-link" label={'Ir a recurso'}></Button>
      </a>
    </p>
  );
};

export default LinkButton;
