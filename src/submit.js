import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      // 🔥 backend가 원하는 형식으로 변환
      const payload = {
        nodes: nodes.map((node) => ({
          id: node.id
        })),
        edges: edges.map((edge) => ({
          source: edge.source,
          target: edge.target
        }))
      };

      console.log(payload)

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
      console.error('Error:', error);
      alert('Submission failed');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};