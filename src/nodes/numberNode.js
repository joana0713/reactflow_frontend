// numberNode.js

import { useState } from 'react';
import { BaseNode } from './baseNode';

export const NumberNode = ({ id }) => {
  const [value, setValue] = useState(0);

  return (
    <BaseNode
      id={id}
      title="Number"
      inputs={[]}
      outputs={[{ id: `${id}-source` }]}
    >
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </BaseNode>
  );
};