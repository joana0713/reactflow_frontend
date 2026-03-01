// inputNode.js

import { useState } from 'react';
import { BaseNode } from '../core/BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace('customInput-', 'input_')
  );

  const [inputType, setInputType] = useState(
    data?.inputType || 'Text'
  );

  return (
    <BaseNode
      id={id}
      title="Input"
      inputs={[{ id: `${id}-target` }]}
      outputs={[{ id: `${id}-source` }]}
    >
      <div className="space-y-3 text-sm">

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-500">
            Name
          </label>
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-edge rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition bg-surface"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-500">
            Type
          </label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className="w-full px-3 py-2 text-sm border border-edge rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition bg-surface"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </div>

      </div>
    </BaseNode>
  );
};