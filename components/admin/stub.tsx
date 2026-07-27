import React from 'react';

export interface AdminStubProps {
  className?: string;
  children?: React.ReactNode;
}

export const AdminStub: React.FC<AdminStubProps> = ({ className = '', children }) => {
  return (
    <div className={`component-adminstub ${className}`}>
      {children || <span className="text-sm font-mono text-slate-400">AdminStub Placeholder Component</span>}
    </div>
  );
};

export default AdminStub;