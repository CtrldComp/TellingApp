import React from 'react';

interface CardProps {
  title: string;
  content: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, content, className }) => {
  return (
    <div className={`border rounded p-4 shadow-md ${className}`}>
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
