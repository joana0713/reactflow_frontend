import { Handle, Position } from 'reactflow';

export const GenericNode = ({ data, config }) => {
  return (
    <div
      className="
        relative
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-md
        hover:shadow-xl
        transition-all
        duration-200
        min-w-[240px]
      "
    >
      {/* Header */}
      <div
        className="
          px-4
          py-3
          bg-gradient-to-r
          from-gray-50
          to-gray-100
          border-b
          border-gray-200
          rounded-t-2xl
          text-sm
          font-semibold
          text-gray-700
        "
      >
        {config.label}
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {config.fields && config.fields.length > 0 ? (
          <div>
            {config.fields?.map((field) => (
              <div key={field.name} className="flex flex-col gap-1">
                <label className="text-xs font-medium text-gray-500">
                  {field.label}
                </label>

                <input
                  type="text"
                  defaultValue={field.default}
                  className="
                    px-3
                    py-2
                    text-sm
                    border
                    border-gray-200
                    rounded-lg
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-400
                    focus:border-transparent
                    transition
                  "
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-xs text-gray-400 italic">
            No configuration
          </div>
        )}
      </div>

      {/* Input Handle */}
      <Handle
        type="target"
        position={Position.Left}
        className="
          !w-3 !h-3
          !bg-blue-500
          !top-1/2
          -translate-y-1/2
        "
      />

      {/* Output Handle */}
      <Handle
        type="source"
        position={Position.Right}
        className="
          !w-3 !h-3
          !bg-green-500
          !top-1/2
          -translate-y-1/2
        "
      />
    </div>
  );
};