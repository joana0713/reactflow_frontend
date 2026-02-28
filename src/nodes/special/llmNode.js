// llmNode.js

import { BaseNode } from '../core/BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      inputs={[{ id: `${id}-target` }]}
      outputs={[{ id: `${id}-source` }]}
    >
      <div>This is a LLM.</div>
    </BaseNode>
  );
};