import React from 'react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded shadow-lg">
      <p>{message}</p>
      <button onClick={onClose} className="mt-2 text-sm underline">
        Close
      </button>
    </div>
  );
};

export default Toast;
