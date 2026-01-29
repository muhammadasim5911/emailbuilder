import React, { useState } from 'react';
import type { EmailElement, EmailTemplate } from '../../types';
import { SettingsPanel } from './SettingsPanel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { ContentTab } from './sidebar/ContentTab';
import { BlocksTab } from './sidebar/BlocksTab';
import { BodyTab } from './sidebar/BodyTab';
import { Shapes, FileBox, LayoutTemplate } from 'lucide-react';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';

interface RightSidebarProps {
  selectedElement: EmailElement | null;
  onUpdateElement: (updates: Partial<EmailElement>) => void;
  onDeselectElement: () => void;
  template: EmailTemplate | null;
  onUpdateTemplate: (updates: Partial<EmailTemplate>) => void;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  selectedElement,
  onUpdateElement,
  onDeselectElement,
  template,
  onUpdateTemplate
}) => {
  const [activeTab, setActiveTab] = useState('content');

  // If an element is selected, show the Properties Panel (SettingsPanel)
  if (selectedElement) {
    return (
        <div className="h-full flex flex-col bg-background">
            <div className="p-2 border-b flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={onDeselectElement} className="h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-semibold">Back to Elements</span>
            </div>
            <div className="flex-1 overflow-hidden">
                <SettingsPanel element={selectedElement} onUpdate={onUpdateElement} />
            </div>
        </div>
    );
  }

  // Otherwise, show the Tabs (Content | Blocks | Body)
  return (
    <div className="h-full flex flex-col bg-background border-l">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
        <div className="p-2 border-b bg-muted/30">
            <TabsList className="w-full grid grid-cols-3 h-auto p-1 bg-muted/50">
              <TabsTrigger value="content" className="flex flex-col items-center gap-1.5 py-2.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                 <Shapes className="w-4 h-4" />
                 <span className="text-[10px] font-medium">Content</span>
              </TabsTrigger>
              <TabsTrigger value="blocks" className="flex flex-col items-center gap-1.5 py-2.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                 <LayoutTemplate className="w-4 h-4" />
                 <span className="text-[10px] font-medium">Blocks</span>
              </TabsTrigger>
              <TabsTrigger value="body" className="flex flex-col items-center gap-1.5 py-2.5 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm">
                 <FileBox className="w-4 h-4" />
                 <span className="text-[10px] font-medium">Body</span>
              </TabsTrigger>
            </TabsList>
        </div>

        <div className="flex-1 overflow-hidden">
           <TabsContent value="content" className="h-full m-0 data-[state=inactive]:hidden">
                <ContentTab />
           </TabsContent>
           <TabsContent value="blocks" className="h-full m-0 data-[state=inactive]:hidden">
                <BlocksTab />
           </TabsContent>
           <TabsContent value="body" className="h-full m-0 data-[state=inactive]:hidden">
                <BodyTab template={template} onUpdateTemplate={onUpdateTemplate} />
           </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};
