// transform.config.js

export default {
  type: 'transform',
  title: 'Transform',
  handles: {
    inputs: [{ id: 'input' }],
    outputs: [{ id: 'output' }],
  },
  fields: [
    {
      type: 'text',
      name: 'expression',
      label: 'Expression',
      defaultValue: '',
    },
  ],
};