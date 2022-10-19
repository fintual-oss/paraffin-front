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
  {
    id: '4',
    label: 'Docker',
  },
  {
    id: '5',
    label: 'React',
  },
  {
    id: '6',
    label: 'Next',
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
    target: '3',
    id: '2-1',
  },
  {
    source: '1',
    target: '3',
    id: '1-3',
  },
  {
    source: '1',
    target: '5',
    id: '1-5',
  },
  {
    source: '4',
    target: '5',
    id: '4-5',
  },
  {
    source: '4',
    target: '6',
    id: '4-6',
  },
  {
    source: '5',
    target: '6',
    id: '5-6',
  },
];

const Graph = () => {
  return (
    <div>
      <GraphCanvas nodes={nodes} edges={edges} />
    </div>
  );
};

export default Graph;
