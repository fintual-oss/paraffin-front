import { Card } from 'primereact/card';
import LinkButton from '@components/resource-section/link-button/LinkButton';
import AddEvaluation from '@components/resource-section/add-evaluation/AddEvaluation';
import Average from '@components/resources-section/average/Average';
import styles from './ResourceSidebar.module.scss';

const ResourceSidebar = ({ visible, onHideHandler, activeResource, formOptions }) => {
  if (!visible) {
    return <></>;
  }
  return (
    <Card>
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        <Average average={activeResource.average_evaluation} />
        <LinkButton url={activeResource.url} />
      </Card>
      <AddEvaluation formOptions={formOptions} />
    </Card>
  );
};
export default ResourceSidebar;
