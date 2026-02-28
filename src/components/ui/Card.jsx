export default function Card({ children }) {
  return (
    <div className="
      bg-white
      text-slate-800
      rounded-2xl
      shadow-lg
      border border-slate-200
      min-w-[240px]
      p-5
      transition
      hover:shadow-xl
    ">
      {children}
    </div>
  );
}