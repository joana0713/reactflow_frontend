// FieldRenderer.js

export const FieldRenderer = ({ field, value, onChange }) => {
  const handleChange = (e) => {
    const val =
      field.type === 'checkbox'
        ? e.target.checked
        : e.target.value;

    onChange(field.name, val);
  };

  switch (field.type) {
    case 'text':
      return (
        <div style={{ marginBottom: 8 }}>
          <label>
            {field.label}
            <input
              type="text"
              value={value}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </label>
        </div>
      );

    case 'number':
      return (
        <div style={{ marginBottom: 8 }}>
          <label>
            {field.label}
            <input
              type="number"
              value={value}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </label>
        </div>
      );

    case 'checkbox':
      return (
        <div style={{ marginBottom: 8 }}>
          <label>
            <input
              type="checkbox"
              checked={value}
              onChange={handleChange}
            />
            {field.label}
          </label>
        </div>
      );

    case 'select':
      return (
        <div style={{ marginBottom: 8 }}>
          <label>
            {field.label}
            <select
              value={value}
              onChange={handleChange}
              style={{ width: '100%' }}
            >
              {field.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </label>
        </div>
      );

    case 'textarea':
      return (
        <div style={{ marginBottom: 8 }}>
          <label>
            {field.label}
            <textarea
              value={value}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </label>
        </div>
      );

    default:
      return null;
  }
};