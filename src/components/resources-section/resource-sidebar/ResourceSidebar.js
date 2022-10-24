import { Sidebar } from 'primereact/sidebar';
import LinkButton from '@components/learning-units-section/link-button/LinkButton';
import { Card } from 'primereact/card';
import AddEvaluation from '@components/resource-section/add-evaluation/AddEvaluation';

const ResourceSidebar = ({ visible, onHideHandler, activeResource, formOptions }) => {
  return (
    <Sidebar visible={visible} position="right" onHide={() => onHideHandler()}>
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        {parseFloat(activeResource.average_evaluation).toFixed(1)} <i class="pi pi-star-fill"></i>
        <LinkButton url={activeResource.url} />
      </Card>
      <AddEvaluation formOptions={formOptions} />
    </Sidebar>
  );
};
export default ResourceSidebar;
