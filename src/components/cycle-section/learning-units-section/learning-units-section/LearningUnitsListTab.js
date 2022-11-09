import { Panel } from 'primereact/panel';
import LearningUnitsList from '../learning-units-list/LearningUnitsList';
import styles from './LearningUnitListTab.module.scss';

const LearningUnitsListTab = ({ learningUnits, mutate }) => {
  return (
    <div className={styles.panelContainer}>
      <Panel>
        <LearningUnitsList learningUnits={learningUnits} mutate={mutate} />
      </Panel>
    </div>
  );
};

export default LearningUnitsListTab;
