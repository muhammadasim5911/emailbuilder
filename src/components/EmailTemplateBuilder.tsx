import React, { useEffect } from 'react';
import { EmailTemplateBuilderProps, SaveData } from '../types';
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
  const { currentTemplate, loadTemplate, updateTemplate } = useEditorStore();
  const { setMergeTags, setMergeTagTriggers } = useMergeTagStore();

  // Initialize merge tags and triggers
  useEffect(() => {
    setMergeTags(mergeTags);
    setMergeTagTriggers(mergeTagTriggers);
  }, [mergeTags, mergeTagTriggers, setMergeTags, setMergeTagTriggers]);

  // Load initial template
  useEffect(() => {
    if (initialTemplate) {
      loadTemplate(initialTemplate.id, initialTemplate);
    }
  }, [initialTemplate, loadTemplate]);

  // Call onChange when template changes
  useEffect(() => {
    if (currentTemplate && onChange) {
      onChange(currentTemplate);
    }
  }, [currentTemplate, onChange]);

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
    />
  );
};

export default EmailTemplateBuilder;
