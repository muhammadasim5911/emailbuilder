import React from 'react';
import type { EmailElement } from '../../types';
import clsx from 'clsx';

interface CanvasElementProps {
  element: EmailElement;
  isSelected: boolean;
  isHovered?: boolean;
  onSelect: (id: string | null) => void;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onUpdate: (_id: string, _updates: Partial<EmailElement>) => void;
  onDelete: (id: string) => void;
  onAddChild?: (parentId: string, elementType: string) => void;
}

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

// Helper to render children
const RenderChildren = ({ 
  elements, 
  onSelect, 
  onUpdate, 
  onDelete, 
  onAddChild,
  selectedElementId 
}: { 
  elements: EmailElement[], 
  onSelect: (id: string | null) => void, 
  onUpdate: (id: string, updates: Partial<EmailElement>) => void, 
  onDelete: (id: string) => void,
  onAddChild?: (parentId: string, elementType: string) => void,
  selectedElementId: string | null
}) => {
  return (
    <>
      {elements.map(child => (
        <CanvasElement
          key={child.id}
          element={child}
          isSelected={selectedElementId === child.id}
          onSelect={onSelect}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onAddChild={onAddChild}
        />
      ))}
    </>
  );
};

export const CanvasElement: React.FC<CanvasElementProps> = ({
  element,
  isSelected,
  isHovered = false,
  onSelect,
  onUpdate,
  onDelete,
  onAddChild,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: element.id,
    data: {
      type: element.type,
      element: element,
    }
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(element.id);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  const baseStyle: React.CSSProperties = {
    backgroundColor: element.backgroundColor,
    width: typeof element.width === 'number' ? `${element.width}px` : element.width || '100%',
    height: typeof element.height === 'number' ? `${element.height}px` : element.height,
    padding: element.padding
      ? `${element.padding.top}px ${element.padding.right}px ${element.padding.bottom}px ${element.padding.left}px`
      : undefined,
    margin: element.margin
      ? `${element.margin.top}px ${element.margin.right}px ${element.margin.bottom}px ${element.margin.left}px`
      : undefined,
    borderColor: element.borderColor,
    borderWidth: element.borderWidth ? `${element.borderWidth}px` : undefined,
    borderStyle: element.borderWidth ? 'solid' : undefined,
    borderRadius: element.borderRadius ? `${element.borderRadius}px` : undefined,
    opacity: element.opacity,
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : 1,
    position: 'relative', 
  };

  if (!element.visible) {
    return null;
  }

  // Common props for container renderers
  const containerProps = {
    element: element as any,
    onSelect,
    onUpdate,
    onDelete,
    selectedId: isSelected ? element.id : null,
  };
  
  return (
    <div
      ref={setNodeRef}
      style={baseStyle}
      {...attributes}
      {...listeners}
      onClick={handleClick}
      className={clsx(
        'relative transition-all cursor-pointer group',
        isSelected && 'ring-2 ring-primary bg-primary/5',
        (isHovered || isSelected) && !isDragging && 'ring-1 ring-primary/40',
        isDragging && 'opacity-50',
      )}
      data-element-id={element.id}
    >
      {/* Content Renderers */}
      {element.type === 'text' && <TextElementRenderer element={element as any} />}
      {element.type === 'image' && <ImageElementRenderer element={element as any} />}
      {element.type === 'button' && <ButtonElementRenderer element={element as any} />}
      {element.type === 'divider' && <DividerElementRenderer element={element as any} />}
      {element.type === 'spacer' && <SpacerElementRenderer element={element as any} />}
      {element.type === 'video' && <VideoElementRenderer element={element as any} />}

      {/* Container Renderers */}
      {element.type === 'column' && (
        <ColumnElementRenderer 
            element={element as any} 
            onAddChild={onAddChild}
            renderChildren={(children) => (
                <RenderChildren 
                    elements={children} 
                    onSelect={onSelect} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete} 
                    onAddChild={onAddChild}
                    selectedElementId={null} 
                />
            )}
        />
      )}
      {element.type === 'row' && (
        <RowElementRenderer 
            element={element as any}
            renderChildren={(children) => (
                <RenderChildren 
                    elements={children} 
                    onSelect={onSelect} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete} 
                    onAddChild={onAddChild}
                    selectedElementId={null} 
                />
            )}
        />
      )}
        {element.type === 'section' && (
        <SectionElementRenderer 
            element={element as any}
            renderChildren={(children) => (
                <RenderChildren 
                    elements={children} 
                    onSelect={onSelect} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete} 
                    onAddChild={onAddChild}
                    selectedElementId={null} 
                />
            )}
        />
      )}

      {/* Floating Toolbar (Delete/Drag) */}
      {(isSelected || isHovered) && !isDragging && (
        <div className={clsx(
            "absolute -top-6 right-0 flex gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded-t-md text-xs z-20 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity",
            isSelected && "opacity-100" // Persistent when selected
        )}>
           <span className="uppercase text-[10px] font-bold mr-2 opacity-80">{element.type}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(element.id);
            }}
            className="hover:text-red-300"
            title="Delete"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

