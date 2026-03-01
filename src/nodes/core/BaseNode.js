// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  id,
  title,
  inputs = [],
  outputs = [],
  children
}) => {
  return (
    <div
      className="
        relative min-w-[220px]
        bg-surface border border-edge rounded-node
        shadow-node hover:shadow-node-hover
        transition-all duration-200
      "
    >
      {/* Left Handles */}
      {inputs.map((input, index) => {
        const customTop = input.style?.top;

        return (
          <Handle
            key={`${id}-input-${index}`}
            type="target"
            position={Position.Left}
            id={input.id}
            style={{
              top: customTop ?? `${50 + index * 20}%`,
              transform: customTop ? undefined : 'translateY(-50%)'
            }}
            className="!w-3 !h-3 !bg-primary-500 !border-2 !border-white"
          />
        );
      })}

      {/* Header */}
      <div
        className="
          px-4 py-3
          border-b border-edge
          bg-surface-muted rounded-t-node
          font-semibold text-sm text-slate-700
        "
      >
        {title}
      </div>

      {/* Body */}
      <div className="p-4 text-sm text-slate-700 min-h-[60px]">
        {children}
      </div>

      {/* Right Handles */}
      {outputs.map((output, index) => {
        const customTop = output.style?.top;

        return (
          <Handle
            key={`${id}-output-${index}`}
            type="source"
            position={Position.Right}
            id={output.id}
            style={{
              top: customTop ?? `${50 + index * 20}%`,
              transform: customTop ? undefined : 'translateY(-50%)'
            }}
            className="!w-3 !h-3 !bg-emerald-500 !border-2 !border-white"
          />
        );
      })}
    </div>
  );
};