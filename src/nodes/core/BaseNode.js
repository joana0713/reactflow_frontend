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
        relative
        min-w-[220px]
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-200
      "
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
            className="!w-3 !h-3 !bg-blue-500"
          />
        );
      })}

      {/* 🔹 Header */}
      <div
        className="
          px-4 py-3
          border-b border-gray-100
          bg-gray-50
          rounded-t-2xl
          font-semibold
          text-sm
          text-gray-700
        "
      >
        {title}
      </div>

      {/* 🔹 Body */}
      <div className="p-4 text-sm text-gray-700">
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
            className="!w-3 !h-3 !bg-green-500"
          />
        );
      })}
    </div>
  );
};