import React from 'react';
import { GraphCanvas } from 'reagraph';

const nodes = [
  {
    id: '1',
    label: 'GitHub',
  },
  {
    id: '2',
    label: 'Ruby',
  },
  {
    id: '3',
    label: 'Rails',
  },
];

const edges = [
  {
    source: '1',
    target: '2',
    id: '1-2',
  },
  {
    source: '2',
    target: '1',
    id: '2-1',
  },
  {
    source: '1',
    target: '3',
    id: '1-3',
  },
];

const MyGraph = () => {

  return (
    <div>
      <GraphCanvas nodes={nodes} edges={edges} />
    </div>
  );
};

export default MyGraph;

