import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';
import LinkButton from '@components/resource-section/link-button/LinkButton';
import AddEvaluation from '@components/resource-section/add-evaluation/AddEvaluation';
import Average from '@components/resources-section/average/Average';
import EvaluationList from '@components/resource-section/evaluation-list/EvaluationList';
import ResourceCompleteButton from '@components/resource-section/resource-complete-button/ResourceCompleteButton';

const ResourceSidebar = ({
  onHideHandler,
  activeResource,
  updatesAddEvaluation,
  resourceId,
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
      <ResourceCompleteButton
        completed={activeResource.completed}
        resourceId={resourceId}
      />
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        <Average
          average={parseFloat(activeResource.average_evaluation).toFixed(1)}
        />
        <LinkButton url={activeResource.url} />
      </Card>
      <AddEvaluation
        updatesAddEvaluation={updatesAddEvaluation}
        resourceId={resourceId}
      />
      <EvaluationList evaluationsData={evaluations} />
    </Sidebar>
  );
};
export default ResourceSidebar;
