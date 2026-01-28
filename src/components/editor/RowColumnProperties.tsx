import React, { useState } from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { cn } from '../../lib/utils';
import type { RowElement, ColumnElement } from '../../types';

interface ColumnLayout {
  id: string;
  label: string;
  widths: string[];
  icon: React.ReactNode;
}

const COLUMN_LAYOUTS: ColumnLayout[] = [
  {
    id: '1-col',
    label: '1 Column',
    widths: ['100%'],
    icon: <div className="flex gap-0.5 h-5"><div className="flex-1 bg-current rounded-sm" /></div>,
  },
  {
    id: '2-equal',
    label: '2 Equal',
    widths: ['50%', '50%'],
    icon: <div className="flex gap-0.5 h-5"><div className="flex-1 bg-current rounded-sm" /><div className="flex-1 bg-current rounded-sm" /></div>,
  },
  {
    id: '3-equal',
    label: '3 Equal',
    widths: ['33.33%', '33.33%', '33.33%'],
    icon: <div className="flex gap-0.5 h-5"><div className="flex-1 bg-current rounded-sm" /><div className="flex-1 bg-current rounded-sm" /><div className="flex-1 bg-current rounded-sm" /></div>,
  },

  {
    id: '2-left',
    label: '2 Left Heavy',
    widths: ['66.66%', '33.33%'],
    icon: <div className="flex gap-0.5 h-5"><div className="flex-[2] bg-current rounded-sm" /><div className="flex-1 bg-current rounded-sm" /></div>,
  },
  {
    id: '2-right',
    label: '2 Right Heavy',
    widths: ['33.33%', '66.66%'],
    icon: <div className="flex gap-0.5 h-5"><div className="flex-1 bg-current rounded-sm" /><div className="flex-[2] bg-current rounded-sm" /></div>,
  },
];

interface RowColumnPropertiesProps {
  element: RowElement;
  onUpdate: (updates: Partial<RowElement>) => void;
}

