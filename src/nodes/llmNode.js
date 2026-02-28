import { Handle, Position } from 'reactflow';

export const LLMNode = ({ id, data }) => {

  return (
    <div
      style={{
        width: 200,
        height: 100,
        border: '1px solid black',
        position: 'relative'
      }}
    >
      {/* 첫번째 target */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-system`}
        style={{ top: 25 }}
      />

      {/* 두번째 target */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-prompt`}
        style={{ top: 60 }}
      />

      <div style={{ padding: 10 }}>
        <div>LLM</div>
        <div>This is a LLM.</div>
      </div>

      {/* 오른쪽 source */}
      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-response`}
        style={{ top: 45 }}
      />
    </div>
  );
};