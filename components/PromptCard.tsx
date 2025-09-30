
import React, { useState, useCallback } from 'react';
import { Prompt } from '../types';
import { CopyIcon, CheckIcon } from './Icons';

interface PromptCardProps {
  prompt: Prompt;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(prompt.prompt).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [prompt.prompt]);

  return (
    <div className="bg-brand-surface border border-brand-border rounded-lg shadow-sm transition-shadow hover:shadow-md flex flex-col h-full">
      <div className="p-4 border-b border-brand-border flex justify-between items-start gap-4">
        <h4 className="text-lg font-semibold text-brand-text">{prompt.title}</h4>
        <button
          onClick={handleCopy}
          aria-label="Copy prompt"
          className={`flex-shrink-0 flex items-center text-sm font-medium px-3 py-1.5 rounded-md transition-all duration-200 ${
            copied
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-brand-secondary hover:bg-gray-200'
          }`}
        >
          {copied ? (
            <CheckIcon className="w-4 h-4 mr-2" />
          ) : (
            <CopyIcon className="w-4 h-4 mr-2" />
          )}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200 flex-grow">
            <p className="text-brand-text whitespace-pre-wrap font-mono text-sm leading-relaxed">
                {prompt.prompt}
            </p>
        </div>
        {prompt.suggestion && (
          <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded-r-md">
            <p className="text-sm text-blue-800">{prompt.suggestion}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptCard;
