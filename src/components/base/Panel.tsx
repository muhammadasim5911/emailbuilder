import React from 'react';
import clsx from 'clsx';

interface PanelProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
  border?: boolean;
  className?: string;
}

export const Panel: React.FC<PanelProps> = ({
  title,
  subtitle,
  icon,
  children,
  actions,
  border = true,
  className,
}) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-lg',
        border && 'border border-gray-200',
        className
      )}
    >
      {title && (
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon}
            <div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              {subtitle && <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>}
            </div>
          </div>
          {actions}
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  );
};

export default Panel;
