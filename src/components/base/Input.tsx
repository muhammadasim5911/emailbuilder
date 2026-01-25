import React from 'react';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, icon, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <div className="relative flex items-center">
          <input
            ref={ref}
            className={clsx(
              'w-full px-3 py-2 border rounded-lg transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-blue-500',
              error
                ? 'border-red-500 focus:ring-red-500'
                : 'border-gray-300 focus:border-blue-500',
              icon && 'pl-10',
              className
            )}
            {...props}
          />
          {icon && (
            <div className="absolute left-3 text-gray-400 pointer-events-none">
              {icon}
            </div>
          )}
        </div>
        {error && <span className="text-xs text-red-600">{error}</span>}
        {helperText && <span className="text-xs text-gray-500">{helperText}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
