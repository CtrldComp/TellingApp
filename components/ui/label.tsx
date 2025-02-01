import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({ children, className }) => {
  return (
    <label className={`block text-sm font-medium ${className}`}>
      {children}
    </label>
  );
};

export default Label;
