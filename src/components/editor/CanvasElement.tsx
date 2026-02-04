import React from 'react';
import { createPortal } from 'react-dom';
import type { EmailElement, ButtonElement, MergeTag } from '../../types';
import { Button } from '../ui/button';
import { toast as sonnerToast } from 'sonner';
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
  deviceMode?: 'desktop' | 'mobile' | 'tablet';
}

import { useSortable, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useDroppable, useDndContext } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

// Dedicated drag handle component for rows
// Uses CSS group-hover to stay visible when parent row is hovered
const DragHandle = ({ listeners, attributes, isVisible }: { listeners?: any; attributes?: any; isVisible: boolean }) => (
  <div
    {...listeners}
    {...attributes}
    className={clsx(
      "absolute -right-6 top-1/2 -translate-y-1/2 w-6 h-10 bg-blue-500 rounded-sm cursor-move flex flex-col items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-opacity z-30",
      // Show on selection/isVisible OR via CSS group-hover on parent
      isVisible ? "opacity-100" : "opacity-0 group-hover:opacity-100"
    )}
    style={{ pointerEvents: 'auto' }} // Always allow interaction even when parent has pointer-events: none
    title="Drag to reorder row"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="grid grid-cols-2 gap-0.5 opacity-80">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>
      ))}
    </div>
  </div>
);

