import React, { useEffect, useRef } from 'react';
import type { EmailTemplateBuilderProps, SaveData } from '../types';
import { useEditorStore, useMergeTagStore } from '../store';
import { templateToHtml, templateToMjml, exportTemplate } from '../utils';
import EditorPage from '../pages/EditorPage';

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
}) => {
  const { currentTemplate, loadTemplate } = useEditorStore();
  const { setMergeTags, setMergeTagTriggers } = useMergeTagStore();
  const initializedRef = useRef(false);

  // Initialize merge tags and triggers only once
  useEffect(() => {
    if (!initializedRef.current) {
      setMergeTags(mergeTags);
      setMergeTagTriggers(mergeTagTriggers);
      initializedRef.current = true;
    }
  }, []); // Empty deps - only run once

  // Load initial template
  useEffect(() => {
    if (initialTemplate && !currentTemplate) {
      loadTemplate(initialTemplate.id, initialTemplate);
    }
  }, [initialTemplate?.id]); // Only re-run if template ID changes

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
  // @ts-ignore - EditorPage props interface needs to be updated
  return (
    <EditorPage
      readOnly={readOnly}
      hideToolbar={hideToolbar}
      hideElementsPanel={hideElementsPanel}
      hideSettingsPanel={hideSettingsPanel}
      hideSaveButton={hideSaveButton}
      onSave={handleSave}
    />
  );
};

export default EmailTemplateBuilder;
