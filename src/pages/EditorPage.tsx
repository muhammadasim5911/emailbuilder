
import React, { useState, useEffect } from 'react';
import { useEditorStore, useUserStore, useTemplateLibraryStore, useMergeTagStore } from '../store';
import { Toolbar, Canvas, RightSidebar, LayersPanel, TemplateLibraryModal } from '../components/editor';
import { Button } from '../components/ui/button';
import { Toast } from '../components/base';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from '../components/ui/dialog';
import { exportTemplate, createDefaultElement, findElementDeep, findParentElement, parseEmailHTML, injectFooterRows } from '../utils';
import type { ExportOptions } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';

interface EditorPageProps {
  readOnly?: boolean;
  hideToolbar?: boolean;
  hideElementsPanel?: boolean;
  hideSettingsPanel?: boolean;
  hideSaveButton?: boolean;
  onSave?: () => void;
  // Footer configuration
  showFooter?: boolean;
  showPoweredBy?: boolean;
  includeUnsubscribe?: boolean;
}

export const EditorPage: React.FC<EditorPageProps> = ({
  readOnly,
  hideToolbar,
  hideElementsPanel,
  hideSettingsPanel,
  hideSaveButton,
  onSave,
  showFooter = false,
  showPoweredBy = false,
  includeUnsubscribe = false,
}) => {
  const [showPreview, setShowPreview] = useState(false);
  const [exportFormat, setExportFormat] = useState<'html' | 'json' | 'mjml' | 'amp'>('html');
  const [showExportModal, setShowExportModal] = useState(false);
  const [showTemplateLibrary, setShowTemplateLibrary] = useState(false);
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile' | 'tablet'>('desktop');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
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
    updateTemplate,
  } = useEditorStore();

  const { templates, addTemplate } = useTemplateLibraryStore();
  const { mergeTags } = useMergeTagStore();

  // Initialize sample templates
  useEffect(() => {
    if (templates.length === 0) {
      addTemplate({
        id: 'welcome-email',
        name: 'Welcome Email',
        description: 'A simple welcome email for new users',
        width: 600,
        elements: [
          {
            id: uuidv4(),
            type: 'row' as const,
            label: 'Welcome Row',
            children: [
              {
                id: uuidv4(),
                type: 'column' as const,
                label: 'Content Column',
                children: [
                  { id: uuidv4(), type: 'text' as const, content: 'Welcome to our platform!', fontSize: 24, textAlign: 'center' as const, padding: { top: 20, bottom: 20, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: true, locked: false },
                  { id: uuidv4(), type: 'image' as const, src: 'https://picsum.photos/seed/welcome/600/200', alt: 'Welcome Banner', width: '100%', height: 'auto', padding: { top: 10, bottom: 10, left: 0, right: 0 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: true, locked: false },
                  { id: uuidv4(), type: 'text' as const, content: 'We are excited to have you on board.', fontSize: 16, padding: { top: 10, bottom: 10, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: true, locked: false }
                ],
                width: '100%',
                padding: { top: 20, right: 20, bottom: 20, left: 20 },
                margin: { top: 0, right: 0, bottom: 0, left: 0 },
                visible: true,
                locked: false,
              }
            ],
            width: '100%',
            gap: 10,
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            visible: true,
            locked: false,
          }
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
          {
            id: uuidv4(),
            type: 'row' as const,
            label: 'Newsletter Row',
            children: [
              {
                id: uuidv4(),
                type: 'column' as const,
                label: 'Newsletter Column',
                children: [
                  { id: uuidv4(), type: 'text' as const, content: 'Monthly Newsletter', fontSize: 28, fontWeight: 'bold' as const, textAlign: 'center' as const, padding: { top: 30, bottom: 30, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: true, locked: false },
                  { id: uuidv4(), type: 'divider' as const, color: '#eeeeee', height: 1, padding: { top: 10, bottom: 10, left: 0, right: 0 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: true, locked: false },
                  { id: uuidv4(), type: 'text' as const, content: 'Here are the latest updates...', fontSize: 16, padding: { top: 20, bottom: 20, left: 20, right: 20 }, margin: { top: 0, bottom: 0, left: 0, right: 0 }, visible: true, locked: false }
                ],
                width: '100%',
                padding: { top: 20, right: 20, bottom: 20, left: 20 },
                margin: { top: 0, right: 0, bottom: 0, left: 0 },
                visible: true,
                locked: false,
              }
            ],
            width: '100%',
            gap: 10,
            padding: { top: 0, right: 0, bottom: 0, left: 0 },
            margin: { top: 0, right: 0, bottom: 0, left: 0 },
            visible: true,
            locked: false,
          }
        ] as any[],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        defaultBackgroundColor: '#ffffff',
        defaultFontFamily: 'Helvetica',
        defaultFontSize: 16,
        defaultLineHeight: 1.6,
        defaultTextColor: '#333333',
      });
      
      // Add HTML template (World Tourism Day)
      const htmlContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
<head><meta charset="UTF-8"><meta content="width=device-width, initial-scale=1" name="viewport"><meta name="x-apple-disable-message-reformatting"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta content="telephone=no" name="format-detection"><title>World Tourism Day</title></head>
<body class="body" style="width:100%;height:100%;padding:0;Margin:0">
<div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#D4F3FE">
<table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-color:#D4F3FE">
<tr><td valign="top" style="padding:0;Margin:0">
<table cellpadding="0" cellspacing="0" align="center" class="es-header" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%;background-color:transparent">
<tr><td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-header-body" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
<tr><td align="left" style="padding:20px;Margin:0">
<table cellpadding="0" cellspacing="0" width="100%" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td valign="top" align="center" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://viewstripo.email"><img src="https://epxkylf.stripocdn.email/content/guids/CABINET_0ee1c5a7ffbcbc022a316635d5ce8f13/images/group_116.png" alt="Logo" height="60" title="Logo" style="display:block;font-size:14px;border:0"></a></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
<table cellspacing="0" cellpadding="0" align="center" class="es-content" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%">
<tr><td align="center" style="padding:0;Margin:0">
<table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="es-content-body" style="border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" role="none">
<tr><td align="left" style="padding:0;Margin:0">
<table width="100%" cellspacing="0" cellpadding="0" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td valign="top" align="center" style="padding:0;Margin:0;width:600px">
<table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0"><a target="_blank" href="https://viewstripo.email"><img src="https://epxkylf.stripocdn.email/content/guids/bannerImgGuid/images/image16620443057282756.png" alt="World tourism day" title="World tourism day" width="600" height="400" style="display:block;font-size:14px;border:0"></a></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
<table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%">
<tr><td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr><td align="left" style="Margin:0;padding:20px 20px 30px 20px">
<table cellpadding="0" cellspacing="0" width="100%" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0;padding-right:40px;padding-left:40px"><p style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#455A64;font-size:14px">On the occasion of <strong>World Tourism Day</strong>, I wish that you are blessed with more and more holidays to see many more new places and create beautiful memories to cherish.</p></td></tr>
<tr><td align="center" style="padding:0;Margin:0;padding-top:20px;padding-right:40px;padding-left:40px"><p style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#455A64;font-size:14px">Shop now and save up to 25% with our autumn deals</p></td></tr>
<tr><td align="center" style="padding:0;Margin:0;padding-top:20px"><span style="border-style:solid;border-color:#2CB543;background:#BD242B;border-width:0px;display:inline-block;border-radius:10px;width:auto"><a href="https://viewstripo.email" target="_blank" style="text-decoration:none;color:#FFFFFF;font-size:18px;padding:10px 20px;display:inline-block;background:#BD242B;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;line-height:21.6px;width:auto;text-align:center">Shopping for Travel</a></span></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
<table cellpadding="0" cellspacing="0" align="center" class="es-footer" role="none" style="border-collapse:collapse;border-spacing:0px;width:100%;background-color:transparent">
<tr><td align="center" style="padding:0;Margin:0">
<table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-footer-body" role="none" style="border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
<tr><td align="left" style="Margin:0;padding:40px 20px 20px 20px">
<table cellpadding="0" cellspacing="0" width="100%" role="none" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" valign="top" style="padding:0;Margin:0;width:560px">
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="border-collapse:collapse;border-spacing:0px">
<tr><td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;font-family:Orbitron, sans-serif;font-size:24px;font-weight:bold;line-height:28.8px;color:#455A64">Any questions? <a href="https://viewstripo.email" target="_blank" style="text-decoration:underline;color:#068FC1;font-size:24px">We're here to help!</a></h2></td></tr>
<tr><td align="center" style="padding:0;Margin:0"><p style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#455A64;font-size:14px">Copyright © 2022 Delivery, All rights reserved.</p></td></tr>
</table></td></tr></table></td></tr></table></td></tr></table>
</td></tr></table></div></body></html>`;
      
      addTemplate({
        id: 'tourism-day-html',
        name: 'World Tourism Day',
        description: 'HTML email template - Travel promotion',
        width: 600,
        elements: [
          {
            id: uuidv4(),
            type: 'html' as const,
            content: htmlContent,
            visible: true,
            locked: false,
          }
        ] as any[],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        defaultBackgroundColor: '#D4F3FE',
        defaultFontFamily: 'Arial',
        defaultFontSize: 14,
        defaultLineHeight: 1.5,
        defaultTextColor: '#455A64',
      });
    }
  }, [templates.length, addTemplate]);


  const handleLoadTemplate = (template: any) => {
    // Check if template contains HTML element that needs parsing
    let templateToLoad = template;
    
    if (template.elements.length > 0 && template.elements[0]?.type === 'html') {
      try {
        const htmlContent = template.elements[0].content;
        const parsedElements = parseEmailHTML(htmlContent);
        
        if (parsedElements.length > 0) {
          templateToLoad = {
            ...template,
            elements: parsedElements,
          };
          showToast('HTML template parsed into editable elements', 'success');
        }
      } catch (error) {
        console.error('Error parsing HTML template:', error);
        showToast('Error parsing HTML template', 'error');
      }
    }
    
    // Regenerate IDs to avoid conflicts with existing elements
    const regenerateIds = (elements: any[]): any[] => {
      return elements.map(el => {
        const newEl = { ...el, id: uuidv4() };
        if ('children' in newEl && newEl.children) {
          newEl.children = regenerateIds(newEl.children);
        }
        return newEl;
      });
    };

    const templateWithNewIds = {
      ...templateToLoad,
      elements: regenerateIds(templateToLoad.elements),
    };

    loadEditorTemplate(template.id, templateWithNewIds);
    setShowTemplateLibrary(false);
    showToast(`"${template.name}" loaded`, 'success');
  };

  const selectedElement = selectedElementId
    ? findElementDeep(currentTemplate?.elements || [], selectedElementId) || null
    : null;

  // Smart selection: when clicking a column, select its parent row instead
  const handleElementSelect = (id: string | null) => {
    if (!id || !currentTemplate) {
      selectElement(id);
      return;
    }

    const element = findElementDeep(currentTemplate.elements, id);
    if (element?.type === 'column') {
      // Find parent row and select it instead
      const parentRow = findParentElement(currentTemplate.elements, id);
      if (parentRow && parentRow.type === 'row') {
        selectElement(parentRow.id);
        return;
      }
    }

    selectElement(id);
  };


  const { features } = useUserStore();

  // Initialize with default template if needed
  React.useEffect(() => {
    if (!currentTemplate) {
      createTemplate('Email Template 1', 'Start building your email');
    }
  }, [currentTemplate, createTemplate]);

  // Inject footer rows when showFooter is enabled
  useEffect(() => {
    if (!currentTemplate || !showFooter) return;
    
    // Check if footer already exists
    const hasFooter = currentTemplate.elements.some((el: any) => el._isFooter);
    
    if (!hasFooter && (showPoweredBy || includeUnsubscribe)) {
      // Inject footer rows
      const updatedElements = injectFooterRows(
        currentTemplate.elements,
        showPoweredBy,
        includeUnsubscribe
      );
      
      updateTemplate({ elements: updatedElements as any });
    }
  }, [currentTemplate?.id, showFooter, showPoweredBy, includeUnsubscribe]);

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
      <div className="flex flex-1 overflow-hidden gap-2 md:gap-4 p-2 md:p-4 bg-muted/20 relative">
        {/* Left Sidebar - Elements */}


        {/* Center - Canvas */}
        <Canvas
          template={currentTemplate}
          selectedElementId={selectedElementId}
          zoom={zoom}
          deviceMode={deviceMode}
          showGrid={false}
          onElementSelect={handleElementSelect}
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
            // Handle Layout Blocks
            if (elementType.startsWith('layout-')) {
                let columns: any[] = [];
                if (elementType === 'layout-1') columns = [{ width: '100%' }];
                if (elementType === 'layout-2') columns = [{ width: '50%' }, { width: '50%' }];
                if (elementType === 'layout-3') columns = [{ width: '33.33%' }, { width: '33.33%' }, { width: '33.33%' }];
                if (elementType === 'layout-4') columns = [{ width: '25%' }, { width: '25%' }, { width: '25%' }, { width: '25%' }];
                if (elementType === 'layout-1-2') columns = [{ width: '33.33%' }, { width: '66.66%' }];
                if (elementType === 'layout-2-1') columns = [{ width: '66.66%' }, { width: '33.33%' }];

                const rowElement = createDefaultElement('row') as any;
                rowElement.children = columns.map(col => ({
                    ...createDefaultElement('column'),
                    id: uuidv4(),
                    width: col.width,
                    visible: true,
                    locked: false,
                }));
                
                addElementAtIndex(rowElement, index);
                showToast(`Row with ${columns.length} columns added`, 'success');
                return;
            }

            // Normal Elements
            if (elementType === 'row') {
               const elementData = createDefaultElement(elementType);
               addElementAtIndex(elementData as any, index);
               showToast(`${elementType} added`, 'success');
            } else {
               const elementData = createDefaultElement(elementType);
               // Auto-wrap non-row elements
               const rowElement = createDefaultElement('row') as any;
               if (rowElement.children && rowElement.children.length > 0) {
                 rowElement.children[0].children.push(elementData);
               }
               addElementAtIndex(rowElement, index);
               showToast(`${elementType} added in new row`, 'success');
            }
          }}
          onAddChild={(parentId, elementType) => {
            const elementData = createDefaultElement(elementType);
            addChildElement(parentId, elementData as any);
            showToast(`${elementType} added to column`, 'success');
          }}
        />

        {/* Mobile Sidebar Toggle Button */}
        <Button
          variant="secondary"
          size="icon"
          className="md:hidden fixed bottom-4 right-4 z-50 h-12 w-12 rounded-full shadow-lg"
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        >
          {isMobileSidebarOpen ? (
            <PanelRightClose className="h-5 w-5" />
          ) : (
            <PanelRightOpen className="h-5 w-5" />
          )}
        </Button>

        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}

        {/* Right Sidebar - Combined Properties + Tabs */}
        <div className={`
          fixed md:relative inset-y-0 right-0 
          w-[280px] md:w-80 
          bg-background flex flex-col z-40 shadow-lg border-l
          transform transition-transform duration-300 ease-in-out
          ${isMobileSidebarOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          top-[53px] md:top-0 h-[calc(100%-53px)] md:h-auto
        `}>
            <RightSidebar 
                selectedElement={selectedElement}
                onUpdateElement={(updates) => selectedElementId && updateElement(selectedElementId, updates)}
                onDeselectElement={() => selectElement(null)}
                template={currentTemplate}
                onUpdateTemplate={updateTemplate}
            />
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
