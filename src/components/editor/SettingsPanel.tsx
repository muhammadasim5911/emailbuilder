
import React, { useRef, useState } from 'react';
import type { EmailElement, MergeTag, RowElement, TextElement, ButtonElement } from '../../types';
import { useMergeTags } from '../../hooks/useMergeTags';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Separator } from '../ui/separator';
import { Card, CardContent } from '../ui/card';
import { RowColumnProperties } from './RowColumnProperties';
import { ChevronDown, ChevronRight, Minus, Plus } from 'lucide-react';

// --- Helper Components ---

const CollapsibleSection: React.FC<{
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ title, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-foreground hover:bg-accent/50 transition-colors"
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </button>
      {isOpen && <div className="p-4 pt-0 space-y-4">{children}</div>}
    </div>
  );
};

const NumericCounter: React.FC<{
  label?: string;
  value: number;
  min?: number;
  max?: number;
  step?: number;
  suffix?: string;
  onChange: (val: number) => void;
}> = ({ label, value, min = 0, max = 200, step = 1, suffix = 'px', onChange }) => {
  return (
    <div className="grid gap-1.5">
      {label && <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">{label}</Label>}
      <div className="flex items-center border rounded-md overflow-hidden bg-background h-9">
        <button
          onClick={() => onChange(Math.max(min, value - step))}
          className="px-2 h-full hover:bg-accent border-r transition-colors"
        >
          <Minus className="h-3 w-3" />
        </button>
        <div className="flex-1 flex items-center justify-between px-3 text-sm min-w-[60px]">
          <span>{value}</span>
          <span className="text-muted-foreground ml-1">{suffix}</span>
        </div>
        <button
          onClick={() => onChange(Math.min(max, value + step))}
          className="px-2 h-full hover:bg-accent border-l transition-colors"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

// --- Text Content Editor ---

interface TextContentEditorProps {
  content: string;
  onUpdate: (content: string) => void;
}

const TextContentEditorWithMergeTags: React.FC<TextContentEditorProps> = ({ content, onUpdate }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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
    handleInputChange(newContent, newCursorPos);
  };

  const handleInsertTag = (tag: MergeTag) => {
    if (!textareaRef.current) return;
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const textBeforeCursor = text.substring(0, start);
    let triggerIndex = -1;
    const triggers = ['@', '#', '{{'];
    for (const trigger of triggers) {
      const lastIndex = textBeforeCursor.lastIndexOf(trigger);
      if (lastIndex > triggerIndex) {
        triggerIndex = lastIndex;
      }
    }
    if (triggerIndex !== -1) {
      const newText = text.substring(0, triggerIndex) + tag.value + text.substring(end);
      onUpdate(newText);
      setTimeout(() => {
        const newCursorPos = triggerIndex + tag.value.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
        textarea.focus();
      }, 0);
    }
  };

  return (
    <div className="grid gap-2 relative">
      <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Content</Label>
      <div className="relative">
        <textarea
          ref={textareaRef}
          className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          value={content}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, handleInsertTag)}
          onBlur={() => setTimeout(closeDropdown, 200)}
          placeholder="Type @ or # to insert merge tags"
        />
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
              >
                <div className="font-medium">{tag.label}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{tag.value}</div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// --- Main Settings Panel ---

interface SettingsPanelProps {
  element: EmailElement | null;
  onUpdate: (updates: Partial<EmailElement>) => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ element, onUpdate }) => {
  const [activeTab, setActiveTab] = React.useState('style');
  const [isGranularPadding, setIsGranularPadding] = useState(false);
  const [isGranularPaddingBtn, setIsGranularPaddingBtn] = useState(false);
  const [isGranularBorder, setIsGranularBorder] = useState(false);
  const [isGranularRadius, setIsGranularRadius] = useState(false);

  if (!element) {
    return (
      <Card className="h-full border-0 shadow-none rounded-none bg-background/50">
        <CardContent className="h-full flex items-center justify-center text-muted-foreground p-6">
          <p className="text-sm">Select an element to edit</p>
        </CardContent>
      </Card>
    );
  }

  const PanelHeader = () => (
    <div className="p-4 border-b flex items-center justify-between bg-background z-10 sticky top-0">
      <div>
        <h2 className="font-semibold tracking-tight">Properties</h2>
        <p className="text-[10px] uppercase font-bold text-muted-foreground mt-0.5 tracking-wider">
          {element.label || element.type}
        </p>
      </div>
    </div>
  );

  // Special handling for Row
  if (element.type === 'row') {
    return (
      <div className="h-full flex flex-col bg-background border-l">
        <PanelHeader />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-4 pt-0">
            <RowColumnProperties element={element} onUpdate={onUpdate} />
          </div>
        </div>
      </div>
    );
  }

  // Special handling for Column
  if (element.type === 'column') {
    return (
      <div className="h-full flex flex-col bg-background border-l">
        <PanelHeader />
        <CardContent className="flex-1 flex items-center justify-center text-muted-foreground p-6 text-center">
          <p className="text-xs">Select the parent row to edit column properties</p>
        </CardContent>
      </div>
    );
  }

  // --- Unified Layout for Text Elements ---
  if (element.type === 'text') {
    const textEl = element as TextElement;
    return (
      <div className="h-full flex flex-col bg-background border-l w-72 lg:w-80">
        <PanelHeader />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <CollapsibleSection title="Typography" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Font Family</Label>
                <Select
                  value={textEl.fontFamily || 'Arial'}
                  onValueChange={(value) => onUpdate({ fontFamily: value } as any)}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Arial">Arial</SelectItem>
                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                    <SelectItem value="Georgia">Georgia</SelectItem>
                    <SelectItem value="Courier New">Courier New</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Font Weight</Label>
                  <Select
                    value={textEl.fontWeight || 'normal'}
                    onValueChange={(value) => onUpdate({ fontWeight: value } as any)}
                  >
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Regular</SelectItem>
                      <SelectItem value="bold">Bold</SelectItem>
                      <SelectItem value="500">Medium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <NumericCounter
                  label="Font Size"
                  value={textEl.fontSize || 16}
                  min={8}
                  max={120}
                  onChange={(val) => onUpdate({ fontSize: val } as any)}
                />
              </div>

              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Color</Label>
                <div className="flex gap-2">
                  <div className="w-9 h-9 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                    <input
                      type="color"
                      value={textEl.color || '#000000'}
                      onChange={(e) => onUpdate({ color: e.target.value } as any)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full h-full" style={{ backgroundColor: textEl.color || '#000000' }} />
                  </div>
                  <Input
                    className="h-9"
                    value={textEl.color || '#000000'}
                    onChange={(e) => onUpdate({ color: e.target.value } as any)}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Text Align</Label>
                  <div className="flex bg-muted p-1 rounded-md h-9">
                    {['left', 'center', 'right', 'justify'].map((align) => (
                      <button
                        key={align}
                        onClick={() => onUpdate({ textAlign: align } as any)}
                        className={`flex-1 flex items-center justify-center rounded text-[10px] transition-all capitalize ${
                          textEl.textAlign === align 
                            ? 'bg-background shadow-sm text-foreground font-bold' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {align[0]}
                      </button>
                    ))}
                  </div>
                </div>
                <NumericCounter
                  label="Line Height"
                  value={Math.round((textEl.lineHeight || 1.1) * 100)}
                  min={50}
                  max={300}
                  step={5}
                  suffix="%"
                  onChange={(val) => onUpdate({ lineHeight: val / 100 } as any)}
                />
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Content" defaultOpen={true}>
            <TextContentEditorWithMergeTags
              content={textEl.content}
              onUpdate={(content) => onUpdate({ content } as any)}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Spacing" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold uppercase text-[10px] tracking-wider">Container Padding</Label>
                <button 
                  className="text-[10px] text-blue-500 hover:underline"
                  onClick={() => setIsGranularPadding(!isGranularPadding)}
                >
                  {isGranularPadding ? 'Simple Options' : 'More Options'}
                </button>
              </div>
              
              {!isGranularPadding ? (
                  <NumericCounter
                    label="All Sides"
                    value={typeof textEl.padding === 'object' && textEl.padding !== null ? textEl.padding.top : (textEl.padding || 0)}
                    onChange={(val) => onUpdate({ padding: { top: val, right: val, bottom: val, left: val } } as any)}
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <NumericCounter label="Top" value={typeof textEl.padding === 'object' && textEl.padding !== null ? textEl.padding.top : (textEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof textEl.padding === 'object' ? textEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), top: val } } as any)} />
                    <NumericCounter label="Right" value={typeof textEl.padding === 'object' && textEl.padding !== null ? textEl.padding.right : (textEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof textEl.padding === 'object' ? textEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), right: val } } as any)} />
                    <NumericCounter label="Bottom" value={typeof textEl.padding === 'object' && textEl.padding !== null ? textEl.padding.bottom : (textEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof textEl.padding === 'object' ? textEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), bottom: val } } as any)} />
                    <NumericCounter label="Left" value={typeof textEl.padding === 'object' && textEl.padding !== null ? textEl.padding.left : (textEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof textEl.padding === 'object' ? textEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), left: val } } as any)} />
                  </div>
                )}
            </div>
          </CollapsibleSection>
        </div>
      </div>
    );
  }

  // --- Unified Layout for Button Elements ---
  if (element.type === 'button') {
    const btnEl = element as ButtonElement;

    // Helper for padding values
    const getPadding = (side: string) => {
      if (typeof btnEl.padding === 'object' && btnEl.padding !== null) {
        return (btnEl.padding as any)[side] || 0;
      }
      return btnEl.padding || 0;
    };

    // Helper for border radius values
    const getRadius = (corner: string) => {
      if (typeof btnEl.borderRadius === 'object' && btnEl.borderRadius !== null) {
        return (btnEl.borderRadius as any)[corner] || 0;
      }
      return btnEl.borderRadius || 0;
    };

    return (
      <div className="h-full flex flex-col bg-background border-l w-72 lg:w-80">
        <PanelHeader />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Action Section */}
          <CollapsibleSection title="Action" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Button Text</Label>
                <div className="flex bg-muted rounded-md overflow-hidden h-9">
                  <input
                    className="flex-1 bg-transparent px-3 text-sm focus:outline-none"
                    value={btnEl.text || ''}
                    onChange={(e) => onUpdate({ text: e.target.value })}
                    placeholder="Click Here"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Action Type</Label>
                <Select
                  value={btnEl.actionType || 'Open Website'}
                  onValueChange={(value) => onUpdate({ actionType: value })}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open Website">Open Website</SelectItem>
                    <SelectItem value="Send Email">Send Email</SelectItem>
                    <SelectItem value="Call Phone">Call Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-1.5">
                <div className="flex bg-muted rounded-md overflow-hidden h-9">
                  <div className="bg-muted-foreground/10 px-3 flex items-center text-[10px] font-bold border-r">URL</div>
                  <input
                    className="flex-1 bg-transparent px-3 text-sm focus:outline-none"
                    value={btnEl.link || ''}
                    onChange={(e) => onUpdate({ link: e.target.value })}
                    placeholder="https://"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <div className="flex bg-muted rounded-md overflow-hidden h-9">
                   <div className="bg-muted-foreground/10 px-3 flex items-center text-[10px] font-bold border-r">Target</div>
                   <div className="flex-1">
                      <Select
                        value={btnEl.target || '_blank'}
                        onValueChange={(value) => onUpdate({ target: value as any })}
                      >
                        <SelectTrigger className="h-full border-0 bg-transparent shadow-none focus:ring-0">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="_blank">New Tab</SelectItem>
                          <SelectItem value="_self">Same Tab</SelectItem>
                        </SelectContent>
                      </Select>
                   </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Button Options Section */}
          <CollapsibleSection title="Button Options" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Background Color</Label>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded border overflow-hidden relative shadow-sm">
                      <input
                        type="color"
                        value={btnEl.backgroundColor || '#0ea5e9'}
                        onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full h-full" style={{ backgroundColor: btnEl.backgroundColor || '#0ea5e9' }} />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Text Color</Label>
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded border overflow-hidden relative shadow-sm">
                      <input
                        type="color"
                        value={btnEl.color || '#ffffff'}
                        onChange={(e) => onUpdate({ color: e.target.value })}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="w-full h-full" style={{ backgroundColor: btnEl.color || '#ffffff' }} />
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                   <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Auto Width</Label>
                   <div className="flex items-center gap-2">
                      <button 
                        onClick={() => onUpdate({ fullWidth: !btnEl.fullWidth })}
                        className={`w-10 h-5 rounded-full relative transition-colors ${btnEl.fullWidth ? 'bg-blue-600' : 'bg-muted'}`}
                      >
                        <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${btnEl.fullWidth ? 'translate-x-5' : ''}`} />
                      </button>
                   </div>
                </div>
                {!btnEl.fullWidth && (
                  <div className="grid gap-1.5">
                    <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Width</Label>
                    <div className="flex items-center gap-2">
                       <input 
                         type="range"
                         min="10"
                         max="100"
                         value={typeof btnEl.width === 'string' && btnEl.width.includes('%') ? parseInt(btnEl.width) : 100}
                         onChange={(e) => onUpdate({ width: `${e.target.value}%` })}
                         className="flex-1 h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-blue-600"
                       />
                       <span className="text-xs min-w-[35px] font-medium">{typeof btnEl.width === 'string' && btnEl.width.includes('%') ? parseInt(btnEl.width) : 100}%</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-1.5 mt-2">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Font Family</Label>
                <Select
                  value={btnEl.fontFamily || 'Arial'}
                  onValueChange={(value) => onUpdate({ fontFamily: value as any })}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Arial">Arial</SelectItem>
                    <SelectItem value="Helvetica">Helvetica</SelectItem>
                    <SelectItem value="Georgia">Georgia</SelectItem>
                    <SelectItem value="Courier New">Courier New</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-1.5">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Font Weight</Label>
                  <Select
                    value={btnEl.fontWeight || 'normal'}
                    onValueChange={(value) => onUpdate({ fontWeight: value as any })}
                  >
                    <SelectTrigger className="h-9">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Regular</SelectItem>
                      <SelectItem value="bold">Bold</SelectItem>
                      <SelectItem value="500">Medium</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <NumericCounter
                  label="Font Size"
                  value={btnEl.fontSize || 14}
                  min={8}
                  max={72}
                  onChange={(val) => onUpdate({ fontSize: val as any })}
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Spacing Section */}
          <CollapsibleSection title="Spacing" defaultOpen={true}>
            <div className="grid gap-4">
              <NumericCounter
                label="Line Height"
                value={Math.round((btnEl.lineHeight || 1.2) * 100)}
                min={50}
                max={300}
                step={5}
                suffix="%"
                onChange={(val) => onUpdate({ lineHeight: val / 100 })}
              />

              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Padding</Label>
                  <button 
                    className="text-[10px] text-blue-500 hover:underline"
                    onClick={() => setIsGranularPaddingBtn(!isGranularPaddingBtn)}
                  >
                    {isGranularPaddingBtn ? 'Simple Options' : 'More Options'}
                  </button>
                </div>
                
                {!isGranularPaddingBtn ? (
                  <NumericCounter
                    label="All Sides"
                    value={getPadding('top')}
                    onChange={(val) => onUpdate({ padding: { top: val, right: val, bottom: val, left: val } })}
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <NumericCounter label="Top" value={getPadding('top')} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), top: val } } as any)} />
                    <NumericCounter label="Right" value={getPadding('right')} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), right: val } } as any)} />
                    <NumericCounter label="Bottom" value={getPadding('bottom')} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), bottom: val } } as any)} />
                    <NumericCounter label="Left" value={getPadding('left')} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), left: val } } as any)} />
                  </div>
                )}
              </div>

              {/* Border Section */}
              <div className="grid gap-4 pt-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Border</Label>
                  <button 
                    className="text-[10px] text-blue-500 hover:underline"
                    onClick={() => setIsGranularBorder(!isGranularBorder)}
                  >
                    {isGranularBorder ? 'Simple Options' : 'More Options'}
                  </button>
                </div>
                
                <div className="grid gap-2">
                   <Select
                      value={btnEl.borderStyle || 'solid'}
                      onValueChange={(value) => onUpdate({ borderStyle: value as any })}
                   >
                      <SelectTrigger className="h-9">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solid">Solid</SelectItem>
                        <SelectItem value="dashed">Dashed</SelectItem>
                        <SelectItem value="dotted">Dotted</SelectItem>
                      </SelectContent>
                   </Select>
                   <NumericCounter
                      label="All Sides"
                      value={btnEl.borderWidth || 0}
                      onChange={(val) => onUpdate({ borderWidth: val })}
                   />
                </div>
              </div>

              {/* Rounded Border Section */}
              <div className="grid gap-4 pt-2">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Rounded Border</Label>
                  <button 
                    className="text-[10px] text-blue-500 hover:underline"
                    onClick={() => setIsGranularRadius(!isGranularRadius)}
                  >
                    {isGranularRadius ? 'Simple Options' : 'More Options'}
                  </button>
                </div>
                
                {!isGranularRadius ? (
                  <NumericCounter
                    label="All Sides"
                    value={typeof btnEl.borderRadius === 'number' ? btnEl.borderRadius : btnEl.borderRadius?.topLeft || 0}
                    onChange={(val) => onUpdate({ borderRadius: val })}
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <NumericCounter label="T-Left" value={getRadius('topLeft')} onChange={(val) => onUpdate({ borderRadius: { ... (typeof btnEl.borderRadius === 'object' && btnEl.borderRadius !== null ? btnEl.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }), topLeft: val } } as any)} />
                    <NumericCounter label="T-Right" value={getRadius('topRight')} onChange={(val) => onUpdate({ borderRadius: { ... (typeof btnEl.borderRadius === 'object' && btnEl.borderRadius !== null ? btnEl.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }), topRight: val } } as any)} />
                    <NumericCounter label="B-Left" value={getRadius('bottomLeft')} onChange={(val) => onUpdate({ borderRadius: { ... (typeof btnEl.borderRadius === 'object' && btnEl.borderRadius !== null ? btnEl.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }), bottomLeft: val } } as any)} />
                    <NumericCounter label="B-Right" value={getRadius('bottomRight')} onChange={(val) => onUpdate({ borderRadius: { ... (typeof btnEl.borderRadius === 'object' && btnEl.borderRadius !== null ? btnEl.borderRadius : { topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 }), bottomRight: val } } as any)} />
                  </div>
                )}
              </div>
            </div>
          </CollapsibleSection>

          {/* General Section */}
          <CollapsibleSection title="General" defaultOpen={true}>
             <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Container Padding</Label>
                  <button 
                    className="text-[10px] text-blue-500 hover:underline"
                    onClick={() => setIsGranularPadding(!isGranularPadding)}
                  >
                    {isGranularPadding ? 'Simple Options' : 'More Options'}
                  </button>
                </div>
                {!isGranularPadding ? (
                  <NumericCounter
                    label="All Sides"
                    value={typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding.top : (btnEl.padding || 0)}
                    onChange={(val) => onUpdate({ padding: { top: val, right: val, bottom: val, left: val } })}
                  />
                ) : (
                  <div className="grid grid-cols-2 gap-3">
                    <NumericCounter label="Top" value={typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding.top : (btnEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), top: val } })} />
                    <NumericCounter label="Right" value={typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding.right : (btnEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), right: val } })} />
                    <NumericCounter label="Bottom" value={typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding.bottom : (btnEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), bottom: val } })} />
                    <NumericCounter label="Left" value={typeof btnEl.padding === 'object' && btnEl.padding !== null ? btnEl.padding.left : (btnEl.padding || 0)} onChange={(val) => onUpdate({ padding: { ... (typeof btnEl.padding === 'object' ? btnEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), left: val } })} />
                  </div>
                )}
             </div>
          </CollapsibleSection>
        </div>
      </div>
    );
  }

  // --- Unified Layout for Image Elements ---
  if (element.type === 'image') {
    const imgEl = element as any;
    const [isGranularPaddingImg, setIsGranularPaddingImg] = useState(false);
    
    const getPadding = (side: string) => {
      if (typeof imgEl.padding === 'object' && imgEl.padding !== null) {
        return (imgEl.padding as any)[side] || 0;
      }
      return imgEl.padding || 0;
    };

    return (
      <div className="h-full flex flex-col bg-background border-l w-72 lg:w-80">
        <PanelHeader />
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Image Source Section */}
          <CollapsibleSection title="Image" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Image URL</Label>
                <div className="flex bg-muted rounded-md overflow-hidden h-9">
                  <input
                    className="flex-1 bg-transparent px-3 text-sm focus:outline-none"
                    value={imgEl.src || ''}
                    onChange={(e) => onUpdate({ src: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>
              
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Alternate Text</Label>
                <Input
                  className="h-9"
                  value={imgEl.alt || ''}
                  onChange={(e) => onUpdate({ alt: e.target.value })}
                  placeholder="Image description"
                />
              </div>
            </div>
          </CollapsibleSection>

          {/* Width & Alignment Section */}
          <CollapsibleSection title="Width & Alignment" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Auto Width</Label>
                <button 
                  onClick={() => onUpdate({ autoWidth: !(imgEl.autoWidth !== false) })}
                  className={`w-10 h-5 rounded-full relative transition-colors ${imgEl.autoWidth !== false ? 'bg-blue-600' : 'bg-muted'}`}
                >
                  <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${imgEl.autoWidth !== false ? 'translate-x-5' : ''}`} />
                </button>
              </div>
              
              {imgEl.autoWidth === false && (
                <div className="grid gap-1.5">
                  <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Width</Label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={typeof imgEl.width === 'string' && imgEl.width.includes('%') ? parseInt(imgEl.width) : 100}
                      onChange={(e) => onUpdate({ width: `${e.target.value}%` })}
                      className="flex-1"
                    />
                    <span className="text-sm min-w-[45px]">{typeof imgEl.width === 'string' && imgEl.width.includes('%') ? parseInt(imgEl.width) : 100}%</span>
                  </div>
                </div>
              )}
              
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Alignment</Label>
                <div className="flex bg-muted p-1 rounded-md h-9 gap-1">
                  {['left', 'center', 'right', 'justify'].map((align) => (
                    <button
                      key={align}
                      onClick={() => onUpdate({ align: align as 'left' | 'center' | 'right' | 'justify' })}
                      className={`flex-1 flex items-center justify-center rounded text-[10px] transition-all capitalize ${
                        imgEl.align === align 
                          ? 'bg-background shadow-sm text-foreground font-bold' 
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {align[0].toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Action/Link Section */}
          <CollapsibleSection title="Action" defaultOpen={false}>
            <div className="grid gap-4">
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Link URL</Label>
                <div className="flex bg-muted rounded-md overflow-hidden h-9">
                  <div className="bg-muted-foreground/10 px-3 flex items-center text-[10px] font-bold border-r">URL</div>
                  <input
                    className="flex-1 bg-transparent px-3 text-sm focus:outline-none"
                    value={imgEl.link || ''}
                    onChange={(e) => onUpdate({ link: e.target.value })}
                    placeholder="https://"
                  />
                </div>
              </div>
              
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Target</Label>
                <Select
                  value={imgEl.target || '_blank'}
                  onValueChange={(value) => onUpdate({ target: value as any })}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="_blank">New Tab</SelectItem>
                    <SelectItem value="_self">Same Tab</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CollapsibleSection>

          {/* General Settings / Padding Section */}
          <CollapsibleSection title="General" defaultOpen={true}>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label className="text-xs font-bold uppercase text-[10px] tracking-wider">Padding</Label>
                <button 
                  className="text-[10px] text-blue-500 hover:underline"
                  onClick={() => setIsGranularPaddingImg(!isGranularPaddingImg)}
                >
                  {isGranularPaddingImg ? 'Simple Options' : 'More Options'}
                </button>
              </div>
              
              {!isGranularPaddingImg ? (
                <NumericCounter
                  label="All Sides"
                  value={getPadding('top')}
                  onChange={(val) => onUpdate({ padding: { top: val, right: val, bottom: val, left: val } })}
                />
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <NumericCounter label="Top" value={getPadding('top')} onChange={(val) => onUpdate({ padding: { ...(typeof imgEl.padding === 'object' && imgEl.padding !== null ? imgEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), top: val } })} />
                  <NumericCounter label="Right" value={getPadding('right')} onChange={(val) => onUpdate({ padding: { ...(typeof imgEl.padding === 'object' && imgEl.padding !== null ? imgEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), right: val } })} />
                  <NumericCounter label="Bottom" value={getPadding('bottom')} onChange={(val) => onUpdate({ padding: { ...(typeof imgEl.padding === 'object' && imgEl.padding !== null ? imgEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), bottom: val } })} />
                  <NumericCounter label="Left" value={getPadding('left')} onChange={(val) => onUpdate({ padding: { ...(typeof imgEl.padding === 'object' && imgEl.padding !== null ? imgEl.padding : { top: 0, right: 0, bottom: 0, left: 0 }), left: val } })} />
                </div>
              )}
            </div>
          </CollapsibleSection>

          {/* Border Section */}
          <CollapsibleSection title="Border" defaultOpen={false}>
            <div className="grid gap-4">
              <NumericCounter
                label="Width"
                value={imgEl.borderWidth || 0}
                onChange={(val) => onUpdate({ borderWidth: val })}
              />
              
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Style</Label>
                <Select
                  value={imgEl.borderStyle || 'solid'}
                  onValueChange={(value) => onUpdate({ borderStyle: value as any })}
                >
                  <SelectTrigger className="h-9">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="dashed">Dashed</SelectItem>
                    <SelectItem value="dotted">Dotted</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="grid gap-1.5">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Color</Label>
                <div className="flex gap-2">
                  <div className="w-9 h-9 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                    <input
                      type="color"
                      value={imgEl.borderColor || '#000000'}
                      onChange={(e) => onUpdate({ borderColor: e.target.value })}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="w-full h-full" style={{ backgroundColor: imgEl.borderColor || '#000000' }} />
                  </div>
                  <Input
                    className="h-9"
                    value={imgEl.borderColor || '#000000'}
                    onChange={(e) => onUpdate({ borderColor: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* Responsive Design Section */}
          <CollapsibleSection title="Responsive Design" defaultOpen={false}>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Hide on Desktop</Label>
                <button 
                  onClick={() => onUpdate({ hideOnDesktop: !imgEl.hideOnDesktop })}
                  className={`w-10 h-5 rounded-full relative transition-colors ${imgEl.hideOnDesktop ? 'bg-blue-600' : 'bg-muted'}`}
                >
                  <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${imgEl.hideOnDesktop ? 'translate-x-5' : ''}`} />
                </button>
              </div>
              
              <div className="flex items-center justify-between">
                <Label className="text-xs text-muted-foreground uppercase font-bold text-[10px] tracking-wider">Hide on Mobile</Label>
                <button 
                  onClick={() => onUpdate({ hideOnMobile: !imgEl.hideOnMobile })}
                  className={`w-10 h-5 rounded-full relative transition-colors ${imgEl.hideOnMobile ? 'bg-blue-600' : 'bg-muted'}`}
                >
                  <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${imgEl.hideOnMobile ? 'translate-x-5' : ''}`} />
                </button>
              </div>
            </div>
          </CollapsibleSection>
        </div>
      </div>
    );
  }

  // Fallback for everything else
  return (
    <div className="h-full flex flex-col bg-background border-l">
      <PanelHeader />
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="style">Style</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>

            <TabsContent value="style" className="space-y-4">
               {/* Style fallback contents */}
               <div className="grid gap-2">
                <Label>Background</Label>
                <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-md border overflow-hidden shrink-0 relative shadow-sm">
                        <input
                            type="color"
                            value={(element as any).backgroundColor || '#ffffff'}
                            onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="w-full h-full" style={{ backgroundColor: (element as any).backgroundColor || '#ffffff' }} />
                    </div>
                   <Input
                    value={(element as any).backgroundColor || '#ffffff'}
                    onChange={(e) => onUpdate({ backgroundColor: e.target.value })}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="layout" className="space-y-4">
               {/* Layout fallback contents */}
               <div className="grid gap-2">
                <Label>Width</Label>
                <Input
                  type="text"
                  value={element.width || '100%'}
                  onChange={(e) => onUpdate({ width: String(e.target.value) })}
                  placeholder="px or %"
                />
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
                {/* Custom renderers for other element types here if needed */}
                <p className="text-xs text-muted-foreground">Editing {(element as any).type} properties.</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
