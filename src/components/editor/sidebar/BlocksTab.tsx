import React from 'react';
import { Button } from '../../ui/button';
import { cn } from '../../../lib/utils';
import {
  RectangleHorizontal,
  Columns2,
  Columns3,
  Columns4,
  PanelLeft,
  PanelRight
} from 'lucide-react';

const BLOCK_LAYOUTS = [
  { id: 'layout-1', label: '1 Column', icon: RectangleHorizontal, columns: [100] },
  { id: 'layout-2', label: '2 Columns', icon: Columns2, columns: [50, 50] },
  { id: 'layout-3', label: '3 Columns', icon: Columns3, columns: [33.33, 33.33, 33.33] },
  { id: 'layout-4', label: '4 Columns', icon: Columns4, columns: [25, 25, 25, 25] },
  { id: 'layout-1-2', label: '1:2 Column', icon: PanelRight, columns: [33.33, 66.66] }, // Left sidebar style
  { id: 'layout-2-1', label: '2:1 Column', icon: PanelLeft, columns: [66.66, 33.33] }, // Right sidebar style
];

export const BlocksTab: React.FC = () => {
  return (
    <div className="h-full flex flex-col p-4">
      <div className="grid grid-cols-2 gap-3">
        {BLOCK_LAYOUTS.map((layout) => (
          <Button
            key={layout.id}
            variant="outline"
            draggable
            onDragStart={(e) => {
              // We pass special ID for layout blocks
              e.dataTransfer.setData('elementType', layout.id);
              e.dataTransfer.effectAllowed = 'copy';
            }}
            className={cn(
              "h-24 flex flex-col items-center justify-center gap-3 p-2 hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-grab active:cursor-grabbing border-2 border-dashed border-transparent hover:border-solid bg-card shadow-sm"
            )}
          >
            <layout.icon className="w-8 h-8 text-foreground/70" strokeWidth={1.5} />
            <span className="text-xs font-medium">{layout.label}</span>
          </Button>
        ))}
      </div>
      
      <div className="mt-8 text-center text-xs text-muted-foreground p-4 border rounded bg-muted/20">
        <p>Drag a block to the canvas to add a new row structure.</p>
      </div>
    </div>
  );
};
