// boolean.config.js

export default {
  type: 'boolean',
  title: 'Boolean',
  handles: {
    inputs: [],
    outputs: [{ id: 'value' }],
  },
  fields: [
    {
      type: 'checkbox',
      name: 'value',
      label: 'True / False',
      defaultValue: false,
    },
  ],
};