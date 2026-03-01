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
        `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`
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
          inline-flex items-center justify-center
          px-8 py-3 text-sm font-semibold text-white
          rounded-node
          bg-primary-500 hover:bg-primary-600
          shadow-node hover:shadow-node-hover
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
          active:scale-[0.98]
        "
      >
        Submit Pipeline
      </button>
    </div>
  );
};