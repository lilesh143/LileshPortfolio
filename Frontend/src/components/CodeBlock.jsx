import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // Import Prism.js theme
import 'prismjs/components/prism-jsx.min'; // Include language support for JSX

const CodeBlock = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        alert('Code copied to clipboard!');
      },
      (err) => {
        alert('Failed to copy code.');
      }
    );
  };

  return (
    <div className="relative bg-[#2D2D2D] rounded-lg p-4 max-w-sm shadow-md overflow-hidden md:max-w-2xl">
      <pre className="text-white max-w-sm  bg-slate-200 rounded-xl shadow-md overflow-hidden md:max-w-xl">
        <code className="language-jsx">{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 bg-indigo-500 text-white px-3 py-1 rounded"
      >
        Copy
      </button>
    </div>
  );
};

export default CodeBlock;
