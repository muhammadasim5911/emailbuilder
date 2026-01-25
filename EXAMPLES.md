# EmailBuilder Implementation Examples

This guide contains practical code examples for extending the email builder.

## Adding a New Free Element: Video

### Step 1: Add Type Definition

**File: `src/types/index.ts`**

```typescript
export interface VideoElement extends BaseElementProps {
  type: 'video';
  src: string;
  posterImage: string;
  loop: boolean;
  autoplay: boolean;
}

// Update the union type
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
  | VideoElement  // Add this
  | FormElement
  | CountdownElement;
```

### Step 2: Add to Elements Panel

**File: `src/components/editor/ElementsPanel.tsx`**

```typescript
const ELEMENTS_GROUPS = [
  {
    name: 'Content',
    elements: [
      { id: 'text', label: 'Text', icon: '📝', isFree: true },
      { id: 'image', label: 'Image', icon: '🖼️', isFree: true },
      { id: 'video', label: 'Video', icon: '🎬', isFree: true },  // Add this
      { id: 'button', label: 'Button', icon: '🔘', isFree: true },
      { id: 'divider', label: 'Divider', icon: '─', isFree: true },
    ],
  },
  // ... rest of groups
];
```

### Step 3: Add Canvas Renderer

**File: `src/components/editor/CanvasElement.tsx`**

```typescript
{element.type === 'video' && (
  <VideoElementRenderer element={element as any} />
)}

// Add this new renderer function
const VideoElementRenderer: React.FC<{ element: any }> = ({ element }) => (
  <div className="relative w-full bg-black rounded-lg overflow-hidden">
    <img
      src={element.posterImage}
      alt="Video poster"
      className="w-full h-auto"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center">
        ▶
      </button>
    </div>
  </div>
);
```

### Step 4: Add Settings Panel

**File: `src/components/editor/SettingsPanel.tsx`**

```typescript
{element.type === 'video' && (
  <>
    <Input
      label="Video URL"
      type="text"
      value={(element as any).src}
      onChange={(e) => onUpdate({ src: e.target.value } as any)}
    />
    <Input
      label="Poster Image"
      type="text"
      value={(element as any).posterImage}
      onChange={(e) => onUpdate({ posterImage: e.target.value } as any)}
    />
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={(element as any).loop}
        onChange={(e) => onUpdate({ loop: e.target.checked } as any)}
      />
      Loop
    </label>
    <label className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        checked={(element as any).autoplay}
        onChange={(e) => onUpdate({ autoplay: e.target.checked } as any)}
      />
      Autoplay
    </label>
  </>
)}
```

### Step 5: Add Export Support

**File: `src/utils/index.ts`**

```typescript
case 'video': {
  const el = element as any;
  const imgStyle = `
    ${baseStyle}
    max-width: 100%;
    height: auto;
  `;
  // For email, use poster image as fallback
  return `<img src="${el.posterImage}" alt="Video" style="${imgStyle}" />`;
}
```

---

## Implementing Backend Integration

### Step 1: Create API Service

**File: `src/utils/api.ts`**

```typescript
import axios from 'axios';
import type { EmailTemplate, User } from '../types';

const API_BASE = 'https://api.emailbuilder.com';

const api = axios.create({
  baseURL: API_BASE,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Templates API
export const templatesApi = {
  list: async () => {
    const response = await api.get('/templates');
    return response.data;
  },

  get: async (id: string) => {
    const response = await api.get(`/templates/${id}`);
    return response.data;
  },

  create: async (template: EmailTemplate) => {
    const response = await api.post('/templates', template);
    return response.data;
  },

  update: async (id: string, template: EmailTemplate) => {
    const response = await api.put(`/templates/${id}`, template);
    return response.data;
  },

  delete: async (id: string) => {
    await api.delete(`/templates/${id}`);
  },
};

// Auth API
export const authApi = {
  signup: async (email: string, password: string) => {
    const response = await api.post('/auth/signup', { email, password });
    return response.data;
  },

  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  logout: async () => {
    await api.post('/auth/logout');
  },

  getCurrentUser: async (): Promise<User> => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default api;
```

### Step 2: Update Store with API Integration

**File: `src/store/index.ts`** - Add to editor store:

```typescript
import { templatesApi } from '../utils/api';

// In create function:
loadTemplateFromApi: async (id: string) => {
  try {
    const template = await templatesApi.get(id);
    set({
      currentTemplate: template,
      selectedElementId: null,
      isDirty: false,
      history: [template],
      historyIndex: 0,
    });
  } catch (error) {
    console.error('Failed to load template:', error);
  }
},

saveTemplateToApi: async () => {
  const state = get();
  if (!state.currentTemplate) return;

  try {
    const saved = await templatesApi.update(
      state.currentTemplate.id,
      state.currentTemplate
    );
    set({ isDirty: false });
    return saved;
  } catch (error) {
    console.error('Failed to save template:', error);
  }
},
```

---

## Adding Drag & Drop Support

### Step 1: Setup react-dnd

Already installed! Just need to wrap the editor:

```bash
npm install react-dnd react-dnd-html5-backend
```

### Step 2: Create Draggable Element

**File: `src/components/editor/DraggableElement.tsx`**

