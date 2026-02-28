export function Field({ label, children }) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-slate-600 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}