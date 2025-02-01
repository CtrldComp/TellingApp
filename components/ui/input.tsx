import React from 'react';

interface InputProps {
  multiline?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, className, multiline }) => {
  return multiline ? (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded p-2 ${className}`}
    />
  ) : (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border rounded p-2 ${className}`}
    />
  );
};

export default Input;
