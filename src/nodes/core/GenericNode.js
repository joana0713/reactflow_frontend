// GenericNode.js – Config-driven node using the shared BaseNode abstraction

import { useState } from 'react';
import { BaseNode } from './BaseNode';
import { FieldRenderer } from './FieldRenderer';

/** Normalize handles to array of { id } for consistent config shape */
function normalizeHandles(arr) {
  if (!arr || !Array.isArray(arr)) return [];
  return arr.map((h) => (typeof h === 'string' ? { id: h } : h));
}

export const GenericNode = ({ id, data, config }) => {
  const title = config.title ?? config.label ?? config.type;
  const rawInputs = config.handles?.inputs ?? config.inputs ?? [];
  const rawOutputs = config.handles?.outputs ?? config.outputs ?? [];
  const inputs = normalizeHandles(rawInputs);
  const outputs = normalizeHandles(rawOutputs);
  const fields = config.fields ?? [];

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

  // Unique handle ids per node so React Flow can distinguish connections
  const inputHandles = inputs.map((h) => ({
    id: `${id}-in-${h.id}`,
    style: h.style
  }));
  const outputHandles = outputs.map((h) => ({
    id: `${id}-out-${h.id}`,
    style: h.style
  }));

  const body = (
    <div className="space-y-3">
      {fields.length > 0 ? (
        fields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            {field.type !== 'checkbox' && (
              <label className="text-xs font-medium text-slate-500">
                {field.label}
              </label>
            )}
            <FieldRenderer
              field={field}
              value={fieldValues[field.name]}
              onChange={handleFieldChange}
            />
          </div>
        ))
      ) : (
        <div className="text-xs text-slate-400 italic">No configuration</div>
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