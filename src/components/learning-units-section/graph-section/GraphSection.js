import React from 'react';
import dynamic from 'next/dynamic';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';

const Graph = dynamic(
  () => import('@components/learning-units-section/graph/Graph'),
  {
    ssr: false,
  }
);

const GraphSection = ({ cycleId, handleNodeClick }) => {
  const {
    data: successions,
    isLoading: isLoadingSuccessions,
    isError: isErrorSuccessions,
  } = useGet(endpoints('learningUnitSuccessions', cycleId));

  const {
    data: learningUnits,
    isLoading: isLoadingLearningUnits,
    isError: isErrorLearningUnits,
  } = useGet(endpoints('learningUnitsOfCycle', cycleId));

  if (isLoadingSuccessions || isLoadingLearningUnits) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }

  if (isErrorSuccessions || isErrorLearningUnits) {
    return 'error';
  }

  const edges = successions.map((succession) => ({
    source: succession['predecessor_id'].toString(),
    target: succession['successor_id'].toString(),
    id: `${succession['predecessor_id']}-${succession['successor_id']}`,
  }));

  const nodes = learningUnits.map((learningUnit) => ({
    id: learningUnit.id.toString(),
    label: learningUnit.name,
  }));

  let nodePredecessors = {};
  nodes.forEach((node) => {
    let nodesToSelect = [node.id];
    let edgesToSelect = [];
    let count = 1;
    while (count > 0) {
      count = 0;
      nodesToSelect.forEach((node_id) => {
        edges.forEach((edge) => {
          if (edge.target === node_id && !edgesToSelect.includes(edge.id)) {
            edgesToSelect.push(edge.id);
            if (!nodesToSelect.includes(edge.source)) {
              nodesToSelect.push(edge.source);
            }
            count += 1;
          }
        });
      });
    }
    nodePredecessors[node.id] = nodesToSelect.concat(edgesToSelect);
  });

  return (
    <Graph
      nodes={nodes}
      edges={edges}
      nodePredecessors={nodePredecessors}
      handleNodeClick={handleNodeClick}
    />
  );
};

export default GraphSection;
