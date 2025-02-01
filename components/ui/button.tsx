import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline';
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  onClick, 
  children, 
  disabled,
  className = ''
}) => {
  const baseStyle = 'px-4 py-2 rounded';
  const variantStyle = variant === 'outline' ? 'border border-gray-500' : 'bg-blue-500 text-white';

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
