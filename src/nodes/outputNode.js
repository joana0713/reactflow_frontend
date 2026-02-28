// outputNode.js

import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace('customOutput-', 'output_')
  );
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      
      {/* <Handle
        type="target"
        position={Position.Left}
        // id={`${id}-value`}
        id={`${id}-input`}
      /> */}

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-target`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-source`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />

      <div>
        <span>Output</span>
      </div>

      <div>
        <label>
          Name:
          <input
            type="text"
            value={currName}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
};