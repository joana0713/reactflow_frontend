// filterNode.js

import { BaseNode } from './baseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Filter"
      inputs={[{ id: `${id}-target` }]}
      outputs={[{ id: `${id}-source` }]}
    >
      <div>Filters incoming data</div>
    </BaseNode>
  );
};