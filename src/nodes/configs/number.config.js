// number.config.js

export default {
  type: 'number',
  title: 'Number',
  handles: {
    inputs: [],
    outputs: [{ id: 'value' }],
  },
  fields: [
    {
      type: 'number',
      name: 'value',
      label: 'Value',
      defaultValue: 0,
    },
  ],
};