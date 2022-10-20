import { Sidebar } from 'primereact/sidebar';
import LinkButton from './LinkButton';
import { Card } from 'primereact/card';

const ResourceSidebar = ({ visible, onHideHandler, activeResource }) => {
  return (
    <Sidebar visible={visible} position="right" onHide={() => onHideHandler()}>
      <h1>{activeResource.name}</h1>
      <Card title="Evaluación promedio">
        {activeResource.average_evaluation} <i class="pi pi-star-fill"></i>
      </Card>
      <LinkButton url={activeResource.url} />
    </Sidebar>
  );
};
export default ResourceSidebar;
