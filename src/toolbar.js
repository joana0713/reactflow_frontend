// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="w-full px-6 py-3 bg-surface border-b border-edge">
      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
        Add nodes
      </p>
      <div className="flex flex-wrap gap-2">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="number" label="Number" />
        <DraggableNode type="boolean" label="Boolean" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="logger" label="Logger" />
      </div>
    </div>
  );
};