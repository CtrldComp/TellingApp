import React, { createContext, useContext } from 'react';
import { Alert } from 'react-native';

interface Toast {
  title: string;
  description: string;
}

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastContext = createContext<{ toast: (newToast: Toast) => void } | null>(null);

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const toast = (newToast: Toast) => {
    Alert.alert(newToast.title, newToast.description);
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
