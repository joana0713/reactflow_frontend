// textNode.js

import { useState, useEffect, useRef } from 'react';
import { BaseNode } from '../core/BaseNode';

// Valid JavaScript identifier: letter/_/$ then optional letters, digits, _, $
const JS_IDENTIFIER_REGEX = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

function isValidJsIdentifier(name) {
  const trimmed = (name || '').trim();
  return trimmed.length > 0 && JS_IDENTIFIER_REGEX.test(trimmed);
}

const MIN_NODE_WIDTH = 220;
const RULER_PADDING = 24;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const [measuredWidth, setMeasuredWidth] = useState(MIN_NODE_WIDTH);
  const textareaRef = useRef(null);
  const rulerRef = useRef(null);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // (a) Only treat valid JS identifiers as variables; (b) use unique handle ids per node
  useEffect(() => {
    const lines = currText.split('\n');
    const variableMap = new Map();

    lines.forEach((line, lineIndex) => {
      const regex = /\{\{(.*?)\}\}/g;
      const matches = [...line.matchAll(regex)];

      matches.forEach((match) => {
        const name = match[1].trim();
        if (isValidJsIdentifier(name) && !variableMap.has(name)) {
          variableMap.set(name, lineIndex);
        }
      });
    });

    const uniqueVariables = Array.from(variableMap.entries()).map(
      ([name, lineIndex]) => ({ name, lineIndex })
    );

    setVariables(uniqueVariables);
  }, [currText]);

  // (c) Measure width of content so node can grow in width
  useEffect(() => {
    if (!rulerRef.current) return;
    const w = rulerRef.current.scrollWidth + RULER_PADDING;
    setMeasuredWidth(Math.max(MIN_NODE_WIDTH, w));
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
        id: `${id}-${variable.name}`,
        style: {
          top: 40 + variable.lineIndex * getLineHeight()
        }
      }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <>
        {/* Hidden ruler for width measurement – same font/padding as textarea */}
        <div
          ref={rulerRef}
          aria-hidden
          className="absolute left-[-9999px] top-0 text-sm px-3 py-2 whitespace-pre overflow-hidden invisible"
          style={{ font: 'inherit' }}
        >
          {currText || ' '}
        </div>
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={handleTextChange}
          rows={1}
          style={{ minWidth: measuredWidth }}
          className="w-full resize-none overflow-hidden px-3 py-2 text-sm border border-edge rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 transition bg-surface"
          onInput={(e) => {
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight + 'px';
          }}
        />
      </>
    </BaseNode>
  );
};