// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from '../core/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // 🔹 Extract variables with line index
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
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((variable) => ({
        id: variable.name,
        style: {
          top: 40 + variable.lineIndex * getLineHeight()
        }
      }))}
      outputs={[{ id: 'output' }]}
    >
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
    </BaseNode>
  );
};