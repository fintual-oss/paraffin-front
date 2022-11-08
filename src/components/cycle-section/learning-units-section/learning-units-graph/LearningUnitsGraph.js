import React from 'react';
import dynamic from 'next/dynamic';

const Graph = dynamic(
  () => import('@components/cycle-section/learning-units-section/graph/Graph'),
  {
    ssr: false,
  }
);

const LearningUnitsGraph = ({
  handleLearningUnitClick,
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

  function isAGraphEdge(graphElement) {
    return graphElement.includes('-');
  }

  const nodePredecessors = setNodePredecessors(nodes, edges);

  function setNodePredecessors(nodes, edges) {
    let nodePredecessors = {};
    nodes.forEach((node) => {
      nodePredecessors[node.id] = setPredecessorsOfASingleNode(
        node,
        nodes,
        edges
      );
    });
    return nodePredecessors;
  }

  function setPredecessorsOfASingleNode(node, nodes, edges) {
    let nodesToSelect = [node.id];
    let edgesToSelect = [];
    let newChanges = true;
    while (newChanges) {
      newChanges = false;
      nodesToSelect.forEach((node_id) => {
        edges.forEach((edge) => {
          [nodesToSelect, edgesToSelect, newChanges] = pushPredecessorsIfNew(
            edge,
            node_id,
            nodesToSelect,
            edgesToSelect
          );
        });
      });
    }
    return nodesToSelect.concat(edgesToSelect);
  }

  function pushPredecessorsIfNew(edge, node_id, nodesToSelect, edgesToSelect) {
    let newChanges = false;
    if (edge.target === node_id && !edgesToSelect.includes(edge.id)) {
      edgesToSelect.push(edge.id);
      if (!nodesToSelect.includes(edge.source)) {
        nodesToSelect.push(edge.source);
      }
      newChanges = true;
    }
    return [nodesToSelect, edgesToSelect, newChanges];
  }

  const handleNodeClick = (id) => {
    let isCompleted = true;
    nodePredecessors[id].every((element) => {
      if (!isAGraphEdge(element)) {
        isCompleted = learningUnits.find(
          (learningUnit) => learningUnit.id.toString() === element
        )['completed'];
        if (!isCompleted) {
          return isCompleted;
        }
      }
    });
    handleLearningUnitClick(id, isCompleted);
  };

  return (
    <Graph
      nodes={nodes}
      edges={edges}
      nodePredecessors={nodePredecessors}
      handleNodeClick={handleNodeClick}
    />
  );
};

export default LearningUnitsGraph;
