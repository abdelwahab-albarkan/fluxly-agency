import React from 'react';

export interface FaqStubProps {
  className?: string;
  children?: React.ReactNode;
}

export const FaqStub: React.FC<FaqStubProps> = ({ className = '', children }) => {
  return (
    <div className={`component-faqstub ${className}`}>
      {children || <span className="text-sm font-mono text-slate-400">FaqStub Placeholder Component</span>}
    </div>
  );
};

export default FaqStub;
