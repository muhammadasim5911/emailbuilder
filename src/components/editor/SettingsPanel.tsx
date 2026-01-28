

import React, { useRef, useState } from 'react';
import type { EmailElement, MergeTag, RowElement } from '../../types';
import { useMergeTags } from '../../hooks/useMergeTags';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
// import { ScrollArea } from '../ui/scroll-area';
import { Card, CardContent } from '../ui/card';
import { RowColumnProperties } from './RowColumnProperties';

// Text Content Editor with Merge Tag Support
interface TextContentEditorProps {
  content: string;
  onUpdate: (content: string) => void;
}

const TextContentEditorWithMergeTags: React.FC<TextContentEditorProps> = ({ content, onUpdate }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);
  const {
    showDropdown,
    filteredTags,
    selectedIndex,
    handleInputChange,
    handleKeyDown,
    selectTag,
    closeDropdown,
  } = useMergeTags();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    const newCursorPos = e.target.selectionStart;
    
    onUpdate(newContent);
    setCursorPosition(newCursorPos);
    handleInputChange(newContent, newCursorPos);
  };

  const handleInsertTag = (tag: MergeTag) => {
    if (!textareaRef.current) return;

    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    // Find the trigger character position
    const textBeforeCursor = text.substring(0, start);
    let triggerIndex = -1;
    
    // Find the last trigger character
    const triggers = ['@', '#', '{{'];
    for (const trigger of triggers) {
      const lastIndex = textBeforeCursor.lastIndexOf(trigger);
      if (lastIndex > triggerIndex) {
        triggerIndex = lastIndex;
      }
    }

    if (triggerIndex !== -1) {
      // Replace from trigger to cursor with the merge tag value
      const newText = text.substring(0, triggerIndex) + tag.value + text.substring(end);
      onUpdate(newText);
      
      // Set cursor position after the inserted tag
      setTimeout(() => {
        const newCursorPos = triggerIndex + tag.value.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
        textarea.focus();
      }, 0);
    }
  };

  return (
    <div className="grid gap-2 relative">
      <Label>Content</Label>
      <div className="relative">
        <textarea
          ref={textareaRef}
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          rows={3}
          value={content}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, handleInsertTag)}
          onBlur={() => setTimeout(closeDropdown, 200)} // Delay to allow click on dropdown
          placeholder="Type @ or # to insert merge tags"
        />
        
        {/* Merge Tag Dropdown */}
        {showDropdown && filteredTags.length > 0 && (
          <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg max-h-60 overflow-auto">
            {filteredTags.map((tag, index) => (
              <button
                key={tag.id}
                type="button"
                className={`w-full text-left px-3 py-2 text-sm hover:bg-accent transition-colors ${
                  index === selectedIndex ? 'bg-accent' : ''
                }`}
                onClick={() => selectTag(tag, handleInsertTag)}
                onMouseEnter={() => {}}
              >
                <div className="font-medium">{tag.label}</div>
                {tag.description && (
                  <div className="text-xs text-muted-foreground">{tag.description}</div>
                )}
                <div className="text-xs text-muted-foreground mt-0.5">{tag.value}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface SettingsPanelProps {
  element: EmailElement | null;
  onUpdate: (updates: Partial<EmailElement>) => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ element, onUpdate }) => {
  const [activeTab, setActiveTab] = React.useState('style');

  if (!element) {
    return (
      <Card className="h-full border-0 shadow-none rounded-none bg-background/50">
        <CardContent className="h-full flex items-center justify-center text-muted-foreground p-6">
          <p className="text-sm">Select an element to edit</p>
        </CardContent>
      </Card>
    );
  }

  // Special handling for Row elements - use RowColumnProperties
  if (element.type === 'row') {
    return (
      <div className="h-full flex flex-col bg-background border-l">
        <div className="p-4 border-b">
          <h2 className="font-semibold tracking-tight">Properties</h2>
          <p className="text-xs text-muted-foreground mt-1">{element.label || 'Row'}</p>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4">
            <RowColumnProperties 
              element={element as RowElement} 
              onUpdate={onUpdate}
            />
          </div>
        </div>
      </div>
    );
  }

  // Prevent showing properties for Column elements - they should be edited via the Row
  if (element.type === 'column') {
    return (
      <Card className="h-full border-0 shadow-none rounded-none bg-background/50">
        <CardContent className="h-full flex items-center justify-center text-muted-foreground p-6">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium">Column Properties</p>
            <p className="text-xs">Select the parent row to edit column properties</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="h-full flex flex-col bg-background border-l">
      <div className="p-4 border-b">
        <h2 className="font-semibold tracking-tight">Properties</h2>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="style">Style</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            <TabsContent value="style" className="space-y-4">
              <div className="grid gap-2">
                <Label>Background</Label>
                <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                        <input
                            type="color"
                            value={element.backgroundColor || '#ffffff'}
                            onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="w-full h-full" style={{ backgroundColor: element.backgroundColor || '#ffffff' }} />
                    </div>
                   <Input
                    value={element.backgroundColor || '#ffffff'}
                    onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                  />
                </div>
              </div>

              {element.borderWidth !== undefined && (
                <>
                  <Separator />
                  <div className="grid gap-2">
                    <Label>Border Width</Label>
                    <Input
                      type="number"
                      min={0}
                      max={20}
                      value={element.borderWidth}
                      onChange={(e) => onUpdate({ borderWidth: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                  <div className="grid gap-2">
                     <Label>Border Color</Label>
                     <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={element.borderColor || '#000000'}
                                onChange={(e) => onUpdate({ borderColor: e.target.value })}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: element.borderColor || '#000000' }} />
                        </div>
                        <Input
                            value={element.borderColor || '#000000'}
                            onChange={(e) => onUpdate({ borderColor: e.target.value })}
                        />
                     </div>
                  </div>
                </>
              )}

              {element.borderRadius !== undefined && (
                 <div className="grid gap-2">
                  <Label>Border Radius</Label>
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    value={element.borderRadius}
                    onChange={(e) => onUpdate({ borderRadius: parseInt(e.target.value) || 0 })}
                  />
                </div>
              )}

              {element.opacity !== undefined && (
                 <div className="grid gap-2">
                  <Label>Opacity</Label>
                  <Input
                    type="number"
                    min={0}
                    max={1}
                    step={0.1}
                    value={element.opacity ?? 1}
                    onChange={(e) => onUpdate({ opacity: parseFloat(e.target.value) })}
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="layout" className="space-y-4">
               <div className="grid gap-2">
                <Label>Width</Label>
                <Input
                  type="text"
                  value={element.width || '100%'}
                  onChange={(e) => onUpdate({ width: e.target.value })}
                  placeholder="px or %"
                />
              </div>

              {element.height !== undefined && (
                 <div className="grid gap-2">
                  <Label>Height</Label>
                  <Input
                    type="text"
                    value={element.height}
                    onChange={(e) => onUpdate({ height: e.target.value })}
                    placeholder="px or auto"
                  />
                </div>
              )}

              {element.padding && (
                <div className="space-y-2">
                  <Label>Padding</Label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                        <Label className="text-xs text-muted-foreground mb-1 block">Top</Label>
                        <Input
                        type="number"
                        min={0}
                        value={element.padding?.top || 0}
                        onChange={(e) =>
                            onUpdate({
                            padding: { ...element.padding, top: parseInt(e.target.value) || 0 } as any,
                            })
                        }
                        />
                    </div>
                    <div>
                         <Label className="text-xs text-muted-foreground mb-1 block">Right</Label>
                         <Input
                            type="number"
                            min={0}
                            value={element.padding?.right || 0}
                            onChange={(e) =>
                            onUpdate({
                                padding: { ...element.padding, right: parseInt(e.target.value) || 0 } as any,
                            })
                            }
                        />
                    </div>
                    <div>
                        <Label className="text-xs text-muted-foreground mb-1 block">Bottom</Label>
                        <Input
                        type="number"
                        min={0}
                        value={element.padding?.bottom || 0}
                        onChange={(e) =>
                            onUpdate({
                            padding: { ...element.padding, bottom: parseInt(e.target.value) || 0 } as any,
                            })
                        }
                        />
                    </div>
                    <div>
                        <Label className="text-xs text-muted-foreground mb-1 block">Left</Label>
                        <Input
                        type="number"
                        min={0}
                        value={element.padding?.left || 0}
                        onChange={(e) =>
                            onUpdate({
                            padding: { ...element.padding, left: parseInt(e.target.value) || 0 } as any,
                            })
                        }
                        />
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              {element.type === 'text' && (
                <>
                  <TextContentEditorWithMergeTags
                    content={(element as any).content}
                    onUpdate={(content) => onUpdate({ content } as any)}
                  />
                  <div className="grid gap-2">
                     <Label>Font Family</Label>
                     <Select
                        value={(element as any).fontFamily}
                        onValueChange={(value) => onUpdate({ fontFamily: value } as any)}
                     >
                        <SelectTrigger>
                            <SelectValue placeholder="Select font" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Arial">Arial</SelectItem>
                            <SelectItem value="Helvetica">Helvetica</SelectItem>
                            <SelectItem value="Georgia">Georgia</SelectItem>
                            <SelectItem value="Courier New">Courier New</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>Font Size</Label>
                    <Input
                        type="number"
                        min={12}
                        max={72}
                        value={(element as any).fontSize}
                        onChange={(e) => onUpdate({ fontSize: parseInt(e.target.value) || 16 } as any)}
                    />
                  </div>
                   <div className="grid gap-2">
                    <Label>Text Color</Label>
                     <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).color || '#000000'}
                                onChange={(e) => onUpdate({ color: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).color || '#000000' }} />
                        </div>
                   <Input
                    value={(element as any).color}
                    onChange={(e) => onUpdate({ color: e.target.value } as any)}
                  />
                    </div>
                  </div>
                  <div className="grid gap-2">
                      <Label>Alignment</Label>
                      <div className="flex bg-muted p-1 rounded-md">
                        {['left', 'center', 'right', 'justify'].map((align) => (
                             <button
                                key={align}
                                onClick={() => onUpdate({ textAlign: align } as any)}
                                className={`flex-1 p-1 rounded text-sm capitalize transition-all ${ (element as any).textAlign === align ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                             >
                                {align}
                             </button>
                        ))}
                      </div>
                  </div>
                </>
              )}
                 {element.type === 'image' && (
              <>
                <div className="grid gap-2">
                    <Label>Image URL</Label>
                    <Input
                    type="text"
                    value={(element as any).src}
                    onChange={(e) => onUpdate({ src: e.target.value } as any)}
                    />
                </div>
                <div className="grid gap-2">
                    <Label>Alt Text</Label>
                    <Input
                    type="text"
                    value={(element as any).alt}
                    onChange={(e) => onUpdate({ alt: e.target.value } as any)}
                    />
                </div>
               <div className="grid gap-2">
                    <Label>Link URL</Label>
                    <Input
                    type="text"
                    value={(element as any).href || ''}
                    onChange={(e) => onUpdate({ href: e.target.value } as any)}
                    placeholder="Optional link when clicked"
                    />
                </div>
                 <div className="grid gap-2">
                     <Label>Object Fit</Label>
                     <Select
                        value={(element as any).objectFit || 'cover'}
                        onValueChange={(value) => onUpdate({ objectFit: value } as any)}
                     >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="cover">Cover</SelectItem>
                            <SelectItem value="contain">Contain</SelectItem>
                            <SelectItem value="fill">Fill</SelectItem>
                             <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
              </>
            )}

            {element.type === 'button' && (
              <>
               <div className="grid gap-2">
                    <Label>Button Text</Label>
                    <Input
                    type="text"
                    value={(element as any).text}
                    onChange={(e) => onUpdate({ text: e.target.value } as any)}
                    />
                </div>
                <div className="grid gap-2">
                    <Label>Link URL</Label>
                    <Input
                    type="text"
                    value={(element as any).link}
                    onChange={(e) => onUpdate({ link: e.target.value } as any)}
                    />
                </div>
                <div className="grid gap-2">
                    <Label>Button Color</Label>
                     <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).backgroundColor || '#0ea5e9'}
                                onChange={(e) => onUpdate({ backgroundColor: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).backgroundColor || '#0ea5e9' }} />
                        </div>
                        <Input
                            value={(element as any).backgroundColor}
                             onChange={(e) => onUpdate({ backgroundColor: e.target.value } as any)}
                        />
                     </div>
                </div>
                 <div className="grid gap-2">
                    <Label>Text Color</Label>
                     <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).color || '#ffffff'}
                                onChange={(e) => onUpdate({ color: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).color || '#ffffff' }} />
                        </div>
                        <Input
                            value={(element as any).color}
                             onChange={(e) => onUpdate({ color: e.target.value } as any)}
                        />
                     </div>
                </div>
                 <div className="grid grid-cols-2 gap-2">
                   <div className="grid gap-2">
                    <Label>Padding X</Label>
                    <Input
                        type="number"
                        min={0}
                        value={(element as any).paddingX || 16}
                        onChange={(e) => onUpdate({ paddingX: parseInt(e.target.value) || 0 } as any)}
                    />
                   </div>
                   <div className="grid gap-2">
                    <Label>Padding Y</Label>
                    <Input
                        type="number"
                        min={0}
                        value={(element as any).paddingY || 10}
                        onChange={(e) => onUpdate({ paddingY: parseInt(e.target.value) || 0 } as any)}
                    />
                   </div>
                </div>
              </>
            )}

            {element.type === 'column' && (
              <>
                 <div className="grid gap-2">
                    <Label>Column Width</Label>
                    <Select
                        value={(element as any).width || '50%'}
                        onValueChange={(value) => onUpdate({ width: value } as any)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="25%">25% (1/4)</SelectItem>
                            <SelectItem value="33.33%">33% (1/3)</SelectItem>
                            <SelectItem value="50%">50% (1/2)</SelectItem>
                            <SelectItem value="66.66%">66% (2/3)</SelectItem>
                            <SelectItem value="75%">75% (3/4)</SelectItem>
                            <SelectItem value="100%">100% (Full)</SelectItem>
                        </SelectContent>
                    </Select>
                 </div>
                 <div className="grid gap-2">
                    <Label>Background Color</Label>
                    <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).backgroundColor || '#ffffff'}
                                onChange={(e) => onUpdate({ backgroundColor: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).backgroundColor || 'transparent' }} />
                        </div>
                        <Input
                            value={(element as any).backgroundColor || 'transparent'}
                            onChange={(e) => onUpdate({ backgroundColor: e.target.value } as any)}
                        />
                    </div>
                 </div>
              </>
            )}

            {element.type === 'row' && (
              <>
                 <div className="grid gap-2">
                    <Label>Background Color</Label>
                    <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).backgroundColor || '#ffffff'}
                                onChange={(e) => onUpdate({ backgroundColor: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).backgroundColor || 'transparent' }} />
                        </div>
                        <Input
                            value={(element as any).backgroundColor || 'transparent'}
                            onChange={(e) => onUpdate({ backgroundColor: e.target.value } as any)}
                        />
                    </div>
                 </div>
                 
                 <Separator />
                 
                 <div className="grid gap-2">
                    <Label>Content Background Color</Label>
                    <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).contentBackgroundColor || '#ffffff'}
                                onChange={(e) => onUpdate({ contentBackgroundColor: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).contentBackgroundColor || 'transparent' }} />
                        </div>
                        <Input
                            value={(element as any).contentBackgroundColor || 'transparent'}
                            onChange={(e) => onUpdate({ contentBackgroundColor: e.target.value } as any)}
                        />
                    </div>
                 </div>
                 
                 <Separator />
                 
                 <div className="grid gap-2">
                    <Label>Background Image</Label>
                    <Button 
                        variant="default" 
                        className="w-full"
                        onClick={() => {
                            // TODO: Implement image upload
                            alert('Image upload will be implemented');
                        }}
                    >
                        Upload Image
                    </Button>
                 </div>
                 
                 <div className="grid gap-2">
                    <Label>Image URL</Label>
                    <Input
                        type="text"
                        value={(element as any).imageUrl || ''}
                        onChange={(e) => onUpdate({ imageUrl: e.target.value } as any)}
                        placeholder="https://"
                    />
                 </div>
                 
                 <Separator />
                 
                 <div className="grid gap-2">
                    <Label>Gap</Label>
                    <Input
                        type="number"
                        min={0}
                        max={100}
                        value={(element as any).gap || 0}
                        onChange={(e) => onUpdate({ gap: parseInt(e.target.value) || 0 } as any)}
                    />
                 </div>
              </>
            )}

            {element.type === 'video' && (
              <>
                <div className="grid gap-2">
                    <Label>Video URL</Label>
                    <Input
                    type="text"
                    value={(element as any).src || ''}
                    onChange={(e) => onUpdate({ src: e.target.value } as any)}
                    placeholder="YouTube or Vimeo URL"
                    />
                </div>
              </>
            )}

            {element.type === 'divider' && (
              <>
                 <div className="grid gap-2">
                    <Label>Color</Label>
                    <div className="flex gap-2">
                         <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                            <input
                                type="color"
                                value={(element as any).color || '#e5e7eb'}
                                onChange={(e) => onUpdate({ color: e.target.value } as any)}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            <div className="w-full h-full" style={{ backgroundColor: (element as any).color || '#e5e7eb' }} />
                        </div>
                        <Input
                            value={(element as any).color}
                            onChange={(e) => onUpdate({ color: e.target.value } as any)}
                        />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label>Height</Label>
                    <Input
                        type="number"
                        min={1}
                        max={20}
                        value={(element as any).height || 1}
                        onChange={(e) => onUpdate({ height: parseInt(e.target.value) || 1 } as any)}
                    />
                </div>
                 <div className="grid gap-2">
                     <Label>Style</Label>
                     <Select
                        value={(element as any).style || 'solid'}
                        onValueChange={(value) => onUpdate({ style: value } as any)}
                     >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="solid">Solid</SelectItem>
                            <SelectItem value="dashed">Dashed</SelectItem>
                            <SelectItem value="dotted">Dotted</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
              </>
            )}

            {element.type === 'spacer' && (
              <>
                <div className="grid gap-2">
                    <Label>Height (px)</Label>
                    <Input
                        type="number"
                        min={10}
                        max={300}
                        value={(element as any).height || 40}
                        onChange={(e) => onUpdate({ height: parseInt(e.target.value) || 40 } as any)}
                    />
                </div>
              </>
            )}

        </TabsContent>
      </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
