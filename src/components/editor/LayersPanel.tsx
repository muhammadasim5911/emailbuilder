import React from 'react';
import { Panel } from '../base';
import type { EmailElement } from '../../types';
import clsx from 'clsx';

interface LayersPanelProps {
  elements: EmailElement[];
  selectedElementId: string | null;
  onSelectElement: (id: string) => void;
  onDeleteElement: (id: string) => void;
  onDuplicateElement: (id: string) => void;
}

export const LayersPanel: React.FC<LayersPanelProps> = ({
  elements,
  selectedElementId,
  onSelectElement,
  onDeleteElement,
  onDuplicateElement,
}) => {
  const getElementIcon = (type: string) => {
    const icons: Record<string, string> = {
      text: '📝',
      image: '🖼️',
      button: '🔘',
      divider: '─',
      spacer: '⬇',
      section: '▭',
      column: '║',
      row: '═',
      table: '📊',
      form: '📋',
      countdown: '⏱️',
      video: '🎬',
      social: '🔗',
      html: '< >',
      menu: '☰',
    };
    return icons[type] || '📄';
  };

  const getElementLabel = (element: EmailElement) => {
    if ((element as any).label) return (element as any).label;
    if (element.type === 'text' && (element as any).content) {
      return (element as any).content.substring(0, 30) + '...';
    }
    return element.type.charAt(0).toUpperCase() + element.type.slice(1);
  };

  return (
    <Panel title="Layers" className="h-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {elements.length === 0 ? (
          <div className="p-4 text-center text-gray-400 text-sm">
            No elements yet. Drag elements from the left panel.
          </div>
        ) : (
          <div className="space-y-1 p-2">
            {elements.map((element, index) => (
              <div
                key={element.id}
                className={clsx(
                  'group flex items-center gap-2 p-2 rounded cursor-pointer transition-colors',
                  selectedElementId === element.id
                    ? 'bg-blue-100 border border-blue-300'
                    : 'hover:bg-gray-100 border border-transparent'
                )}
                onClick={() => onSelectElement(element.id)}
              >
                <span className="text-lg">{getElementIcon(element.type)}</span>
                <span className="flex-1 text-sm font-medium truncate">
                  {getElementLabel(element)}
                </span>
                <span className="text-xs text-gray-400">#{index + 1}</span>
                
                {/* Action buttons - show on hover */}
                <div className="hidden group-hover:flex gap-1">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDuplicateElement(element.id);
                    }}
                    className="p-1 hover:bg-gray-200 rounded"
                    title="Duplicate"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteElement(element.id);
                    }}
                    className="p-1 hover:bg-red-100 text-red-600 rounded"
                    title="Delete"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Panel>
  );
};

export default LayersPanel;
