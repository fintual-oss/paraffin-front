import React, { useState } from 'react';
import { GraphCanvas } from 'reagraph';

const Graph = ({ nodes, edges, nodePredecessors, handleNodeClick }) => {
  const [selections, setSelections] = useState([]);

  const handleNodePointOver = (event) => {
    setSelections(nodePredecessors[event.id]);
  };

  return (
    <div>
      <GraphCanvas
        nodes={nodes}
        edges={edges}
        layoutType="treeLr2d"
        selections={selections}
        onNodeClick={(event) => handleNodeClick(event.id)}
        onNodePointerOver={(event) => handleNodePointOver(event)}
        onNodePointerOut={() => setSelections([])}
        labelType="nodes"
      />
    </div>
  );
};

export default Graph;
