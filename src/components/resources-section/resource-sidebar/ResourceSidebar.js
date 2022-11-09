import { Sidebar } from 'primereact/sidebar';
import { Card } from 'primereact/card';
import { CompleteToggle } from '@components/common/complete-toggle/CompleteToggle';
import LinkButton from '@components/common/link-button/LinkButton';
import AddEvaluation from '@components/resource-section/add-evaluation/AddEvaluation';
import Average from '@components/resources-section/average/Average';
import EvaluationList from '@components/resource-section/evaluation-list/EvaluationList';

const ResourceSidebar = ({
  onHideHandler,
  activeResource,
  updatesAddEvaluation,
  resourceId,
  evaluations,
  checkboxChangeHandler,
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
      <CompleteToggle
        completed={activeResource.completed}
        onChangeHandler={checkboxChangeHandler}
      />
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        <Average
          average={parseFloat(activeResource.average_evaluation).toFixed(1)}
        />
        <LinkButton url={activeResource.url} label="Ir a recurso" />
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
