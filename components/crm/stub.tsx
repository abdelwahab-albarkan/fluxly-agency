import React from 'react';

export interface CrmStubProps {
  className?: string;
  children?: React.ReactNode;
}

export const CrmStub: React.FC<CrmStubProps> = ({ className = '', children }) => {
  return (
    <div className={`component-crmstub ${className}`}>
      {children || <span className="text-sm font-mono text-slate-400">CrmStub Placeholder Component</span>}
    </div>
  );
};

export default CrmStub;