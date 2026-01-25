import React from 'react';
import clsx from 'clsx';

interface TabsProps {
  tabs: Array<{ id: string; label: string; icon?: React.ReactNode }>;
  activeTab: string;
  onChange: (tabId: string) => void;
  children: React.ReactNode;
}

interface TabContentProps {
  id: string;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ id, children }) => (
  <div data-tab-id={id}>{children}</div>
);

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, children }) => {
  return (
    <div className="flex flex-col">
      {/* Tab Headers */}
      <div className="flex gap-0 border-b border-gray-200 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'px-4 py-3 text-sm font-medium whitespace-nowrap flex items-center gap-2 transition-colors',
              'border-b-2 -mb-px',
              activeTab === tab.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type === TabContent) {
            const childProps = child.props as { id: string };
            return childProps.id === activeTab ? child : null;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export { TabContent };
