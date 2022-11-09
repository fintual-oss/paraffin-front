import { Button } from 'primereact/button';
import styles from './LinkButton.module.scss';

const LinkButton = ({ url, label }) => {
  if (!url) return <></>;

  return (
    <p>
      <a className={styles.link} href={url} target="_blank" rel="noreferrer">
        <Button icon="pi pi-external-link" label={label}></Button>
      </a>
    </p>
  );
};

export default LinkButton;
