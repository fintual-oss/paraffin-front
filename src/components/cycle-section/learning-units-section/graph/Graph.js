import React, { useState } from 'react';
import { GraphCanvas } from 'reagraph';

const Graph = ({ nodes, edges, nodePredecessors, handleNodeClick }) => {
  const [selections, setSelections] = useState([]);

  const handleNodePointOver = (event) => {
    setSelections(nodePredecessors[event.id]);
  };
  const theme = {
    canvas: {
      background: '#fff',
      fog: '#fff',
    },
    node: {
      fill: '#7CA0AB',
      activeFill: '#005AD6',
      opacity: 1,
      selectedOpacity: 1,
      inactiveOpacity: 0.2,
      label: {
        color: '#2A6475',
        stroke: '#fff',
        activeColor: '#62A4FF',
      },
    },
    lasso: {
      border: '1px solid #55aaff',
      background: 'rgba(75, 160, 255, 0.1)',
    },
    ring: {
      fill: false,
      activeFill: false,
    },
    edge: {
      fill: '#D8E6EA',
      activeFill: '#62A4FF',
      opacity: 1,
      selectedOpacity: 1,
      inactiveOpacity: 0.2,
      label: {
        stroke: '#fff',
        color: '#2A6475',
        activeColor: '#1DE9AC',
      },
    },
    arrow: {
      fill: '#D8E6EA',
      activeFill: '#62A4FF',
    },
  };

  return (
    <div>
      <GraphCanvas
        theme={theme}
        nodes={nodes}
        edges={edges}
        layoutType="treeLr2d"
        selections={selections}
        onNodeClick={(event) => handleNodeClick(event.id)}
        onNodePointerOver={(event) => handleNodePointOver(event)}
        onNodePointerOut={() => setSelections([])}
      />
    </div>
  );
};

export default Graph;
