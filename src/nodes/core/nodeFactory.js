import * as configs from '../configs';
import { GenericNode } from './GenericNode';

import { InputNode } from '../special/inputNode';
import { OutputNode } from '../special/outputNode';
import { LLMNode } from '../special/llmNode';
import { TextNode } from '../special/textNode';

// Spcical Node
const specialNodes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode,
};

export const buildNodeTypes = () => {
  const nodeTypes = {};

  // Config auto generation
  Object.values(configs).forEach((config) => {
    nodeTypes[config.type] = (props) => (
      <GenericNode {...props} config={config} />
    );
  });

  // Insert special node
  Object.assign(nodeTypes, specialNodes);

  return nodeTypes;
};