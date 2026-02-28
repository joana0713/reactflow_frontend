export default function Card({ children }) {
  return (
    <div
        className="
            bg-card
            border border-border
            rounded-2xl
            p-5
            min-w-[260px]
            shadow-lg
            transition
            hover:shadow-xl
            !bg-card
        "
        >
        {children}
    </div>
  );
}