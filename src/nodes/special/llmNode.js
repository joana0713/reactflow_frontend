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
      <div className="text-sm text-slate-600 bg-primary-50 px-3 py-2 rounded-lg border border-primary-100">
        This is a LLM.
      </div>
    </BaseNode>
  );
};