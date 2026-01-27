import React from 'react';
import { Button } from '../base';

interface ToolbarProps {
  zoom: number;
  isDirty: boolean;
  deviceMode: 'desktop' | 'mobile' | 'tablet';
  onDeviceModeChange: (mode: 'desktop' | 'mobile' | 'tablet') => void;
  onZoomChange: (zoom: number) => void;
  onUndo: () => void;
  onRedo: () => void;
  onSave: () => void;
  onExport?: (format: string) => void; // Optional for library mode
  onShowPreview?: () => void; // Optional for library mode
  onOpenTemplates?: () => void;
  hideSaveButton?: boolean; // For library customization
  hideTemplatesButton?: boolean; // For library customization
}

export const Toolbar: React.FC<ToolbarProps> = ({
  zoom,
  isDirty,
  deviceMode,
  onDeviceModeChange,
  onZoomChange,
  onUndo,
  onRedo,
  onSave,
  onExport,
  onShowPreview,
  onOpenTemplates,
  hideSaveButton = false,
  hideTemplatesButton = false,
}) => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 gap-4">
      {/* Left side - File actions */}
      <div className="flex items-center gap-2">
        {onOpenTemplates && !hideTemplatesButton && (
          <Button
            variant="secondary"
            size="sm"
            onClick={onOpenTemplates}
            className="mr-2"
          >
            Templates
          </Button>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onUndo}
          title="Undo"
          className="w-9 h-9 p-0"
        >
          ↶
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRedo}
          title="Redo"
          className="w-9 h-9 p-0"
        >
          ↷
        </Button>
        <div className="h-6 w-px bg-gray-200" />
        {/* {!hideSaveButton && (
          <Button
            variant="primary"
            size="sm"
            onClick={onSave}
            className={isDirty ? 'ring-2 ring-blue-400' : ''}
          >
            {isDirty ? 'Save*' : 'Saved'}
          </Button>
        )} */}
      </div>

      {/* Center - Device modes and Zoom controls */}
      <div className="flex items-center gap-4">
        {/* Device Mode Switcher */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => onDeviceModeChange('desktop')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              deviceMode === 'desktop'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="Desktop (600px)"
          >
            🖥️
          </button>
          <button
            onClick={() => onDeviceModeChange('tablet')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              deviceMode === 'tablet'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="Tablet (480px)"
          >
            📱
          </button>
          <button
            onClick={() => onDeviceModeChange('mobile')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              deviceMode === 'mobile'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="Mobile (320px)"
          >
            📱
          </button>
        </div>

        <div className="h-6 w-px bg-gray-200" />

        {/* Zoom controls */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onZoomChange(Math.max(25, zoom - 10))}
            className="w-8 h-8 p-0 text-xs"
          >
            −
          </Button>
          <input
            type="number"
            min="25"
            max="200"
            value={zoom}
            onChange={(e) => onZoomChange(parseInt(e.target.value))}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-sm text-center"
          />
          <span className="text-sm text-gray-600 w-6">%</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onZoomChange(Math.min(200, zoom + 10))}
            className="w-8 h-8 p-0 text-xs"
          >
            +
          </Button>
        </div>
      </div>

      {/* Right side - Preview and Export (only shown if callbacks provided) */}
      {/* {(onShowPreview || onExport) && (
        <div className="flex items-center gap-2">
          {onShowPreview && (
            <Button
              variant="secondary"
              size="sm"
              onClick={onShowPreview}
            >
              Preview
            </Button>
          )}
          {onExport && (
            <div className="relative">
              <Button
                variant="secondary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  const menu = e.currentTarget.nextElementSibling;
                  if (menu) {
                    menu.classList.toggle('hidden');
                  }
                }}
              >
                Export ▼
              </Button>
              <div className="hidden absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <button
                  onClick={() => onExport('html')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm rounded-t-lg"
                >
                  Export as HTML
                </button>
                <button
                  onClick={() => onExport('json')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm border-t"
                >
                  Export as JSON
                </button>
                <button
                  onClick={() => onExport('mjml')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm border-t"
                >
                  Export as MJML
                </button>
                <button
                  onClick={() => onExport('amp')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm border-t rounded-b-lg"
                >
                  Export as AMP
                </button>
              </div>
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default Toolbar;
