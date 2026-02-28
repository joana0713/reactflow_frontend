// outputNode.js

import { useState } from 'react';
import { BaseNode } from '../core/BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );

  const [outputType, setOutputType] = useState(
    data?.outputType || 'Text'
  );

  return (
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: `${id}-target` }]}
      outputs={[{ id: `${id}-source` }]}
    >
      <div className="space-y-3 text-sm">

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">
            Name
          </label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            className="
              px-3 py-2
              border border-gray-200
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-green-400
              transition
            "
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-500">
            Type
          </label>
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
            className="
              px-3 py-2
              border border-gray-200
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-green-400
              transition
              bg-white
            "
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </div>

      </div>
    </BaseNode>
  );
};