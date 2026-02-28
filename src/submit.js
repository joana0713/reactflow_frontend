import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const payload = {
        nodes: nodes.map((node) => ({
          id: node.id
        })),
        edges: edges.map((edge) => ({
          source: edge.source,
          target: edge.target
        }))
      };

      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      alert(
        `Nodes: ${data.nodes}\nEdges: ${data.edges}\nIs DAG: ${data.is_dag}`
      );

    } catch (error) {
      console.error('Pipeline parse failed:', error);
      alert('Backend server is not running or an error occurred.');
    }
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleSubmit}
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          px-10
          py-3
          text-sm
          font-semibold
          text-white
          rounded-2xl
          bg-gradient-to-r
          from-blue-500
          via-indigo-500
          to-purple-600
          shadow-lg
          transition-all
          duration-300
          hover:shadow-2xl
          hover:scale-105
          active:scale-95
          focus:outline-none
          focus:ring-4
          focus:ring-indigo-300
        "
      >
        {/* Glow effect */}
        <span
          className="
            absolute
            inset-0
            rounded-2xl
            bg-white
            opacity-0
            group-hover:opacity-10
            transition-opacity
            duration-300
          "
        />

        <span className="relative tracking-wide">
          Submit Pipeline
        </span>
      </button>
    </div>
  );
};