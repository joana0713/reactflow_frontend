// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  ConnectionMode
} from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { getNodeTypes } from './nodes';
import 'reactflow/dist/style.css';

const nodeTypes = getNodeTypes();

const gridSize = 20;
const proOptions = { hideAttribution: true };

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => {
    return { id: nodeID, nodeType: type };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      event.stopPropagation();

      const raw =
        event?.dataTransfer?.getData('application/reactflow');
      const type = raw
        ? (() => {
            try {
              const appData = JSON.parse(raw);
              return appData?.nodeType || null;
            } catch {
              return null;
            }
          })()
        : event?.dataTransfer?.getData('text/plain');
      if (!type) return;

      if (!reactFlowInstance) return;
      // Use screen coordinates (clientX, clientY) – React Flow converts to flow position
      const position = reactFlowInstance.screenToFlowPosition
        ? reactFlowInstance.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          })
        : reactFlowInstance.project({
            x: event.clientX,
            y: event.clientY,
          });

      const nodeID = getNodeID(type);

      const newNode = {
        id: nodeID,
        type,
        position,
        data: getInitNodeData(nodeID, type),
      };

      addNode(newNode);
    },
    [reactFlowInstance, getNodeID, addNode]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  }, []);

  return (
    <div
      ref={reactFlowWrapper}
      className="w-screen h-[70vh] bg-gray-50"
      onDragOverCapture={onDragOver}
      onDropCapture={onDrop}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapToGrid
        snapGrid={[gridSize, gridSize]}
        connectionLineType="smoothstep"
        connectionMode={ConnectionMode.Strict}
        className="bg-surface-subtle"
      >
        <Background
          gap={gridSize}
          size={1}
          color="#e2e8f0"
          className="bg-surface-subtle"
        />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};