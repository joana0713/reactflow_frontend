export function Field({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-muted mb-1 uppercase tracking-wide">
        {label}
      </label>
      {children}
    </div>
  );
}