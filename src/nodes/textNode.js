// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from './baseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // 🔹 Extract variables from {{variable}}
  useEffect(() => {
    const regex = /\{\{(.*?)\}\}/g;
    const matches = [...currText.matchAll(regex)];

    const unique = [...new Set(matches.map(m => m[1].trim()))];

    setVariables(unique);
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      inputs={variables.map((v) => ({ id: v }))}
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