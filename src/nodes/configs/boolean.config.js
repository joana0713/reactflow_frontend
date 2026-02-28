const booleanConfig = {
  type: 'boolean',
  label: 'Boolean',
  inputs: [],
  outputs: ['value'],
  fields: [
    {
      name: 'value',
      label: 'True / False',
      type: 'select',
      options: ['true', 'false'],
      default: 'true'
    }
  ]
};

export default booleanConfig;