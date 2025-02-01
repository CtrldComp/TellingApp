import React from 'react';

interface ToastProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const Toast: React.FC<ToastProps> = ({ title, description, action }) => {
  return (
    <div className="toast">
      <h4>{title}</h4>
      <p>{description}</p>
      {action}
    </div>
  );
};
