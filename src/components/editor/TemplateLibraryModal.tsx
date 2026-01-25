
import React from 'react';
import { useTemplateLibraryStore } from '../../store';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import type { EmailTemplate } from '../../types';

interface TemplateLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoadTemplate: (template: EmailTemplate) => void;
}

export const TemplateLibraryModal: React.FC<TemplateLibraryModalProps> = ({
  isOpen,
  onClose,
  onLoadTemplate,
}) => {
  const { templates } = useTemplateLibraryStore();

  const handleTemplateSelect = (template: EmailTemplate) => {
    onLoadTemplate(template);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[85vh]">
        <DialogHeader>
          <DialogTitle>Template Library</DialogTitle>
          <DialogDescription>
            Select a template to start editing.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto p-4">
          {templates.length === 0 ? (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              <p className="text-lg font-medium mb-2">No templates found</p>
              <p className="text-sm">Create a new template to get started</p>
            </div>
          ) : (
            templates.map((template) => (
              <div
                key={template.id}
                className="border border-border rounded-lg p-4 hover:border-primary hover:shadow-md transition-all cursor-pointer bg-card group"
                onClick={() => handleTemplateSelect(template)}
              >
                <div className="bg-muted h-32 rounded mb-3 flex items-center justify-center text-4xl group-hover:bg-muted/80 transition-colors">
                  📧
                </div>
                <h3 className="font-medium text-foreground mb-1 truncate">
                  {template.name}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {template.description || 'No description'}
                </p>
                <div className="mt-3 flex justify-between items-center text-xs text-muted-foreground">
                  <span>{new Date(template.updatedAt).toLocaleDateString()}</span>
                  <span className="group-hover:text-primary font-medium">Load &rarr;</span>
                </div>
              </div>
            ))
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
