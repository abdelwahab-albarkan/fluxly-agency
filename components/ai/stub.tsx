import React from 'react';

export interface AiStubProps {
  className?: string;
  children?: React.ReactNode;
}

export const AiStub: React.FC<AiStubProps> = ({ className = '', children }) => {
  return (
    <div className={`component-aistub ${className}`}>
      {children || <span className="text-sm font-mono text-slate-400">AiStub Placeholder Component</span>}
    </div>
  );
};

export default AiStub;