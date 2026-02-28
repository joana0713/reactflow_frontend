// mergeNode.js

import { BaseNode } from './baseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Merge"
      inputs={[
        { id: `${id}-target-1` },
        { id: `${id}-target-2` }
      ]}
      outputs={[
        { id: `${id}-source` }
      ]}
    >
      <div>Merges multiple inputs</div>
    </BaseNode>
  );
};