// ... Renderers ...

// ... (previous code) ...

const ColumnElementRenderer: React.FC<{ 
    element: any, 
    onAddChild?: (parentId: string, elementType: string) => void,
    renderChildren: (children: any[]) => React.ReactNode 
}> = ({ element, onAddChild, renderChildren }) => {
  const [isNativeOver, setIsNativeOver] = React.useState(false);

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'copy';
        if (!isNativeOver) setIsNativeOver(true);
      }}
      onDragEnter={(e) => {
        e.preventDefault();
        setIsNativeOver(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        // Check if we are actually leaving the element and not just entering a child
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
             setIsNativeOver(false);
        }
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsNativeOver(false);
        const elementType = e.dataTransfer.getData('elementType');
        if (elementType && onAddChild) {
            onAddChild(element.id, elementType);
        }
      }}
      style={{
        display: 'inline-block',
        width: element.width || '50%',
        verticalAlign: 'top',
        padding: '10px',
        minHeight: '80px',
        height: '100%',
        outline: isNativeOver ? '2px dashed #0ea5e9' : '1px dashed #e2e8f0',
        backgroundColor: isNativeOver ? '#f0f9ff' : (element.backgroundColor || 'transparent'),
        transition: 'all 0.2s',
      }}
    >
      {element.children && element.children.length > 0 ? (
        renderChildren(element.children)
      ) : (
        <div className="h-full flex flex-col items-center justify-center gap-3 text-sm text-blue-500 border-2 border-dashed border-blue-200 rounded p-6 m-2 bg-blue-50/50">
          <p className="text-center">No content here. Drag content from right.</p>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors text-sm font-medium"
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Open element selector or show hint
              alert('Drag elements from the right sidebar into this column');
            }}
          >
            Add Content
          </button>
        </div>
      )}
    </div>
  );
};

const RowElementRenderer: React.FC<{ element: any, renderChildren: (children: any[]) => React.ReactNode }> = ({ element, renderChildren }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      gap: `${element.gap || 0}px`,
      minHeight: '80px',
      width: '100%',
    }}
  >
    {element.children && element.children.length > 0 ? (
      renderChildren(element.children)
    ) : (
      <div className="w-full text-center text-gray-300 py-4 border-2 border-dashed border-gray-100 bg-gray-50 rounded">
        Empty Row
      </div>
    )}
  </div>
);

const SectionElementRenderer: React.FC<{ element: any, renderChildren: (children: any[]) => React.ReactNode }> = ({ element, renderChildren }) => (
  <div
    style={{
      padding: '20px',
      minHeight: '100px',
    }}
  >
    {element.children ? renderChildren(element.children) : null}
  </div>
);

// ... Simple Renderers (Text, Image, etc - kept same but cleaner) ...
const TextElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div
    style={{
      fontSize: `${element.fontSize}px`,
      fontFamily: element.fontFamily,
      color: element.color,
      textAlign: element.align || 'left',
      fontWeight: element.fontWeight,
      lineHeight: element.lineHeight,
      fontStyle: element.fontStyle,
      wordBreak: 'break-word',
    }}
    dangerouslySetInnerHTML={{ __html: element.content }}
  />
);

const ImageElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <img
    src={element.src}
    alt={element.alt}
    style={{
      width: element.width || '100%', // Respect width if set, otherwise responsive
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      objectFit: element.objectFit || 'cover',
    }}
  />
);

const ButtonElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div style={{ textAlign: element.align || 'center' }}>
    <a
      href={element.link}
      onClick={(e) => e.preventDefault()}
      style={{
        display: 'inline-block',
        padding: `${element.paddingY || 10}px ${element.paddingX || 16}px`,
        backgroundColor: element.backgroundColor || '#0ea5e9',
        color: element.color || '#ffffff',
        textDecoration: 'none',
        borderRadius: `${element.borderRadius || 4}px`,
        fontSize: `${element.fontSize || 16}px`,
        border: element.borderWidth ? `${element.borderWidth}px solid ${element.borderColor}` : 'none',
        fontWeight: element.fontWeight,
      }}
    >
      {element.text}
    </a>
  </div>
);

const DividerElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div style={{ padding: '10px 0' }}>
    <hr
        style={{
        borderColor: element.color,
        borderTopWidth: `${element.height}px`,
        borderStyle: element.style || 'solid',
        width: '100%',
        }}
    />
  </div>
);

const SpacerElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div style={{ height: `${element.height}px` }} />
);

const VideoElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div className="relative w-full aspect-video bg-black flex items-center justify-center text-white">
    {element.thumbnail ? (
        <img src={element.thumbnail} className="w-full h-full object-cover opacity-60" />
    ) : (
        <span className="text-4xl opacity-50">▶</span>
    )}
  </div>
);
