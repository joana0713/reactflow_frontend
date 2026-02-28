import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  useEffect(() => {
    const lines = currText.split('\n');
    const variableMap = new Map();

    lines.forEach((line, lineIndex) => {
      const regex = /\{\{(.*?)\}\}/g;
      const matches = [...line.matchAll(regex)];

      matches.forEach(match => {
        const name = match[1].trim();

        if (!variableMap.has(name)) {
          variableMap.set(name, lineIndex);
        }
      });
    });

    const uniqueVariables = Array.from(variableMap.entries()).map(
      ([name, lineIndex]) => ({ name, lineIndex })
    );

    setVariables(uniqueVariables);
  }, [currText]);

  const getLineHeight = () => {
    if (!textareaRef.current) return 20;
    const style = window.getComputedStyle(textareaRef.current);
    return parseInt(style.lineHeight) || 20;
  };

  return (
    <div
      style={{
        minWidth: 220,
        border: '1px solid black',
        padding: 10,
        background: 'white',
        position: 'relative'
      }}
    >
      <strong>Text</strong>

      <textarea
        ref={textareaRef}
        value={currText}
        onChange={handleTextChange}
        style={{
          width: '100%',
          resize: 'none',
          overflow: 'hidden'
        }}
        rows={1}
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
      />

      {/* 🔥 줄 위치 기준 handle 배치 */}
      {variables.map((variable, index) => (
        <Handle
          key={`${variable.name}-${index}`}
          type="target"
          position={Position.Left}
          id={variable.name}
          style={{
            top: 40 + variable.lineIndex * getLineHeight()
          }}
        />
      ))}

      <Handle
        type="source"
        position={Position.Right}
        id="output"
      />
    </div>
  );
};