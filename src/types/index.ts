// Element Types
export type ElementType = 'text' | 'image' | 'button' | 'divider' | 'spacer' | 'column' | 'row' | 'section' | 'table' | 'video' | 'form' | 'countdown' | 'html';

export type FontFamily = 'Arial' | 'Helvetica' | 'Georgia' | 'Times New Roman' | 'Courier New' | 'Verdana' | 'Comic Sans MS' | 'Trebuchet MS';

export type FontSize = 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48;

export type TextAlign = 'left' | 'center' | 'right' | 'justify';

export type ButtonStyle = 'solid' | 'outline' | 'text';

// Base Element Properties
export interface BaseElementProps {
  id: string;
  type: ElementType;
  label: string;
  width?: number | string;
  height?: number | string;
  shadowX?: number;
  shadowY?: number;
  visible?: boolean;
  locked?: boolean;
  zIndex?: number;
  padding?: number | { top: number; right: number; bottom: number; left: number };
  margin?: number | { top: number; right: number; bottom: number; left: number };
  borderRadius?: number | { topLeft: number; topRight: number; bottomRight: number; bottomLeft: number };
  borderStyle?: 'solid' | 'dashed' | 'dotted';
}

// Text Element
export interface TextElement extends BaseElementProps {
  type: 'text';
  content: string;
  fontSize: FontSize;
  fontFamily: FontFamily;
  fontWeight: 'normal' | 'bold' | '500' | '600' | '700' | '800';
  fontStyle: 'normal' | 'italic';
  lineHeight: number;
  letterSpacing: number;
  color: string;
  textAlign: TextAlign;
  textDecoration?: 'none' | 'underline' | 'line-through';
}

// Image Element
export interface ImageElement extends BaseElementProps {
  type: 'image';
  src: string;
  alt: string;
  title?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  link?: string;
  target?: '_blank' | '_self';
  
  // Width and alignment
  autoWidth?: boolean;  // Auto width toggle (default: true)
  align?: 'left' | 'center' | 'right' | 'justify';
  
  // Responsive visibility
  hideOnDesktop?: boolean;
  hideOnMobile?: boolean;
  
  // Border settings
  borderColor?: string;
  borderWidth?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
}

// Button Element
export interface ButtonElement extends BaseElementProps {
  type: 'button';
  label: string;
  text: string;
  link: string;
  actionType?: string;
  target?: '_blank' | '_self';
  fullWidth?: boolean;
  style: ButtonStyle;
  fontSize: FontSize;
  fontFamily: FontFamily;
  fontWeight: 'normal' | 'bold' | '500' | '600' | '700' | '800';
  lineHeight?: number;
  color: string;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  padding?: number | { top: number; right: number; bottom: number; left: number };
  borderRadius?: number | { topLeft: number; topRight: number; bottomRight: number; bottomLeft: number };
  paddingX?: number; // Legacy, will keep for compatibility
  paddingY?: number; // Legacy
}

// Divider Element
export interface DividerElement extends BaseElementProps {
  type: 'divider';
  height: number;
  color: string;
  style: 'solid' | 'dashed' | 'dotted';
}

// Spacer Element
export interface SpacerElement extends BaseElementProps {
  type: 'spacer';
  height: number;
}

// Section Element (Container)
export interface SectionElement extends BaseElementProps {
  type: 'section';
  children: EmailElement[];
}

// Column Element
export interface ColumnElement extends BaseElementProps {
  type: 'column';
  children: EmailElement[];
  width: number | string; // percentage or pixel
  horizontalAlign?: 'left' | 'center' | 'right';
}

// Row Element
export interface RowElement extends BaseElementProps {
  type: 'row';
  children: EmailElement[];
  gap?: number;
  contentBackgroundColor?: string;
  backgroundImage?: string;
  imageUrl?: string;
}

// Table Element
export interface TableElement extends BaseElementProps {
  type: 'table';
  rows: number;
  cols: number;
  cells: TableCell[];
  borderCollapse: boolean;
}

export interface TableCell {
  id: string;
  content: string;
  rowIndex: number;
  colIndex: number;
  backgroundColor?: string;
  borderColor?: string;
}

// Video Element (Fallback image required)
export interface VideoElement extends BaseElementProps {
  type: 'video';
  src: string;
  posterImage: string;
  loop: boolean;
  autoplay: boolean;
}

