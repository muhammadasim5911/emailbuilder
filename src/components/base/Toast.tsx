import React, { useEffect } from 'react';
import clsx from 'clsx';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  isVisible,
  onClose,
  duration = 3000,
}) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 animate-slide-up">
      <div
        className={clsx(
          'px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]',
          type === 'success' && 'bg-green-600 text-white',
          type === 'error' && 'bg-red-600 text-white',
          type === 'info' && 'bg-blue-600 text-white'
        )}
      >
        <span className="text-xl">
          {type === 'success' && '✓'}
          {type === 'error' && '✗'}
          {type === 'info' && 'ⓘ'}
        </span>
        <span className="flex-1 font-medium">{message}</span>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 font-bold"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
