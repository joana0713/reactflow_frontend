import { useState } from 'react';
import { useStore } from '../../store';
import { BaseNode } from '../core/BaseNode';
import { FieldRenderer } from './FieldRenderer';

export const GenericNode = ({ id, data, config }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  // 초기 상태 생성
  const initialState = {};
  config.fields?.forEach((field) => {
    initialState[field.name] =
      data?.[field.name] ?? field.defaultValue;
  });

  const [formState, setFormState] = useState(initialState);

  const handleChange = (name, value) => {
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));

    updateNodeField(id, name, value);
  };

  const inputs =
    config.handles?.inputs?.map((handle) => ({
      id: `${id}-${handle.id}`,
    })) || [];

  const outputs =
    config.handles?.outputs?.map((handle) => ({
      id: `${id}-${handle.id}`,
    })) || [];

  return (
    <BaseNode
      id={id}
      title={config.title}
      inputs={inputs}
      outputs={outputs}
    >
      {config.fields?.map((field) => (
        <FieldRenderer
          key={field.name}
          field={field}
          value={formState[field.name]}
          onChange={handleChange}
        />
      ))}
    </BaseNode>
  );
};