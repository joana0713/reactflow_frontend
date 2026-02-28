// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="w-full px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex flex-wrap gap-3 mt-2">
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />

        <DraggableNode type="number" label="Number" />
        <DraggableNode type="boolean" label="Boolean" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="transform" label="Transform" />
        <DraggableNode type="merge" label="Merge" />
      </div>
    </div>
  );
};