```typescript
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import type { EmailElement } from '../../types';

interface DraggableElementProps {
  element: EmailElement;
  index: number;
  onReorder: (oldIndex: number, newIndex: number) => void;
  onSelect: (id: string) => void;
}

const ITEM_TYPE = 'ELEMENT';

export const DraggableElement: React.FC<DraggableElementProps> = ({
  element,
  index,
  onReorder,
  onSelect,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ITEM_TYPE,
    item: { index, element },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ITEM_TYPE,
    hover: (item: any) => {
      if (item.index !== index) {
        onReorder(item.index, index);
        item.index = index;
      }
    },
  }));

  return (
    <div
      ref={(node) => drag(drop(node))}
      onClick={() => onSelect(element.id)}
      className={`p-4 border ${isDragging ? 'opacity-50' : 'opacity-100'}`}
    >
      {element.type === 'text' && <p>{(element as any).content}</p>}
      {/* Render other types... */}
    </div>
  );
};
```

---

## Custom Hook Example: useTemplateStorage

**File: `src/hooks/useTemplateStorage.ts`**

```typescript
import { useEffect } from 'react';
import { useEditorStore } from '../store';

/**
 * Automatically save template to localStorage
 */
export const useTemplateStorage = () => {
  const { currentTemplate, isDirty } = useEditorStore();

  useEffect(() => {
    if (!isDirty || !currentTemplate) return;

    // Debounce saves
    const timer = setTimeout(() => {
      localStorage.setItem(
        `template_${currentTemplate.id}`,
        JSON.stringify(currentTemplate)
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentTemplate, isDirty]);

  return {
    saveLocal: (template: any) => {
      localStorage.setItem(`template_${template.id}`, JSON.stringify(template));
    },
    loadLocal: (id: string) => {
      const stored = localStorage.getItem(`template_${id}`);
      return stored ? JSON.parse(stored) : null;
    },
  };
};
```

---

## Pro Feature: Add Form Element

### Step 1: Define Types

**File: `src/types/index.ts`**

```typescript
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
  options?: string[];
}
```

### Step 2: Mark as Pro

**File: `src/components/editor/ElementsPanel.tsx`**

```typescript
{
  name: 'Advanced',
  elements: [
    { id: 'table', label: 'Table', icon: '📊', isFree: false },
    { id: 'form', label: 'Form', icon: '📋', isFree: false },  // Pro feature
    { id: 'countdown', label: 'Countdown', icon: '⏱️', isFree: false },
  ],
}
```

### Step 3: Implement Settings

**File: `src/components/editor/SettingsPanel.tsx`**

```typescript
{element.type === 'form' && features.advancedElements && (
  <>
    <Input
      label="Form ID"
      value={(element as any).formId}
      onChange={(e) => onUpdate({ formId: e.target.value } as any)}
    />
    <Input
      label="Submit Button Text"
      value={(element as any).submitButtonText}
      onChange={(e) => onUpdate({ submitButtonText: e.target.value } as any)}
    />
    <textarea
      className="w-full p-2 border rounded text-sm"
      placeholder="Success message"
      value={(element as any).successMessage}
      onChange={(e) => onUpdate({ successMessage: e.target.value } as any)}
    />
    {/* Form fields management UI */}
  </>
)}
```

---

## Utility Function: Validate Email

**File: `src/utils/validation.ts`**

```typescript
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validateTemplate = (template: any): string[] => {
  const errors: string[] = [];

  if (!template.name?.trim()) {
    errors.push('Template name is required');
  }

  if (!template.elements || template.elements.length === 0) {
    errors.push('Template must contain at least one element');
  }

  if (!template.defaultTextColor) {
    errors.push('Default text color is required');
  }

  template.elements?.forEach((el: any) => {
    if (el.type === 'button' && !el.link) {
      errors.push(`Button "${el.text}" is missing a link`);
    }
  });

  return errors;
};
```

---

## Configuration: Custom Color Palette

**File: `src/config/colors.ts`**

```typescript
export const COLOR_PALETTE = {
  // Grays
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  // Primary
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  },
  // Success
  green: {
    50: '#f0fdf4',
    600: '#16a34a',
    700: '#15803d',
  },
  // Warning
  yellow: {
    50: '#fefce8',
    600: '#ca8a04',
  },
  // Danger
  red: {
    50: '#fef2f2',
    600: '#dc2626',
    700: '#b91c1c',
  },
};

// Export as flat list for color picker
export const COLOR_PRESETS = [
  '#000000',
  '#ffffff',
  '#3b82f6',
  '#dc2626',
  '#16a34a',
  '#ca8a04',
  '#6b7280',
];
```

---

## Testing Example

**File: `src/utils/__tests__/validation.test.ts`**

```typescript
import { validateTemplate, validateEmail } from '../validation';

describe('Validation', () => {
  describe('validateEmail', () => {
    it('should validate correct emails', () => {
      expect(validateEmail('user@example.com')).toBe(true);
    });

    it('should reject invalid emails', () => {
      expect(validateEmail('invalid.email')).toBe(false);
    });
  });

  describe('validateTemplate', () => {
    it('should return errors for empty template', () => {
      const errors = validateTemplate({});
      expect(errors.length).toBeGreaterThan(0);
    });

    it('should validate correct template', () => {
      const template = {
        name: 'Test',
        elements: [{ type: 'text', content: 'Hello' }],
        defaultTextColor: '#000000',
        defaultBackgroundColor: '#ffffff',
      };
      const errors = validateTemplate(template);
      expect(errors.length).toBe(0);
    });
  });
});
```

---

These examples show how to extend the email builder with new features while maintaining the clean architecture and type safety. Follow these patterns for consistency!
