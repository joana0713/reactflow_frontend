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
      {/* 🔹 Left Handles */}
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
          />
        );
      })}

      <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
        {title}
      </div>

      <div>
        {children}
      </div>

      {/* 🔹 Right Handles */}
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
          />
        );
      })}
    </div>
  );
};