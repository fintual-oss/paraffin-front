import React from 'react';
import dynamic from 'next/dynamic';

const Graph = dynamic(() => import('../../components/Graph'), { ssr: false });

export default function Home() {
  return (
    <div>
      <Graph />
    </div>
  );
}
