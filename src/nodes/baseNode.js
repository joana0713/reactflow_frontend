// baseNode.js

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
      style={{
        minWidth: 220,
        padding: 10,
        border: '1px solid black',
        background: 'white',
        position: 'relative',
        borderRadius: 6
      }}
    >
      {/* 🔹 Left Handles (Inputs) */}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-input-${index}`}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: input.style?.top ?? `${50 + index * 20}%`,
            transform: 'translateY(-50%)'
          }}
        />
      ))}

      {/* 🔹 Title */}
      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
        {title}
      </div>

      {/* 🔹 Custom Content */}
      <div>
        {children}
      </div>

      {/* 🔹 Right Handles (Outputs) */}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-output-${index}`}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: output.style?.top ?? `${50 + index * 20}%`,
            transform: 'translateY(-50%)'
          }}
        />
      ))}
    </div>
  );
};