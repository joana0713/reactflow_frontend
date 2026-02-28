import { useState } from 'react';
import { BaseNode } from './baseNode';

export const BooleanNode = ({ id }) => {
  const [checked, setChecked] = useState(false);

  return (
    <BaseNode
      id={id}
      title="Boolean"
      inputs={[]}
      outputs={[{ id: `${id}-source` }]}
    >
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        True / False
      </label>
    </BaseNode>
  );
};