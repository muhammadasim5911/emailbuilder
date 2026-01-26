import React, { useState } from 'react';
import type { EmailTemplate, EmailElement } from '../../types';
import { CanvasElement } from './CanvasElement';
import { clsx } from 'clsx';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  type DragStartEvent,
  type DragEndEvent,
  type DragOverEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';

interface CanvasProps {
  template: EmailTemplate | null;
  selectedElementId: string | null;
  zoom: number;
  deviceMode?: 'desktop' | 'mobile' | 'tablet';
  showGrid: boolean;
  onElementSelect: (id: string | null) => void;
  onElementUpdate: (id: string, updates: Partial<EmailElement>) => void;
  onElementDelete: (id: string) => void;
  onCanvasClick: () => void;
  onReorderElements?: (fromIndex: number, toIndex: number) => void;
  onMoveElement?: (activeId: string, overId: string) => void;
  onAddElementAtIndex?: (elementType: string, index: number) => void;
  onAddChild?: (parentId: string, elementType: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  template,
  selectedElementId,
  zoom,
  deviceMode = 'desktop',
  showGrid,
  onElementSelect,
  onElementUpdate,
  onElementDelete,
  onCanvasClick,
  onReorderElements,
  onMoveElement,
  onAddElementAtIndex,
  onAddChild,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
         distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    console.log('DragOver:', { active: active.id, over: over?.id, overData: over?.data.current });
    if (!over || !onMoveElement) return;

    const activeId = active.id as string;
    const overId = over.id as string;

    if (activeId === overId) return;

    // We rely on the store's smart moveElement logic to handle tree traversals
    // This might trigger re-renders, which is standard for dnd-kit nested lists
    onMoveElement(activeId, overId);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    setActiveId(null);
    // Logic is handled in DragOver for nested/tree structures usually
    // But we can enable a final reorder here if needed
  };

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  if (!template) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50/50 rounded-lg">
        <div className="text-center">
          <div className="text-6xl mb-4 grayscale opacity-50">📧</div>
          <p className="text-muted-foreground text-lg">Create or load a template</p>
        </div>
      </div>
    );
  }

  // Calculate width based on device mode
  const canvasWidth = deviceMode === 'mobile' ? 320 : deviceMode === 'tablet' ? 480 : template.width;

  const activeElement = template.elements.find(el => el.id === activeId);

  return (
    <div
      className={clsx(
        'flex-1 overflow-auto relative bg-slate-100/50',
        showGrid && 'bg-grid'
      )}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onCanvasClick();
        }
      }}
    >
      {/* Canvas Controls Overlay */}
      <div className="absolute top-4 right-4 z-10 flex gap-2">
        <div className="bg-background/80 backdrop-blur px-3 py-1.5 rounded-md shadow-sm border text-xs font-medium text-muted-foreground">
          {canvasWidth}px
        </div>
        <div className="bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-md shadow-sm text-xs font-medium">
          {deviceMode === 'mobile' && 'Mobile'}
          {deviceMode === 'tablet' && 'Tablet'}
          {deviceMode === 'desktop' && 'Desktop'}
        </div>
      </div>

      {/* Scrollable Container */}
      <div className="min-h-full p-8 flex justify-center perspective-1000">
        {/* Email Container with proper scaling */}
        <div
          className="relative transition-all duration-300 ease-in-out shadow-2xl"
          style={{
            width: `${canvasWidth}px`,
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
          }}
        >
            {/* Email Content Area */}
            <div
              className="bg-white min-h-[800px] relative"
              style={{
                backgroundColor: template.defaultBackgroundColor,
              }}
            >
               <DndContext
                sensors={sensors}
                collisionDetection={closestCenter}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
              >
                <SortableContext
                  items={template.elements.map(el => el.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {template.elements.map((element) => (
                    <CanvasElement
                      key={element.id}
                      element={element}
                      isSelected={selectedElementId === element.id}
                      onSelect={onElementSelect}
                      onUpdate={onElementUpdate}
                      onDelete={onElementDelete}
                      onAddChild={onAddChild}
                      selectedElementId={selectedElementId}
                    />
                  ))}
                </SortableContext>
                
                 {createPortal(
                    <DragOverlay dropAnimation={dropAnimation}>
                      {activeElement ? (
                         <div className="opacity-80">
                           <CanvasElement
                              element={activeElement}
                              isSelected={false}
                              onSelect={() => {}}
                              onUpdate={() => {}}
                              onDelete={() => {}}
                           />
                         </div>
                      ) : null}
                    </DragOverlay>,
                    document.body
                  )}
              </DndContext>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
