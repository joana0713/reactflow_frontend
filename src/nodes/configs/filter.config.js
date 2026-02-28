export default {
  type: 'filter',
  title: 'Filter',
  handles: {
    inputs: [{ id: 'input' }],
    outputs: [{ id: 'output' }],
  },
  fields: [
    {
      type: 'text',
      name: 'condition',
      label: 'Condition',
      defaultValue: '',
    },
  ],
};