export const RowColumnProperties: React.FC<RowColumnPropertiesProps> = ({ element, onUpdate }) => {
  const [selectedColumnIndex, setSelectedColumnIndex] = useState(0);
  const [showPaddingOptions, setShowPaddingOptions] = useState(false);
  const [showBorderOptions, setShowBorderOptions] = useState(false);

  const columns = (element.children || []) as ColumnElement[];
  const selectedColumn = columns[selectedColumnIndex];

  const isLayoutSelected = (layoutWidths: string[]) => {
    if (layoutWidths.length !== columns.length) return false;
    return layoutWidths.every((w, i) => w === columns[i].width);
  };

  const handleLayoutChange = (layout: ColumnLayout) => {
    const newColumns: ColumnElement[] = layout.widths.map((width, index) => {
      const existingColumn = columns[index];
      return {
        id: existingColumn?.id || `col-${element.id}-${index}-${Date.now()}`,
        type: 'column' as const,
        label: `Column ${index + 1}`,
        width: width,
        children: existingColumn?.children || [],
        backgroundColor: existingColumn?.backgroundColor || 'transparent',
        padding: existingColumn?.padding || { top: 20, right: 20, bottom: 20, left: 20 },
        visible: true,
        locked: false,
      };
    });
    onUpdate({ children: newColumns } as any);
    if (selectedColumnIndex >= newColumns.length) {
      setSelectedColumnIndex(0);
    }
  };

  const handleColumnWidthChange = (index: number, width: string) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], width };
    onUpdate({ children: newColumns } as any);
  };

  const handleColumnUpdate = (updates: Partial<ColumnElement>) => {
    const newColumns = [...columns];
    newColumns[selectedColumnIndex] = { ...newColumns[selectedColumnIndex], ...updates };
    onUpdate({ children: newColumns } as any);
  };

  return (
    <div className="space-y-4">
      {/* Column Layout Selector */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Columns</Label>
        <div className="grid grid-cols-3 gap-2">
          {COLUMN_LAYOUTS.map((layout) => (
            <button
              key={layout.id}
              type="button"
              onClick={() => handleLayoutChange(layout)}
              className={cn(
                'p-2 rounded border transition-all hover:border-primary/50',
                isLayoutSelected(layout.widths)
                  ? 'border-primary bg-accent'
                  : 'border-border'
              )}
              title={layout.label}
            >
              <div className={cn(
                "w-full",
                isLayoutSelected(layout.widths) ? 'text-primary' : 'text-muted-foreground'
              )}>
                {layout.icon}
              </div>
            </button>
          ))}
        </div>

        {/* Manual Width Inputs */}
        <div className="grid grid-cols-2 gap-2">
          {columns.map((col, index) => (
            <div key={col.id} className="space-y-1">
              <Label className="text-xs text-muted-foreground">Column {index + 1}</Label>
              <Input
                type="text"
                value={col.width}
                onChange={(e) => handleColumnWidthChange(index, e.target.value)}
                placeholder="50%"
                className="h-8 text-xs"
              />
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Column Properties */}
      {columns.length > 0 && (
        <div className="space-y-3">
          <Label className="text-sm font-medium">Column Properties</Label>
          
          {/* Column Tabs */}
          <div className="flex gap-1 p-1 bg-muted rounded-md">
            {columns.map((col, index) => (
              <button
                key={col.id}
                onClick={() => setSelectedColumnIndex(index)}
                className={cn(
                  'flex-1 px-2 py-1 text-xs rounded transition-all',
                  selectedColumnIndex === index
                    ? 'bg-background shadow-sm font-medium'
                    : 'hover:bg-background/50'
                )}
              >
                Column {index + 1}
              </button>
            ))}
          </div>

          {selectedColumn && (
            <div className="space-y-3">
              {/* Background Color */}
              <div className="space-y-2">
                <Label className="text-xs">Background Color</Label>
                <div className="flex gap-2">
                  <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative">
                    <input
                      type="color"
                      value={selectedColumn.backgroundColor || '#ffffff'}
                      onChange={(e) => handleColumnUpdate({ backgroundColor: e.target.value })}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full h-full" style={{ backgroundColor: selectedColumn.backgroundColor || 'transparent' }} />
                  </div>
                  <Input
                    value={selectedColumn.backgroundColor || 'transparent'}
                    onChange={(e) => handleColumnUpdate({ backgroundColor: e.target.value })}
                    className="h-10"
                  />
                </div>
              </div>

              {/* Padding */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Padding</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowPaddingOptions(!showPaddingOptions)}
                    className="h-6 text-xs"
                  >
                    {showPaddingOptions ? 'Less' : 'More'} Options
                  </Button>
                </div>
                {!showPaddingOptions ? (
                  <div className="flex gap-2 items-center">
                    <Label className="text-xs text-muted-foreground w-20">All Sides</Label>
                    <Input
                      type="number"
                      min={0}
                      value={selectedColumn.padding?.top ?? 20}
                      onChange={(e) => {
                        const val = parseInt(e.target.value) || 0;
                        handleColumnUpdate({
                          padding: { top: val, right: val, bottom: val, left: val },
                        });
                      }}
                      className="h-8"
                    />
                    <span className="text-xs text-muted-foreground">px</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    {['top', 'right', 'bottom', 'left'].map((side) => (
                      <div key={side} className="flex gap-2 items-center">
                        <Label className="text-xs text-muted-foreground w-12 capitalize">{side}</Label>
                        <Input
                          type="number"
                          min={0}
                          value={selectedColumn.padding?.[side as keyof typeof selectedColumn.padding] ?? 20}
                          onChange={(e) => {
                            handleColumnUpdate({
                              padding: {
                                ...selectedColumn.padding,
                                [side]: parseInt(e.target.value) || 0,
                              } as any,
                            });
                          }}
                          className="h-8"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Border */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs">Border</Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBorderOptions(!showBorderOptions)}
                    className="h-6 text-xs"
                  >
                    {showBorderOptions ? 'Less' : 'More'} Options
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <Label className="text-xs text-muted-foreground w-12">Width</Label>
                    <Input
                      type="number"
                      min={0}
                      max={20}
                      value={selectedColumn.borderWidth || 0}
                      onChange={(e) => handleColumnUpdate({ borderWidth: parseInt(e.target.value) || 0 })}
                      className="h-8"
                    />
                    <span className="text-xs text-muted-foreground">px</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative">
                      <input
                        type="color"
                        value={selectedColumn.borderColor || '#000000'}
                        onChange={(e) => handleColumnUpdate({ borderColor: e.target.value })}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full h-full" style={{ backgroundColor: selectedColumn.borderColor || '#000000' }} />
                    </div>
                    <Input
                      value={selectedColumn.borderColor || '#000000'}
                      onChange={(e) => handleColumnUpdate({ borderColor: e.target.value })}
                      className="h-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <Separator />

      {/* Row Properties */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Row Properties</Label>

        {/* Background Color */}
        <div className="space-y-2">
          <Label className="text-xs">Background Color</Label>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative">
              <input
                type="color"
                value={element.backgroundColor || '#ffffff'}
                onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-full h-full" style={{ backgroundColor: element.backgroundColor || 'transparent' }} />
            </div>
            <Input
              value={element.backgroundColor || 'transparent'}
              onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
              className="h-10"
            />
          </div>
        </div>

        {/* Content Background Color */}
        <div className="space-y-2">
          <Label className="text-xs">Content Background Color</Label>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative">
              <input
                type="color"
                value={element.contentBackgroundColor || '#ffffff'}
                onChange={(e) => onUpdate({ contentBackgroundColor: e.target.value })}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="w-full h-full" style={{ backgroundColor: element.contentBackgroundColor || 'transparent' }} />
            </div>
            <Input
              value={element.contentBackgroundColor || 'transparent'}
              onChange={(e) => onUpdate({ contentBackgroundColor: e.target.value })}
              className="h-10"
            />
          </div>
        </div>

        {/* Background Image */}
        <div className="space-y-2">
          <Label className="text-xs">Background Image</Label>
          <Input
            type="text"
            value={element.imageUrl || ''}
            onChange={(e) => onUpdate({ imageUrl: e.target.value })}
            placeholder="https://"
            className="h-10"
          />
        </div>

        {/* Column Gap */}
        <div className="space-y-2">
          <Label className="text-xs">Column Gap</Label>
          <div className="flex gap-2 items-center">
            <Input
              type="number"
              min={0}
              max={100}
              value={element.gap || 0}
              onChange={(e) => onUpdate({ gap: parseInt(e.target.value) || 0 })}
              className="h-10"
            />
            <span className="text-xs text-muted-foreground">px</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowColumnProperties;
