import React from 'react';
import type { EmailTemplate } from '../../../types';
import { Label } from '../../ui/label';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Separator } from '../../ui/separator';

interface BodyTabProps {
  template: EmailTemplate | null;
  onUpdateTemplate: (updates: Partial<EmailTemplate>) => void;
}

export const BodyTab: React.FC<BodyTabProps> = ({ template, onUpdateTemplate }) => {
  if (!template) {
    return <div className="p-4 text-center text-muted-foreground">No template selected</div>;
  }

  return (
    <div className="h-full overflow-y-auto custom-scrollbar p-6 space-y-8">
        {/* General Section */}
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                 <h3 className="font-semibold text-sm">General</h3>
            </div>
            
            <div className="space-y-3">
                 <div className="flex items-center justify-between">
                    <Label className="text-xs">Text Color</Label>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border overflow-hidden relative shadow-sm">
                            <input
                                type="color"
                                value={template.defaultTextColor || '#000000'}
                                onChange={(e) => onUpdateTemplate({ defaultTextColor: e.target.value })}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: template.defaultTextColor || '#000000' }} />
                        </div>
                    </div>
                 </div>
                 
                 <Separator />

                 <div className="flex items-center justify-between">
                    <Label className="text-xs">Background Color</Label>
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded border overflow-hidden relative shadow-sm">
                            <input
                                type="color"
                                value={template.defaultBackgroundColor || '#ffffff'}
                                onChange={(e) => onUpdateTemplate({ defaultBackgroundColor: e.target.value })}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: template.defaultBackgroundColor || '#ffffff' }} />
                        </div>
                   </div>
                 </div>

                 <Separator />
                 
                 <div className="flex items-center justify-between">
                    <Label className="text-xs">Content Width</Label>
                    <div className="flex items-center gap-1 w-24">
                        <Input 
                            type="number" 
                            className="h-8 text-xs pr-1 text-right" 
                            value={template.width}
                            onChange={(e) => onUpdateTemplate({ width: Number(e.target.value) })}
                        />
                        <span className="text-xs text-muted-foreground">px</span>
                    </div>
                 </div>
            </div>
        </div>

        {/* Typography Section */}
        <div className="space-y-4">
            <h3 className="font-semibold text-sm">Global Typography</h3>
            
            <div className="space-y-3">
                 <div className="space-y-1.5">
                    <Label className="text-xs">Font Family</Label>
                    <Select
                        value={template.defaultFontFamily || 'Arial'}
                        onValueChange={(value) => onUpdateTemplate({ defaultFontFamily: value as any })}
                    >
                        <SelectTrigger className="h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Arial">Arial</SelectItem>
                          <SelectItem value="Helvetica">Helvetica</SelectItem>
                          <SelectItem value="Georgia">Georgia</SelectItem>
                          <SelectItem value="Courier New">Courier New</SelectItem>
                          <SelectItem value="Verdana">Verdana</SelectItem>
                          <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
            </div>
        </div>
        
        {/* Email Settings Section - Mimic Reference */}
        <div className="space-y-4 pt-4 border-t">
            <h3 className="font-semibold text-sm">Email Settings</h3>
             <div className="space-y-1.5">
                <Label className="text-xs">Preheader Text</Label>
                <Input 
                    type="text" 
                    placeholder="Brief summary..."
                    className="h-8 text-xs" 
                    // Assuming description is used or we need a new field. Using description for now.
                    value={template.description || ''}
                    onChange={(e) => onUpdateTemplate({ description: e.target.value })}
                />
            </div>
        </div>

    </div>
  );
};
