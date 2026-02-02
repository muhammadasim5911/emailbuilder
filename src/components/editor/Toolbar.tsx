import React from 'react';
import { Button } from '../ui/button';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

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
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 gap-2 shrink-0">
      {/* Left side - 1/3 */}
      <div className="flex items-center gap-1 w-1/4 min-w-[120px]">
        <Button
          variant="ghost"
          size="sm"
          onClick={onUndo}
          title="Undo"
          className="w-9 h-9 p-0 flex items-center justify-center text-gray-700"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7v6h6"/>
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>
          </svg>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRedo}
          title="Redo"
          className="w-9 h-9 p-0 flex items-center justify-center text-gray-400"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 7v6h-6"/>
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/>
          </svg>
        </Button>
        <div className="h-6 w-px bg-gray-200 mx-1" />
      </div>

      {/* Center - 1/2 */}
      <div className="flex items-center gap-2 justify-center flex-1 min-w-0">
        {/* Device Mode Switcher */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 shrink-0">
          <button
            onClick={() => onDeviceModeChange('desktop')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
              deviceMode === 'desktop'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
            title="Desktop (600px)"
          >
            <Monitor className="w-4 h-4" />
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
            <Tablet className="w-4 h-4" />
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
            <Smartphone className="w-4 h-4" />
          </button>
        </div>

        <div className="h-5 w-px bg-gray-200 hidden sm:block" />

        {/* Zoom controls */}
        <div className="flex items-center gap-1 hidden sm:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onZoomChange(Math.max(25, zoom - 10))}
            className="w-7 h-7 p-0 text-xs"
          >
            −
          </Button>
          <span className="text-xs text-gray-600 min-w-[32px] text-center font-medium">{zoom}%</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onZoomChange(Math.min(200, zoom + 10))}
            className="w-7 h-7 p-0 text-xs"
          >
            +
          </Button>
        </div>
      </div>

      {/* Right side - 1/4 */}
      <div className="flex items-center gap-2 w-1/4 min-w-[80px] justify-end">
        <Button
          variant="default"
          size="sm"
          onClick={onSave}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 h-9 shadow-sm"
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Toolbar;
