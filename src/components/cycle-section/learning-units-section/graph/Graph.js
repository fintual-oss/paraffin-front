import React, { useState, useRef } from 'react';
import { GraphCanvas } from 'reagraph';
import { Button } from 'primereact/button';
import styles from './Graph.module.scss';

const Graph = ({ nodes, edges, theme, nodePredecessors, handleNodeClick }) => {
  const [selections, setSelections] = useState([]);
  const ref = useRef();

  const handleNodePointOver = (event) => {
    setSelections(nodePredecessors[event.id]);
  };

  return (
    <div style={graphContainerlStyle}>
      <div style={graphControlStyle} >
        <Button
          label="-"
          className={styles.cameraButtonSymbol}
          onClick={() => ref.current?.zoomOut()}
        />
        <Button
          style={{ margin: '0px 5px 0px 5px' }}
          label="Centrar Grafo"
          className={styles.cameraButton}
          onClick={() => ref.current?.centerGraph()}
        />
        <Button
          label="+"
          className={styles.cameraButtonSymbol}
          onClick={() => ref.current?.zoomIn()}
        />
      </div>

      <GraphCanvas
        theme={theme}
        nodes={nodes}
        edges={edges}
        ref={ref}
        layoutType="treeLr2d"
        selections={selections}
        onNodeClick={(event) => handleNodeClick(event.id)}
        onNodePointerOver={(event) => handleNodePointOver(event)}
        onNodePointerOut={() => setSelections([])}
      />
    </div>
  );
};

const graphContainerlStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};

const graphControlStyle = {
  zIndex: 9,
  position: 'absolute',
  top: 15,
  right: 15,
  padding: 1,
  flexDirection: 'column',
};

export default Graph;
