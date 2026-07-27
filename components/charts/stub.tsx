import React from 'react';

export interface ChartsStubProps {
  className?: string;
  children?: React.ReactNode;
}

export const ChartsStub: React.FC<ChartsStubProps> = ({ className = '', children }) => {
  return (
    <div className={`component-chartsstub ${className}`}>
      {children || <span className="text-sm font-mono text-slate-400">ChartsStub Placeholder Component</span>}
    </div>
  );
};

export default ChartsStub;