import React from 'react';
import dynamic from 'next/dynamic';

const Graph = dynamic(
  () => import('@components/cycle-section/learning-units-section/graph/Graph'),
  {
    ssr: false,
  }
);

const LearningUnitsGraph = ({
  handleNodeClick,
  learningUnits,
  successions,
}) => {
  const edges = successions.map((succession) => ({
    source: succession['predecessor_id'].toString(),
    target: succession['successor_id'].toString(),
    id: `${succession['predecessor_id']}-${succession['successor_id']}`,
  }));

  const nodes = learningUnits.map((learningUnit) => ({
    id: learningUnit.id.toString(),
    label: learningUnit.name,
  }));

  const handleClick = (id) => {
    let isCompleted = true;
    nodePredecessors[id].every((element) => {
      if (!element.includes('-')) {
        isCompleted = learningUnits.find(
          (learningUnit) => learningUnit.id.toString() === element
        )['completed'];
        if (!isCompleted) {
          handleNodeClick(id, isCompleted);
          return isCompleted;
        }
      }
    });
  };

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
      handleNodeClick={(id) => handleClick(id)}
    />
  );
};

export default LearningUnitsGraph;
