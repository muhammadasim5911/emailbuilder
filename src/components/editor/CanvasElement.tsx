import React from 'react';
import type { EmailElement, ButtonElement } from '../../types';
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
  selectedElementId?: string | null;
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
          selectedElementId={selectedElementId}
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
  selectedElementId,
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
    console.log('CanvasElement clicked:', element.id, element.type, 'isSelected:', isSelected);
    onSelect(element.id);
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  const getPaddingString = (padding: any) => {
    if (!padding) return undefined;
    if (typeof padding === 'number') return `${padding}px`;
    return `${padding.top || 0}px ${padding.right || 0}px ${padding.bottom || 0}px ${padding.left || 0}px`;
  };

  const getRadiusString = (radius: any) => {
    if (!radius) return undefined;
    if (typeof radius === 'number') return `${radius}px`;
    return `${radius.topLeft || 0}px ${radius.topRight || 0}px ${radius.bottomRight || 0}px ${radius.bottomLeft || 0}px`;
  };

  const baseStyle: React.CSSProperties = {
    backgroundColor: element.backgroundColor,
    width: element.type === 'column' 
      ? undefined 
      : (typeof element.width === 'number' ? `${element.width}px` : element.width || '100%'),
    flexBasis: element.type === 'column' ? (element.width || '50%') : undefined,
    flexShrink: element.type === 'column' ? 0 : undefined,
    flexGrow: element.type === 'column' ? 0 : undefined,
    height: typeof element.height === 'number' ? `${element.height}px` : element.height || 'auto',
    padding: getPaddingString(element.padding),
    margin: getPaddingString(element.margin),
    borderColor: element.borderColor,
    borderWidth: element.borderWidth ? `${element.borderWidth}px` : undefined,
    borderStyle: element.borderStyle || (element.borderWidth ? 'solid' : undefined),
    borderRadius: getRadiusString(element.borderRadius),
    backgroundImage: (element as any).imageUrl ? `url(${(element as any).imageUrl})` : undefined,
    backgroundSize: (element as any).imageUrl ? 'cover' : undefined,
    backgroundPosition: (element as any).imageUrl ? 'center' : undefined,
    backgroundRepeat: (element as any).imageUrl ? 'no-repeat' : undefined,
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
        isSelected && 'ring-2 ring-blue-500 bg-blue-50/10',
        !isSelected && 'hover:ring-1 hover:ring-blue-300',
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
      {element.type === 'html' && <HTMLElementRenderer element={element as any} />}

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
                    selectedElementId={selectedElementId || null} 
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
                    selectedElementId={selectedElementId || null} 
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
                    selectedElementId={selectedElementId || null} 
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
        display: 'flex',
        flexDirection: 'column',
        alignItems: element.horizontalAlign === 'center' ? 'center' : element.horizontalAlign === 'right' ? 'flex-end' : 'flex-start',
        verticalAlign: 'top',
        minHeight: '80px',
        width: '100%',
        height: '100%',
        outline: isNativeOver ? '2px dashed #0ea5e9' : 'none',
        backgroundColor: isNativeOver ? '#f0f9ff' : (element.backgroundColor || 'transparent'),
        transition: 'all 0.2s',
        boxSizing: 'border-box',
      }}
    >
      {element.children && element.children.length > 0 ? (
        renderChildren(element.children)
      ) : (
        <div className="w-full flex-1 flex flex-col items-center justify-center gap-3 text-sm text-blue-500 border-2 border-dashed border-blue-200 rounded p-6 bg-blue-50/50">
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
      backgroundColor: element.backgroundColor || 'transparent',
      backgroundImage: element.imageUrl ? `url(${element.imageUrl})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
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
      textAlign: element.textAlign || 'left',
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
      maxWidth: '100%', // Ensure images never overflow container
      height: element.height || 'auto', // Respect height if set, otherwise auto
      display: 'block',
      objectFit: element.objectFit || 'cover',
    }}
  />
);

const ButtonElementRenderer: React.FC<{ element: any }> = ({ element }) => {
  const btn = element as ButtonElement;
  return (
    <div style={{ textAlign: (btn as any).align || 'center' }}>
      <a
        href={btn.link}
        target={btn.target || '_blank'}
        onClick={(e) => e.preventDefault()}
        style={{
          display: btn.fullWidth ? 'block' : 'inline-block',
          width: btn.fullWidth ? '100% border-box' : 'auto',
          padding: typeof btn.padding === 'number' 
            ? `${btn.padding}px` 
            : `${btn.padding?.top ?? 10}px ${btn.padding?.right ?? 16}px ${btn.padding?.bottom ?? 10}px ${btn.padding?.left ?? 16}px`,
          backgroundColor: btn.backgroundColor || '#0ea5e9',
          color: btn.color || '#ffffff',
          textDecoration: 'none',
          borderRadius: typeof btn.borderRadius === 'number'
            ? `${btn.borderRadius}px`
            : `${btn.borderRadius?.topLeft || 0}px ${btn.borderRadius?.topRight || 0}px ${btn.borderRadius?.bottomRight || 0}px ${btn.borderRadius?.bottomLeft || 0}px`,
          fontSize: `${btn.fontSize || 16}px`,
          fontFamily: btn.fontFamily,
          border: btn.borderWidth ? `${btn.borderWidth}px ${btn.borderStyle || 'solid'} ${btn.borderColor || 'transparent'}` : 'none',
          fontWeight: btn.fontWeight,
          lineHeight: btn.lineHeight || 1.2,
          textAlign: 'center',
        }}
      >
        {btn.text}
      </a>
    </div>
  );
};

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

const HTMLElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div 
    dangerouslySetInnerHTML={{ __html: element.content }}
    style={{ width: '100%', overflow: 'auto' }}
  />
);
