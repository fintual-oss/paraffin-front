import { Button } from 'primereact/button';
import icons from '@utils/icons';
import styles from './ResourceLabels.module.scss';

const DisplayLabel = ({ label }) => (
  <Button
    icon={icons(label.name)}
    className={'p-button-rounded p-button-outline'}
    tooltip={label.description}
    iconPos="center"
    aria-label="Label"
    disabled
    tooltipOptions={{ showOnDisabled: true }}
  />
);

const ResourceLabels = ({ resourceLabels }) => {
  const hasNoLabels = resourceLabels.length === 0;

  if (hasNoLabels) return;

  return (
    <div className={styles.resourceLabels}>
      {resourceLabels.map((label) => (
        <DisplayLabel label={label} key={label.id} />
      ))}
    </div>
  );
};

export default ResourceLabels;