// Helper to render children
const RenderChildren = ({ 
  elements, 
  onSelect, 
  onUpdate, 
  onDelete, 
  onAddChild,
  selectedElementId,
  deviceMode = 'desktop'
}: { 
  elements: EmailElement[], 
  onSelect: (id: string | null) => void, 
  onUpdate: (id: string, updates: Partial<EmailElement>) => void, 
  onDelete: (id: string) => void,
  onAddChild?: (parentId: string, elementType: string) => void,
  selectedElementId: string | null,
  deviceMode?: 'desktop' | 'mobile' | 'tablet'
}) => {
  return (
    <SortableContext
      items={elements.map(el => el.id)}
      strategy={verticalListSortingStrategy}
    >
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
          deviceMode={deviceMode}
        />
      ))}
    </SortableContext>
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
  deviceMode = 'desktop',
}) => {
  // Check if this is a footer element (should be completely non-interactive)
  const isFooter = !!(element as any)._isFooter || element.locked;
  
  // Only use sortable for rows and content elements (NOT columns and NOT footer)
  const shouldBeSortable = element.type !== 'column' && !isFooter;
  
  const sortableResult = useSortable({ 
    id: element.id,
    disabled: !shouldBeSortable,
    data: {
      type: element.type,
      element: element,
    }
  });

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = sortableResult;

  const [hover, setHover] = React.useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Don't select footer elements
    if (isFooter) return;
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
    backgroundColor: (element as any).backgroundColor,
    width: element.type === 'column' 
      ? (deviceMode !== 'desktop' ? '100%' : undefined)
      : (typeof element.width === 'number' ? `${element.width}px` : element.width || '100%'),
    flexBasis: element.type === 'column' ? (deviceMode !== 'desktop' ? '100%' : (element.width || '50%')) : undefined,
    flexShrink: element.type === 'column' ? 0 : undefined,
    flexGrow: element.type === 'column' ? 0 : undefined,
    height: typeof element.height === 'number' ? `${element.height}px` : element.height || 'auto',
    padding: getPaddingString(element.padding),
    margin: getPaddingString(element.margin),
    borderColor: (element as any).borderColor,
    borderWidth: (element as any).borderWidth ? `${(element as any).borderWidth}px` : undefined,
    borderStyle: element.borderStyle || ((element as any).borderWidth ? 'solid' : undefined),
    borderRadius: getRadiusString(element.borderRadius),
    backgroundImage: (element as any).imageUrl ? `url(${(element as any).imageUrl})` : undefined,
    backgroundSize: (element as any).imageUrl ? 'cover' : undefined,
    backgroundPosition: (element as any).imageUrl ? 'center' : undefined,
    backgroundRepeat: (element as any).imageUrl ? 'no-repeat' : undefined,
    opacity: (element as any).opacity,
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : 1,
    position: 'relative',
    // Disable pointer events on the dragged element so collision detection hits elements underneath
    pointerEvents: isDragging ? 'none' : 'auto', 
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
    deviceMode,
  };
  
  // For columns, don't apply drag listeners to the container - they're not draggable
  const containerAttributes = element.type === 'column' ? {} : attributes;
  const containerListeners = element.type === 'column' ? {} : (element.type === 'row' ? {} : listeners);
  
  return (
    <div
      ref={setNodeRef}
      style={baseStyle}
      {...containerAttributes}
      {...containerListeners}
      onMouseEnter={() => !isFooter && setHover(true)}
      onMouseLeave={() => !isFooter && setHover(false)}
      onClick={handleClick}
      className={clsx(
        'relative transition-all group',
        !isFooter && 'cursor-pointer',
        isFooter && 'pointer-events-auto cursor-default',
        !isFooter && isSelected && 'ring-2 ring-blue-500 bg-blue-50/10',
        !isFooter && !isSelected && 'hover:ring-1 hover:ring-blue-300',
        isDragging && 'opacity-50',
      )}
      data-element-id={element.id}
    >
      {/* Content Renderers */}
      {element.type === 'text' && (
        <TextElementRenderer 
          element={element as any} 
          isSelected={isSelected} 
          onUpdate={onUpdate} 
        />
      )}
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
            isFooter={isFooter}
            renderChildren={(children) => (
                <RenderChildren 
                    elements={children} 
                    onSelect={onSelect} 
                    onUpdate={onUpdate} 
                    onDelete={onDelete} 
                    onAddChild={onAddChild}
                    selectedElementId={selectedElementId || null} 
                    deviceMode={deviceMode}
                />
            )}
        />
      )}
      {element.type === 'row' && (
        <>
          <RowElementRenderer 
              element={element as any}
              deviceMode={deviceMode}
              renderChildren={(children) => (
                  <RenderChildren 
                      elements={children} 
                      onSelect={onSelect} 
                      onUpdate={onUpdate} 
                      onDelete={onDelete} 
                      onAddChild={onAddChild}
                      selectedElementId={selectedElementId || null} 
                      deviceMode={deviceMode}
                  />
              )}
          />
          {/* Dedicated drag handle for rows - NOT for footer */}
          {!isFooter && (
            <DragHandle listeners={listeners} attributes={attributes} isVisible={isSelected || hover || isHovered} />
          )}
        </>
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
                    deviceMode={deviceMode}
                />
            )}
        />
      )}

      {/* Floating Toolbar (Delete/Drag) - NOT for footer elements */}
      {!isFooter && (isSelected || hover || isHovered) && !isDragging && (
        <div className={clsx(
            "absolute -top-6 right-0 flex gap-1 bg-primary text-primary-foreground px-2 py-0.5 rounded-t-md text-xs z-20 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity",
            (isSelected || hover) && "opacity-100" // Persistent when selected or hovered
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
    renderChildren: (children: any[]) => React.ReactNode,
    isFooter?: boolean
}> = ({ element, onAddChild, renderChildren, isFooter = false }) => {
  const [isNativeOver, setIsNativeOver] = React.useState(false);
  
  // Use dnd-kit's drop indicator - DISABLED for footer columns
  const { setNodeRef, isOver } = useDroppable({
    id: element.id,
    disabled: isFooter, // Disable dropping for footer columns
    data: {
      type: element.type,
      accepts: ['text', 'image', 'button', 'divider', 'spacer', 'heading']
    }
  });
  
  // Get current drag context
  const { active } = useDndContext();
  const isSomethingBeingDragged = active !== null && !isFooter;
  const isDraggedOver = !isFooter && (isOver || isNativeOver);

  // For footer columns, don't allow any drop events
  const dropHandlers = isFooter ? {} : {
    onDragOver: (e: React.DragEvent) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
      if (!isNativeOver) setIsNativeOver(true);
    },
    onDragEnter: (e: React.DragEvent) => {
      e.preventDefault();
      setIsNativeOver(true);
    },
    onDragLeave: (e: React.DragEvent) => {
      e.preventDefault();
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
           setIsNativeOver(false);
      }
    },
    onDrop: (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsNativeOver(false);
      const elementType = e.dataTransfer.getData('elementType');
      if (elementType && onAddChild) {
          onAddChild(element.id, elementType);
      }
    }
  };

  return (
    <div
      ref={setNodeRef}
      {...dropHandlers}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: element.horizontalAlign === 'center' ? 'center' : element.horizontalAlign === 'right' ? 'flex-end' : 'flex-start',
        justifyContent: isFooter ? 'flex-end' : 'flex-start', // Footer content at bottom
        verticalAlign: isFooter ? 'bottom' : 'top',
        minHeight: isFooter ? 'auto' : '80px',
        width: '100%',
        height: '100%',
        outline: isDraggedOver ? '2px dashed #0ea5e9' : 'none',
        backgroundColor: isDraggedOver ? '#f0f9ff' : (element.backgroundColor || 'transparent'),
        transition: 'all 0.2s',
        boxSizing: 'border-box',
        position: 'relative',
        pointerEvents: isFooter ? 'none' : 'auto', // Disable pointer events on footer columns
      }}
    >
      {/* Drop Indicator Overlay - Not for footer */}
      {isDraggedOver && isSomethingBeingDragged && (
        <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center">
          <div className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl animate-pulse">
            Drop it here
          </div>
        </div>
      )}
      
      {element.children && element.children.length > 0 ? (
        renderChildren(element.children)
      ) : !isFooter ? (
        <div className="w-full flex-1 flex flex-col items-center justify-center gap-3 text-sm border-2 border-dashed border-blue-200 rounded p-6 bg-blue-50/50" style={{ color: '#3b82f6', borderColor: '#bfdbfe', backgroundColor: 'rgba(239, 246, 255, 0.5)' }}>
          <p className="text-center font-medium">No content here. Drag content from right.</p>
          <Button 
            variant="default"
            size="sm"
            className="shadow-sm"
            style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
            onClick={(e) => {
              e.stopPropagation();
              // Show a hint
              sonnerToast.info('Drag elements from the right sidebar');
            }}
          >
            Add Content
          </Button>
        </div>
      ) : null}
    </div>
  );
};

