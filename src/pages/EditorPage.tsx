
import React, { useState, useEffect } from 'react';
import { useEditorStore, useUserStore, useTemplateLibraryStore } from '../store';
import { Toolbar, Canvas, ElementsPanel, SettingsPanel, LayersPanel, TemplateLibraryModal } from '../components/editor';
import { Button } from '../components/ui/button';
import { Toast } from '../components/base';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '../components/ui/dialog';
import { exportTemplate, createDefaultElement } from '../utils';
import type { ExportOptions } from '../types';

export const EditorPage: React.FC = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [exportFormat, setExportFormat] = useState<'html' | 'json' | 'mjml' | 'amp'>('html');
  const [showExportModal, setShowExportModal] = useState(false);
  const [showTemplateLibrary, setShowTemplateLibrary] = useState(false);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'info'; visible: boolean }>({
    message: '',
    type: 'info',
    visible: false,
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type, visible: true });
  };

  // Store subscriptions
  const {
    currentTemplate,
    selectedElementId,
    zoom,
    isDirty,
    createTemplate,
    addElement,
    addElementAtIndex,
    addChildElement,
    updateElement,
    deleteElement,
    duplicateElement,
    reorderElements,
    moveElement,
    selectElement,
    setZoom,
    saveTemplate,
    undo,
    redo,
    loadTemplate: loadEditorTemplate,
  } = useEditorStore();

  const { templates, addTemplate } = useTemplateLibraryStore();

  // Initialize sample templates
  useEffect(() => {
    if (templates.length === 0) {
      addTemplate({
        id: 'welcome-email',
        name: 'Welcome Email',
        description: 'A simple welcome email for new users',
        width: 600,
        elements: [
           { id: '1', type: 'text', content: 'Welcome to our platform!', fontSize: 24, textAlign: 'center', padding: { top: 20, bottom: 20, left: 20, right: 20 } },
           { id: '2', type: 'image', src: 'https://via.placeholder.com/600x200', alt: 'Welcome Banner', width: '100%', height: 'auto' },
           { id: '3', type: 'text', content: 'We are excited to have you on board.', fontSize: 16, padding: { top: 10, bottom: 10, left: 20, right: 20 } }
        ] as any[],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        defaultBackgroundColor: '#ffffff',
        defaultFontFamily: 'Arial',
        defaultFontSize: 16,
        defaultLineHeight: 1.5,
        defaultTextColor: '#000000',
      });
      addTemplate({
        id: 'newsletter',
        name: 'Monthly Newsletter',
        description: 'Standard newsletter layout',
        width: 600,
        elements: [
            { id: '1', type: 'text', content: 'Monthly Newsletter', fontSize: 28, fontWeight: 'bold', textAlign: 'center', padding: { top: 30, bottom: 30, left: 20, right: 20 } },
            { id: '2', type: 'divider', color: '#eeeeee', height: 1, padding: { top: 10, bottom: 10, left: 0, right: 0 } },
            { id: '3', type: 'text', content: 'Here are the latest updates...', fontSize: 16, padding: { top: 20, bottom: 20, left: 20, right: 20 } }
        ] as any[],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        defaultBackgroundColor: '#ffffff',
        defaultFontFamily: 'Helvetica',
        defaultFontSize: 16,
        defaultLineHeight: 1.6,
        defaultTextColor: '#333333',
      });
    }
  }, [templates.length, addTemplate]);

  const handleLoadTemplate = (template: any) => {
    loadEditorTemplate(template.id, template);
    setShowTemplateLibrary(false);
    showToast('Template loaded successfully', 'success');
  };

  const selectedElement = selectedElementId
    ? currentTemplate?.elements.find((el: any) => el.id === selectedElementId)
    : null;

  const { features } = useUserStore();

  // Initialize with default template if needed
  React.useEffect(() => {
    if (!currentTemplate) {
      createTemplate('Email Template 1', 'Start building your email');
    }
  }, [currentTemplate, createTemplate]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Delete key - delete selected element
      if (e.key === 'Delete' && selectedElementId) {
        deleteElement(selectedElementId);
        showToast('Element deleted', 'success');
      }
      
      // Ctrl/Cmd + Z - Undo
      if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        undo();
        showToast('Undo', 'info');
      }
      
      // Ctrl/Cmd + Shift + Z or Ctrl/Cmd + Y - Redo
      if (((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'z') || ((e.ctrlKey || e.metaKey) && e.key === 'y')) {
        e.preventDefault();
        redo();
        showToast('Redo', 'info');
      }
      
      // Ctrl/Cmd + D - Duplicate selected element
      if ((e.ctrlKey || e.metaKey) && e.key === 'd' && selectedElementId) {
        e.preventDefault();
        duplicateElement(selectedElementId);
        showToast('Element duplicated', 'success');
      }
      
      // Ctrl/Cmd + S - Save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        saveTemplate();
        showToast('Template saved', 'success');
      }

      // Escape - Deselect
      if (e.key === 'Escape' && selectedElementId) {
        selectElement(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedElementId, deleteElement, undo, redo, duplicateElement, saveTemplate, selectElement]);

  const handleExport = (format: string) => {
    setExportFormat(format as any);
    setShowExportModal(true);
  };

  const handleExportConfirm = () => {
    if (!currentTemplate) return;

    const options: ExportOptions = {
      format: exportFormat,
      minify: true,
      includeStyles: true,
      responsive: true,
    };

    const exported = exportTemplate(currentTemplate, options);
    
    // Create download
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(exported)}`
    );
    element.setAttribute('download', `email.${exportFormat}`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setShowExportModal(false);
  };

  return (
    <div className="h-screen bg-background flex flex-col font-sans text-foreground">
      {/* Toolbar */}
      <Toolbar
        zoom={zoom}
        isDirty={isDirty}
        deviceMode={deviceMode}
        onDeviceModeChange={setDeviceMode}
        onZoomChange={setZoom}
        onUndo={undo}
        onRedo={redo}
        onSave={() => {
          saveTemplate();
          showToast('Template saved successfully', 'success');
        }}
        onExport={handleExport}
        onShowPreview={() => setShowPreview(true)}
        onOpenTemplates={() => setShowTemplateLibrary(true)}
      />

      {/* Main Editor Layout */}
      <div className="flex flex-1 overflow-hidden gap-4 p-4 bg-muted/20">
        {/* Left Sidebar - Elements */}
        <div className="w-64 bg-background rounded-lg shadow-sm border border-border overflow-hidden flex flex-col">
          <ElementsPanel
            onAddElement={addElement}
            isPro={features.advancedElements}
          />
        </div>

        {/* Center - Canvas */}
        <Canvas
          template={currentTemplate}
          selectedElementId={selectedElementId}
          zoom={zoom}
          deviceMode={deviceMode}
          showGrid={false}
          onElementSelect={selectElement}
          onElementUpdate={updateElement}
          onElementDelete={deleteElement}
          onCanvasClick={() => selectElement(null)}
          onReorderElements={(fromIndex, toIndex) => {
            reorderElements(fromIndex, toIndex);
            showToast('Element reordered', 'success');
          }}
          onMoveElement={(activeId, overId) => {
            moveElement(activeId, overId);
            // Optional: showToast('Element moved', 'success');
          }}
          onAddElementAtIndex={(elementType, index) => {
            const elementData = createDefaultElement(elementType);
            addElementAtIndex({ ...elementData, type: elementType } as any, index);
            showToast(`${elementType} added`, 'success');
          }}
          onAddChild={(parentId, elementType) => {
            const elementData = createDefaultElement(elementType);
            addChildElement(parentId, { ...elementData, type: elementType } as any);
            showToast(`${elementType} added to column`, 'success');
          }}
        />

        {/* Right Sidebar - Split: Layers + Settings */}
        <div className="w-80 flex flex-col gap-4">
          {/* Layers Panel (Disabled for now) */}
          {/* 
          <div className="h-64 bg-background rounded-lg shadow-sm border border-border overflow-hidden flex flex-col">
            <LayersPanel
              elements={currentTemplate?.elements || []}
              selectedElementId={selectedElementId}
              onSelectElement={selectElement}
              onDeleteElement={deleteElement}
              onDuplicateElement={duplicateElement}
            />
          </div>
          */}

          {/* Settings Panel */}
          <div className="flex-1 bg-background rounded-lg shadow-sm border border-border overflow-hidden flex flex-col">
            <SettingsPanel
              element={selectedElement || null}
              onUpdate={(updates: any) => {
                if (selectedElementId) {
                  updateElement(selectedElementId, updates);
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Preview Dialog */}
      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent className="max-w-4xl max-h-[85vh]">
          <DialogHeader>
            <DialogTitle>Email Preview</DialogTitle>
          </DialogHeader>
          <div className="bg-muted p-8 rounded-lg overflow-auto max-h-[60vh] flex justify-center">
            {currentTemplate && (
              <div
                className="bg-white shadow-sm"
                style={{
                  width: `${currentTemplate.width}px`,
                  backgroundColor: currentTemplate.defaultBackgroundColor,
                  minHeight: '400px'
                }}
              >
                {currentTemplate.elements.map((el: any) => (
                  <div key={el.id} className="p-4 border border-transparent hover:border-blue-200">
                    {el.type === 'text' && <div style={{ fontSize: el.fontSize, color: el.color, textAlign: el.align }} dangerouslySetInnerHTML={{ __html: el.content }} />}
                    {el.type === 'image' && <img src={el.src} alt={el.alt} style={{ maxWidth: '100%' }} />}
                    {el.type === 'button' && (
                      <div style={{ textAlign: el.align }}>
                        <a href={el.link} style={{ display: 'inline-block', background: el.backgroundColor, color: el.color, padding: '10px 20px', borderRadius: '4px', textDecoration: 'none' }}>
                          {el.text}
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Export Dialog */}
      <Dialog open={showExportModal} onOpenChange={setShowExportModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Export Template</DialogTitle>
            <DialogDescription>
              Choose export format and download your email template.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="p-4 bg-muted rounded-md">
              <p className="font-medium text-foreground mb-2">Format: {exportFormat.toUpperCase()}</p>
              <p className="text-sm text-muted-foreground">
                {exportFormat === 'html' && 'Export as standard HTML email'}
                {exportFormat === 'json' && 'Export as JSON data structure'}
                {exportFormat === 'mjml' && 'Export as MJML markup language'}
                {exportFormat === 'amp' && 'Export as Google AMP for Email'}
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowExportModal(false)}>
              Cancel
            </Button>
            <Button onClick={handleExportConfirm}>
              Export
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={() => setToast({ ...toast, visible: false })}
      />
      
      {/* Template Library Modal */}
      <TemplateLibraryModal
        isOpen={showTemplateLibrary}
        onClose={() => setShowTemplateLibrary(false)}
        onLoadTemplate={handleLoadTemplate}
      />
    </div>
  );
};

export default EditorPage;
