// ConfigNode.js – Renders a node from a config using BaseNode (single abstraction for all config-driven nodes)

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { FieldRenderer } from './FieldRenderer';

const normalizeHandles = (arr) => {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.map((h) => (typeof h === 'string' ? { id: h } : h));
};

export const createConfigNode = (config) => {
  const inputs = normalizeHandles(config.inputs ?? config.handles?.inputs ?? []);
  const outputs = normalizeHandles(config.outputs ?? config.handles?.outputs ?? []);
  const fields = config.fields ?? [];
  const title = config.title ?? config.label ?? config.type;
  const staticContent = config.content;

  return function ConfigNodeComponent({ id, data }) {
    const [fieldValues, setFieldValues] = useState(() => {
      const initial = {};
      fields.forEach((f) => {
        initial[f.name] = data?.[f.name] ?? f.default ?? f.defaultValue ?? '';
      });
      return initial;
    });

    const handleFieldChange = (name, value) => {
      setFieldValues((prev) => ({ ...prev, [name]: value }));
    };

    const inputHandles = inputs.map((inp) => ({
      id: `${id}-in-${inp.id}`,
      ...inp
    }));
    const outputHandles = outputs.map((out) => ({
      id: `${id}-out-${out.id}`,
      ...out
    }));

    const body = staticContent ?? (
      <div className="space-y-3">
        {fields.length > 0 ? (
          fields.map((field) => (
            <div key={field.name} className="flex flex-col gap-1">
              <label className="text-xs font-medium text-gray-500">{field.label}</label>
              <FieldRenderer
                field={field}
                value={fieldValues[field.name]}
                onChange={handleFieldChange}
              />
            </div>
          ))
        ) : (
          <div className="text-xs text-gray-400 italic">No configuration</div>
        )}
      </div>
    );

    return (
      <BaseNode
        id={id}
        title={title}
        inputs={inputHandles}
        outputs={outputHandles}
      >
        {body}
      </BaseNode>
    );
  };
};
