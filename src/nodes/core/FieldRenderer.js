// FieldRenderer.js

export const FieldRenderer = ({ field, value, onChange }) => {
  const handleChange = (e) => {
    const val =
      field.type === 'checkbox'
        ? e.target.checked
        : e.target.value;

    onChange(field.name, val);
  };

  const inputClass =
    'w-full px-3 py-2 text-sm border border-edge rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-300 transition bg-surface';

  switch (field.type) {
    case 'text':
      return (
        <input
          type="text"
          value={value ?? ''}
          onChange={handleChange}
          className={inputClass}
        />
      );

    case 'number':
      return (
        <input
          type="number"
          value={value ?? ''}
          onChange={handleChange}
          className={inputClass}
        />
      );

    case 'checkbox':
      return (
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={!!value}
            onChange={handleChange}
            className="rounded border-edge text-primary-500 focus:ring-primary-400"
          />
          <span className="text-sm">{field.label}</span>
        </label>
      );

    case 'select':
      return (
        <select
          value={value ?? ''}
          onChange={handleChange}
          className={inputClass}
        >
          {(field.options || []).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );

    case 'textarea':
      return (
        <textarea
          value={value ?? ''}
          onChange={handleChange}
          className={inputClass + ' min-h-[60px]'}
          rows={3}
        />
      );

    default:
      return null;
  }
};