// transformNode.js

import { BaseNode } from './baseNode';

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Transform"
      inputs={[{ id: `${id}-target` }]}
      outputs={[{ id: `${id}-source` }]}
    >
      <div>Transforms data</div>
    </BaseNode>
  );
};