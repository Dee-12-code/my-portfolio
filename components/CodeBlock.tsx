import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto text-sm">
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
