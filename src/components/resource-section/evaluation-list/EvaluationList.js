import { VirtualScroller } from 'primereact/virtualscroller';
import ResourceEvaluationComment from '../../resource-evaluation-comment/ResourceEvaluationComment';

const EvaluationList = ({ evaluationsData }) => {
  const renderComments = (evaluation) => (
    <ResourceEvaluationComment evaluation={evaluation} />
  );

  return (
    <VirtualScroller
      items={evaluationsData}
      itemTemplate={renderComments}
      header="Comentarios"
    />
  );
};

export default EvaluationList;
