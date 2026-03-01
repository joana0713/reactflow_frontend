// delay.config.js

export default {
  type: 'delay',
  title: 'Delay',
  handles: {
    inputs: [{ id: 'input' }],
    outputs: [{ id: 'output' }],
  },
  fields: [
    {
      type: 'number',
      name: 'ms',
      label: 'Delay (ms)',
      defaultValue: 1000,
    },
  ],
};