const RowElementRenderer: React.FC<{ 
  element: any, 
  renderChildren: (children: any[]) => React.ReactNode,
  deviceMode?: 'desktop' | 'mobile' | 'tablet'
}> = ({ element, renderChildren, deviceMode = 'desktop' }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: deviceMode !== 'desktop' ? 'column' : 'row',
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

import { MergeTagDropdown } from './MergeTagDropdown';
import { useMergeTagStore } from '../../store';

const TextElementRenderer: React.FC<{ 
  element: any, 
  isSelected?: boolean, 
  onUpdate?: (id: string, updates: any) => void
}> = ({ element, isSelected, onUpdate }) => {
  const [mergeTagConfig, setMergeTagConfig] = React.useState<{
    show: boolean;
    position: { top: number; left: number };
    query: string;
  } | null>(null);
  const editorRef = React.useRef<HTMLDivElement>(null);
  const lastRangeRef = React.useRef<Range | null>(null);
  
  const { mergeTagTriggers, mergeTags: storeTags, getMergeTagsByTrigger } = useMergeTagStore();
  const availableTags = storeTags;
  
  // Update local DOM only when prop content changes and we're not editing
  React.useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== element.content) {
      if (document.activeElement !== editorRef.current) {
        editorRef.current.innerHTML = element.content;
      }
    }
  }, [element.content]);

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // Small delay to allow dropdown clicks if any
    setTimeout(() => {
      if (onUpdate && editorRef.current) {
        onUpdate(element.id, { content: editorRef.current.innerHTML });
      }
    }, 200);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (isSelected) {
      e.stopPropagation();
      
      if (mergeTagConfig?.show) {
          // If dropdown is open, don't let editor handle navigation keys
          if (['ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(e.key)) {
              // Handled by dropdown (via global listener)
              return;
          }
      }
    }
  };

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    if (!isSelected) return;
    
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0) return;
    
    const range = selection.getRangeAt(0);
    const container = range.startContainer;
    
    if (container.nodeType === Node.TEXT_NODE) {
      const text = container.textContent || '';
      const offset = range.startOffset;
      const lastChar = text[offset - 1];
      
      if (mergeTagTriggers.includes(lastChar)) {
        const relevantTags = getMergeTagsByTrigger(lastChar);
        if (relevantTags.length > 0) {
          const rect = range.getBoundingClientRect();
          lastRangeRef.current = range.cloneRange();
          setMergeTagConfig({
            show: true,
            position: { top: rect.bottom, left: rect.left },
            query: ''
          });
        }
      } else if (mergeTagConfig?.show) {
        lastRangeRef.current = range.cloneRange();
        // Find the trigger and query
        const textBeforeCursor = text.substring(0, offset);
        let lastTriggerIndex = -1;
        mergeTagTriggers.forEach(t => {
            const idx = textBeforeCursor.lastIndexOf(t);
            if (idx > lastTriggerIndex) lastTriggerIndex = idx;
        });

        if (lastTriggerIndex !== -1) {
          const query = textBeforeCursor.substring(lastTriggerIndex + 1);
          setMergeTagConfig(prev => prev ? { ...prev, query } : null);
        } else {
          setMergeTagConfig(null);
        }
      }
    }
  };

  const handleSelectTag = (tag: MergeTag) => {
    const selection = window.getSelection();
    if (!selection) return;
    
    let range: Range | null = null;
    if (selection.rangeCount > 0) {
        range = selection.getRangeAt(0);
    }
    
    // If current selection is not valid or not in editor, try saved range
    if ((!range || !editorRef.current?.contains(range.startContainer)) && lastRangeRef.current) {
        range = lastRangeRef.current;
    }

    if (range && editorRef.current?.contains(range.startContainer)) {
      const container = range.startContainer;
      
      if (container.nodeType === Node.TEXT_NODE) {
        const text = container.textContent || '';
        const offset = range.startOffset;
        const textBefore = text.substring(0, offset);
        
        let lastTriggerIndex = -1;
        mergeTagTriggers.forEach(t => {
            const idx = textBefore.lastIndexOf(t);
            if (idx > lastTriggerIndex) lastTriggerIndex = idx;
        });
        
        if (lastTriggerIndex !== -1) {
          // Delete the trigger and the following query text
          range.setStart(container, lastTriggerIndex);
          range.setEnd(container, offset);
          range.deleteContents();
          
          // Create the merge tag span
          const span = document.createElement('span');
          span.className = 'merge-tag';
          span.dataset.tag = tag.id;
          span.contentEditable = 'false';
          span.setAttribute('data-label', tag.label);
          span.innerHTML = tag.value;
          
          range.insertNode(span);
          
          // Add a space after the span
          const space = document.createTextNode('\u00A0');
          range.setStartAfter(span);
          range.collapse(true);
          range.insertNode(space);
          
          // Move cursor after the space
          range.setStartAfter(space);
          range.collapse(true);
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    } else if (editorRef.current) {
        // Fallback: Append to end if no selection found
        const span = document.createElement('span');
        span.className = 'merge-tag';
        span.dataset.tag = tag.id;
        span.contentEditable = 'false';
        span.innerHTML = tag.value;
        editorRef.current.appendChild(span);
        editorRef.current.appendChild(document.createTextNode('\u00A0'));
    }
    
    setMergeTagConfig(null);
    lastRangeRef.current = null;
    
    if (onUpdate && editorRef.current) {
        onUpdate(element.id, { content: editorRef.current.innerHTML });
    }
  };
  
  return (
    <>
      <div
        ref={editorRef}
        contentEditable={isSelected}
        suppressContentEditableWarning={true}
        onBlur={handleBlur}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        style={{
          fontSize: `${element.fontSize}px`,
          fontFamily: element.fontFamily,
          color: element.color,
          textAlign: element.textAlign || 'left',
          fontWeight: element.fontWeight,
          lineHeight: element.lineHeight,
          fontStyle: element.fontStyle,
          wordBreak: 'break-word',
          outline: 'none',
          cursor: isSelected ? 'text' : 'default',
          minHeight: '1em',
        }}
        onClick={(e) => {
            if (isSelected) {
                e.stopPropagation();
            }
        }}
      />
      {mergeTagConfig?.show && createPortal(
        <MergeTagDropdown
          position={mergeTagConfig.position}
          searchQuery={mergeTagConfig.query}
          onSelect={handleSelectTag}
          onClose={() => setMergeTagConfig(null)}
          tags={availableTags}
        />,
        document.body
      )}
    </>
  );
};

const ImageElementRenderer: React.FC<{ element: any }> = ({ element }) => {
  // TODO: Implement actual device detection for responsive visibility
  // For now, we'll just show the image (parent component should handle device mode)
  const shouldHide = false; // Would be based on deviceMode prop and hideOnDesktop/hideOnMobile
  
  if (shouldHide) return null;
  
  // Determine width based on autoWidth setting
  let imageWidth = '100%';
  if (element.autoWidth !== false) {
    // Auto width: image should not exceed container
    imageWidth = '100%';
  } else if (element.width) {
    // Manual width: use the specified value
    imageWidth = typeof element.width === 'string' ? element.width : `${element.width}px`;
  }
  
  const imageElement = (
    <img
      src={element.src}
      alt={element.alt}
      title={element.title}
      style={{
        width: imageWidth,
        maxWidth: '100%', // Always respect container bounds
        height: element.height || 'auto',
        display: 'block',
        objectFit: element.objectFit || 'cover',
      }}
    />
  );
  
  const content = element.link ? (
    <a href={element.link} target={element.target || '_blank'} rel="noopener noreferrer" style={{ display: 'block' }}>
      {imageElement}
    </a>
  ) : imageElement;
  
  return (
    <div style={{ 
      textAlign: element.align || 'left',
      borderWidth: element.borderWidth ? `${element.borderWidth}px` : undefined,
      borderStyle: element.borderStyle || (element.borderWidth ? 'solid' : undefined),
      borderColor: element.borderColor,
      width: '100%', // Wrapper takes full width of parent
      display: 'block', // Block element for proper alignment
      boxSizing: 'border-box',
    }}>
      {content}
    </div>
  );
};

const ButtonElementRenderer: React.FC<{ element: any }> = ({ element }) => {
  const btn = element as ButtonElement;
  
  // Consolidate padding logic to support old paddingX/Y and new padding object
  let paddingValue = '14px 28px'; // Default
  if (btn.padding) {
    if (typeof btn.padding === 'number') {
      paddingValue = `${btn.padding}px`;
    } else {
      paddingValue = `${btn.padding.top ?? 14}px ${btn.padding.right ?? 28}px ${btn.padding.bottom ?? 14}px ${btn.padding.left ?? 28}px`;
    }
  } else if (btn.paddingX !== undefined || btn.paddingY !== undefined) {
    paddingValue = `${btn.paddingY ?? 12}px ${btn.paddingX ?? 24}px`;
  }

  return (
    <div style={{ textAlign: (btn as any).align || 'center', width: '100%' }}>
      <a
        href={btn.link}
        target={btn.target || '_blank'}
        onClick={(e) => e.preventDefault()}
        style={{
          display: btn.fullWidth ? 'block' : 'inline-block',
          width: btn.fullWidth ? '100%' : (typeof btn.width === 'number' ? `${btn.width}px` : btn.width || 'auto'),
          padding: paddingValue,
          backgroundColor: btn.backgroundColor || '#0ea5e9',
          color: btn.color || '#ffffff',
          textDecoration: 'none',
          borderRadius: typeof btn.borderRadius === 'number'
            ? `${btn.borderRadius}px`
            : `${btn.borderRadius?.topLeft || 0}px ${btn.borderRadius?.topRight || 0}px ${btn.borderRadius?.bottomRight || 0}px ${btn.borderRadius?.bottomLeft || 0}px`,
          fontSize: `${btn.fontSize || 14}px`,
          fontFamily: btn.fontFamily,
          border: btn.borderWidth ? `${btn.borderWidth}px ${btn.borderStyle || 'solid'} ${btn.borderColor || 'transparent'}` : 'none',
          fontWeight: btn.fontWeight || 'normal',
          lineHeight: btn.lineHeight || 1.2,
          textAlign: 'center',
          boxSizing: 'border-box',
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
