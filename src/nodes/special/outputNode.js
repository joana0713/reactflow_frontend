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
      <div>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={(e) => setCurrName(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Type:
          <select
            value={outputType}
            onChange={(e) => setOutputType(e.target.value)}
          >
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};