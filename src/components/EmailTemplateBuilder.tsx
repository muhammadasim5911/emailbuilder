import React, { useEffect, useRef } from 'react';
import type { EmailTemplateBuilderProps, SaveData } from '../types';
import { useEditorStore, useMergeTagStore } from '../store';
import { templateToHtml, templateToMjml, exportTemplate } from '../utils';
import EditorPage from '../pages/EditorPage';
import '../index.css'; // Import global styles for library build

/**
 * EmailTemplateBuilder - Main library component
 * 
 * This component wraps the email editor and exposes a clean API for external applications.
 * It handles data flow between the parent app and the editor.
 */
export const EmailTemplateBuilder: React.FC<EmailTemplateBuilderProps> = ({
  initialTemplate,
  mergeTags = [],
  mergeTagTriggers = ['@', '#'],
  onChange,
  onSave,
  readOnly = false,
  hideToolbar = false,
  hideElementsPanel = false,
  hideSettingsPanel = false,
  hideSaveButton = false,
  hideTemplatesButton = false,
  // Footer configuration
  showFooter = false,
  showPoweredBy,
  includeUnsubscribe,
}) => {
  const { currentTemplate, loadTemplate, createTemplate } = useEditorStore();
  const { setMergeTags, setMergeTagTriggers } = useMergeTagStore();
  // Sync merge tags and triggers from props to store
  useEffect(() => {
    setMergeTags(mergeTags);
    setMergeTagTriggers(mergeTagTriggers);
  }, [mergeTags, mergeTagTriggers, setMergeTags, setMergeTagTriggers]);

  // Load initial template or reset
  useEffect(() => {
    if (initialTemplate) {
      // Logic for when a template is provided
      if (typeof initialTemplate === 'string') {
        // For strings, we can't easily check ID, so we might need to assume it's new or check content hash
        // For now, let's load it if we don't have a template or if the current one doesn't look like this string
        // Since we convert string to object, exact match is hard. Let's just load it.
        loadTemplate('imported-html', initialTemplate);
      } else {
        // For objects, check ID mismatch or if no current template
        if (!currentTemplate || currentTemplate.id !== initialTemplate.id) {
          loadTemplate(initialTemplate.id, initialTemplate);
        }
      }
    } else {
      // No initial template provided - RESET to fresh state if we have a template loaded
      // This ensures "New Template" flows work correctly by clearing old data
      if (currentTemplate) {
        createTemplate('New Email', 'Start with a fresh template');
      }
    }
  }, [initialTemplate]); // Re-run ONLY when initialTemplate prop changes

  // Call onChange when template changes
  useEffect(() => {
    if (currentTemplate && onChange) {
      onChange(currentTemplate);
    }
  }, [currentTemplate]);

  // Handle save
  const handleSave = () => {
    if (!currentTemplate || !onSave) return;

    const saveData: SaveData = {
      template: currentTemplate,
      html: templateToHtml(currentTemplate),
      json: JSON.stringify(currentTemplate, null, 2),
      mjml: templateToMjml(currentTemplate),
    };

    onSave(saveData);
  };

  // Pass props to EditorPage
  return (
    <EditorPage
      readOnly={readOnly}
      hideToolbar={hideToolbar}
      hideElementsPanel={hideElementsPanel}
      hideSettingsPanel={hideSettingsPanel}
      hideSaveButton={hideSaveButton}
      onSave={handleSave}
      showFooter={showFooter}
      showPoweredBy={showPoweredBy ?? showFooter}
      includeUnsubscribe={includeUnsubscribe ?? showFooter}
    />
  );
};

export default EmailTemplateBuilder;
