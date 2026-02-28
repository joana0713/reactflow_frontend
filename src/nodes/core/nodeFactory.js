import * as configs from '../configs';
import { GenericNode } from './GenericNode';
import { TextNode } from '../special/textNode';

export const buildNodeTypes = () => {
  const nodeTypes = {};

  Object.values(configs).forEach((configModule) => {
    // const config = configModule.default;
    const config = configModule;

    nodeTypes[config.type] = (props) => (
      <GenericNode {...props} config={config} />
    );
  });

  // special node override
  nodeTypes['text'] = TextNode;

  return nodeTypes;
};