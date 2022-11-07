import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';
import LinkButton from '@components/resource-section/link-button/LinkButton';
import AddEvaluation from '@components/resource-section/add-evaluation/AddEvaluation';
import Average from '@components/resources-section/average/Average';
import EvaluationList from '@components/resource-section/evaluation-list/EvaluationList';

const ResourceSidebar = ({
  onHideHandler,
  activeResource,
  formOptions,
  evaluations,
}) => {
  return (
    <Sidebar
      visible={true}
      position="right"
      onHide={() => onHideHandler()}
      modal={false}
      dismissable={false}
      style={{ width: '25%' }}
    >
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        <Average average={activeResource.average_evaluation} />
        <LinkButton url={activeResource.url} />
      </Card>
      <AddEvaluation formOptions={formOptions} />
      <EvaluationList evaluationsData={evaluations} />
    </Sidebar>
  );
};
export default ResourceSidebar;
