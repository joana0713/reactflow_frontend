import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {
  return (
    <div
      style={{
        width: 250,
        padding: 10,
        border: '1px solid black',
        position: 'relative'
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-target`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />

      <div>
        <strong>LLM</strong>
      </div>

      <div>This is a LLM.</div>

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-source`}
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  );
};