import React from 'react';
import { EmailTemplateBuilder } from '../src/components/EmailTemplateBuilder';
import type { MergeTag, SaveData } from '../src/types';

/**
 * Example: Using Email Template Builder as a Library
 * 
 * This example demonstrates how to integrate the Email Template Builder
 * into your application as a reusable library component.
 */

function ExampleApp() {
  // Define merge tags that users can insert into their emails
  const mergeTags: MergeTag[] = [
    {
      id: '1',
      label: 'First Name',
      value: '{{firstName}}',
      category: 'user',
      trigger: '@',
      description: "Recipient's first name",
    },
    {
      id: '2',
      label: 'Last Name',
      value: '{{lastName}}',
      category: 'user',
      trigger: '@',
      description: "Recipient's last name",
    },
    {
      id: '3',
      label: 'Email',
      value: '{{email}}',
      category: 'user',
      trigger: '@',
      description: "Recipient's email address",
    },
    {
      id: '4',
      label: 'Company Name',
      value: '{{companyName}}',
      category: 'system',
      trigger: '#',
      description: 'Your company name',
    },
    {
      id: '5',
      label: 'Unsubscribe Link',
      value: '{{unsubscribeLink}}',
      category: 'system',
      trigger: '#',
      description: 'Link to unsubscribe from emails',
    },
   
  ];

  // Handle template changes (auto-save to localStorage)
  const handleChange = (template: any) => {
    console.log('Template changed:', template);
    // Auto-save draft to localStorage
    localStorage.setItem('emailDraft', JSON.stringify(template));
  };

  // Handle save - receives all export formats
  const handleSave = (data: SaveData) => {
    console.log('Template saved!');
    console.log('Template object:', data.template);
    console.log('HTML export:', data.html);
    console.log('JSON export:', data.json);
    console.log('MJML export:', data.mjml);

  };

  return (
    <div  className="h-screen">``
      <EmailTemplateBuilder
        // Merge tags configuration
        mergeTags={mergeTags}
        mergeTagTriggers={['@', '#']} // Configurable triggers
        // Callbacks
        onChange={handleChange}
        onSave={handleSave}
        
        // Footer configuration
        showFooter={true}  // Shows "Powered by Public Circles" and "Unsubscribe" footer
        
        // UI customization (all optional)
        // Note: Preview, Export, and Templates buttons are automatically hidden
        // when their callbacks (onShowPreview, onExport, onOpenTemplates) are not provided
        // readOnly={false}
        // hideToolbar={false}
        // hideElementsPanel={false}
        // hideSettingsPanel={false}
        // hideSaveButton={false}
      />
    </div>
  );
}

export default ExampleApp;
