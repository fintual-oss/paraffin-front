import { Sidebar } from 'primereact/sidebar';
import LinkButton from '@components/learning-units-section/link-button/LinkButton';
import { Card } from 'primereact/card';

const ResourceSidebar = ({ visible, onHideHandler, activeResource }) => {
  return (
    <Sidebar visible={visible} position="right" onHide={() => onHideHandler()}>
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        {parseFloat(activeResource.average_evaluation).toFixed(1)} <i class="pi pi-star-fill"></i>
      </Card>
      <LinkButton url={activeResource.url} />
    </Sidebar>
  );
};
export default ResourceSidebar;
