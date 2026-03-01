// logger.config.js

export default {
  type: 'logger',
  title: 'Logger',
  handles: {
    inputs: [{ id: 'input' }],
    outputs: [{ id: 'output' }],
  },
  fields: [
    {
      type: 'text',
      name: 'label',
      label: 'Log label',
      defaultValue: 'Pipeline',
    },
  ],
};
