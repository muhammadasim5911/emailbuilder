import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { cn } from '../../../lib/utils';
import {
  Type,
  Image,
  MousePointerClick,
  Minus,
  LayoutGrid,
  ArrowDownToLine,
  Heading,
} from 'lucide-react';

const ELEMENTS_GROUPS = [
  {
    name: '',
    elements: [
      { id: 'row', label: 'Columns', icon: LayoutGrid, isFree: true },
      { id: 'heading', label: 'Heading', icon: Heading, isFree: true },
      { id: 'text', label: 'Text', icon: Type, isFree: true },
      { id: 'image', label: 'Image', icon: Image, isFree: true },
      { id: 'button', label: 'Button', icon: MousePointerClick, isFree: true },
      { id: 'divider', label: 'Divider', icon: Minus, isFree: true },
      { id: 'spacer', label: 'Spacer', icon: ArrowDownToLine, isFree: true },
    ],
  },
];

export const ContentTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter elements based on search
  const filteredGroups = ELEMENTS_GROUPS.map(group => ({
    ...group,
    elements: group.elements.filter(el =>
      el.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.id.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(group => group.elements.length > 0);

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Search bar */}
      {/* <div className="p-4 border-b bg-background sticky top-0 z-10 space-y-4">
        <h2 className="font-semibold tracking-tight">Elements</h2>
        <Input
          type="text"
          placeholder="Search elements..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full"
        />
      </div> */}

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="flex flex-col gap-6 p-4">
          {filteredGroups.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground text-sm">
              No elements found
            </div>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.name} className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground">{group.name}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {group.elements.map((element) => (
                    <Button
                      key={element.id}
                      variant="outline"
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('elementType', element.id);
                        e.dataTransfer.effectAllowed = 'copy';
                      }}
                      className={cn(
                        "h-20 flex flex-col items-center justify-center gap-2 p-2 hover:border-primary hover:bg-primary/5 transition-all cursor-grab active:cursor-grabbing",
                      )}
                    >
                      <element.icon className="w-6 h-6 text-foreground/80" />
                      <span className="text-xs font-medium">{element.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
