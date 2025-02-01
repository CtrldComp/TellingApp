import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`border-b pb-2 ${className}`}>
      {children}
    </div>
  );
};

const CardContent: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`pt-2 ${className}`}>
      {children}
    </div>
  );
};

export { Card, CardHeader, CardContent };