// Form Element (Pro Feature)
export interface FormElement extends BaseElementProps {
  type: 'form';
  formId: string;
  submitButtonText: string;
  fields: FormField[];
  successMessage: string;
  redirectUrl?: string;
}

export interface FormField {
  id: string;
  name: string;
  type: 'text' | 'email' | 'number' | 'checkbox' | 'select';
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[]; // For select fields
}

// Countdown Element (Pro Feature)
export interface CountdownElement extends BaseElementProps {
  type: 'countdown';
  targetDate: string;
  textColor: string;
  unitLabelColor: string;
  separatorColor: string;
  showDays: boolean;
  showHours: boolean;
  showMinutes: boolean;
  showSeconds: boolean;
}

// HTML Element (Raw HTML content)
export interface HTMLElement extends Partial<BaseElementProps> {
  type: 'html';
  id: string;
  content: string; // Raw HTML
  visible?: boolean;
  locked?: boolean;
}

// Union type for all elements
export type EmailElement =
  | TextElement
  | ImageElement
  | ButtonElement
  | DividerElement
  | SpacerElement
  | SectionElement
  | ColumnElement
  | RowElement
  | TableElement
  | VideoElement
  | FormElement
  | CountdownElement
  | HTMLElement;

// Template
export interface EmailTemplate {
  id: string;
  name: string;
  description?: string;
  thumbnail?: string;
  elements: EmailElement[];
  width: number; // email content width, typically 600px
  defaultFontFamily: FontFamily;
  defaultFontSize: FontSize;
  defaultLineHeight: number;
  defaultTextColor: string;
  defaultBackgroundColor: string;
  previewText?: string;
  subject?: string;
  fromName?: string;
  fromEmail?: string;
  replyTo?: string;
  createdAt: string;
  updatedAt: string;
  isPro?: boolean;
  isTemplate?: boolean;
}

// Editor State
export interface EditorState {
  currentTemplate: EmailTemplate | null;
  selectedElementId: string | null;
  zoom: number;
  isDirty: boolean;
  history: EmailTemplate[];
  historyIndex: number;
  showGrid: boolean;
  snapToGrid: boolean;
  gridSize: number;
}

// User
export interface User {
  id: string;
  name: string;
  email: string;
  plan: 'free' | 'pro' | 'enterprise';
  createdAt: string;
  updatedAt: string;
}

// Feature Flags
export interface FeatureFlags {
  advancedElements: boolean; // form, countdown
  advancedLayout: boolean; // table support
  advancedStyling: boolean; // shadows, complex borders
  proTemplates: boolean;
  bulkExport: boolean;
  integrations: boolean;
  analytics: boolean;
  teamManagement: boolean;
}

// Subscription
export interface SubscriptionPlan {
  id: string;
  name: string;
  level: 'free' | 'pro' | 'enterprise';
  features: FeatureFlags;
  maxTemplates: number;
  maxMonthlyExports: number;
  price: number;
  currency: string;
}

// Export Format
export type ExportFormat = 'html' | 'mjml' | 'json' | 'amp';

export interface ExportOptions {
  format: ExportFormat;
  minify?: boolean;
  includeStyles?: boolean;
  responsive?: boolean;
}

// API Responses
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Merge Tags (for library integration)
export interface MergeTag {
  id: string;
  label: string;
  value: string;
  category: 'user' | 'system' | 'custom';
  trigger: string; // Configurable trigger character(s) from parent app
  description?: string;
}

// Save Data (returned by onSave callback)
export interface SaveData {
  template: EmailTemplate;
  html: string;
  json: string;
  mjml?: string;
}

// Email Template Builder Props (for library usage)
export interface EmailTemplateBuilderProps {
  // Initial data
  initialTemplate?: EmailTemplate | string;
  
  // Merge tags configuration
  mergeTags?: MergeTag[];
  mergeTagTriggers?: string[]; // e.g., ['@', '#', '{{']
  
  // Callbacks
  onChange?: (template: EmailTemplate) => void;
  onSave?: (data: SaveData) => void;
  
  // UI customization
  readOnly?: boolean;
  hideToolbar?: boolean;
  hideElementsPanel?: boolean;
  hideSettingsPanel?: boolean;
  hideSaveButton?: boolean;
  hideTemplatesButton?: boolean;
  
  // Footer configuration
  showFooter?: boolean;              // Enable footer display
  showPoweredBy?: boolean;           // Show "Powered by Public Circles" (default: true when showFooter is true)
  includeUnsubscribe?: boolean;      // Show unsubscribe link (default: true when showFooter is true)
}

