import React from 'react';

export interface ColumnLayout {
  id: string;
  label: string;
  columns: string[]; // Array of width percentages
  icon: React.ReactNode;
}

const COLUMN_LAYOUTS: ColumnLayout[] = [
  {
    id: '1-col',
    label: '1 Column',
    columns: ['100%'],
    icon: <div className="flex gap-0.5 h-6"><div className="flex-1 bg-gray-400 rounded-sm"></div></div>
  },
  {
    id: '2-col-equal',
    label: '2 Columns (Equal)',
    columns: ['50%', '50%'],
    icon: <div className="flex gap-0.5 h-6"><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div></div>
  },
  {
    id: '2-col-left',
    label: '2 Columns (2:1)',
    columns: ['66.66%', '33.33%'],
    icon: <div className="flex gap-0.5 h-6"><div className="flex-[2] bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div></div>
  },
  {
    id: '2-col-right',
    label: '2 Columns (1:2)',
    columns: ['33.33%', '66.66%'],
    icon: <div className="flex gap-0.5 h-6"><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-[2] bg-gray-400 rounded-sm"></div></div>
  },
  {
    id: '3-col-equal',
    label: '3 Columns (Equal)',
    columns: ['33.33%', '33.33%', '33.33%'],
    icon: <div className="flex gap-0.5 h-6"><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div></div>
  },
  {
    id: '4-col-equal',
    label: '4 Columns (Equal)',
    columns: ['25%', '25%', '25%', '25%'],
    icon: <div className="flex gap-0.5 h-6"><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div><div className="flex-1 bg-gray-400 rounded-sm"></div></div>
  },
];

interface ColumnLayoutSelectorProps {
  currentColumns: number;
  onLayoutChange: (layout: ColumnLayout) => void;
}

const ColumnLayoutSelector: React.FC<ColumnLayoutSelectorProps> = ({ currentColumns, onLayoutChange }) => {
  return (
    <div className="grid gap-2">
      <div className="grid grid-cols-2 gap-2">
        {COLUMN_LAYOUTS.map((layout) => (
          <button
            key={layout.id}
            onClick={() => onLayoutChange(layout)}
            className={`p-2 border rounded hover:border-blue-500 hover:bg-blue-50 transition-colors ${
              layout.columns.length === currentColumns ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
            }`}
            title={layout.label}
          >
            {layout.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColumnLayoutSelector;
