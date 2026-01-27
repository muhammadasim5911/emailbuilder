# Email Template Builder

A powerful, reusable React email template builder with drag-and-drop functionality, merge tag support, and live preview.

## Features

✨ **Drag & Drop Editor** - Intuitive visual email builder  
🏷️ **Merge Tags** - Insert dynamic content with `@` and `#` triggers  
📱 **Responsive** - Desktop, tablet, and mobile preview modes  
🎨 **Rich Styling** - Full control over fonts, colors, spacing, and layout  
💾 **Multiple Export Formats** - HTML, JSON, MJML  
🔧 **Highly Customizable** - Hide/show panels, customize UI  

## Installation

### Using npm link (Recommended for local development)

```bash
# In this directory
npm link

# In your app
cd /path/to/your/app
npm link email-template-builder
```

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed instructions.

## Quick Start

```typescript
import { EmailTemplateBuilder } from 'email-template-builder';
import type { MergeTag, SaveData } from 'email-template-builder/types';

function App() {
  const mergeTags: MergeTag[] = [
    {
      id: '1',
      label: 'First Name',
      value: '{{firstName}}',
      category: 'user',
      trigger: '@',
    },
  ];

  const handleSave = (data: SaveData) => {
    console.log('HTML:', data.html);
    console.log('JSON:', data.json);
  };

  return (
    <EmailTemplateBuilder
      mergeTags={mergeTags}
      mergeTagTriggers={['@', '#']}
      onSave={handleSave}
    />
  );
}
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialTemplate` | `EmailTemplate` | - | Initial template to load |
| `mergeTags` | `MergeTag[]` | `[]` | Available merge tags |
| `mergeTagTriggers` | `string[]` | `['@', '#']` | Characters that trigger merge tag dropdown |
| `onChange` | `(template) => void` | - | Called when template changes |
| `onSave` | `(data: SaveData) => void` | - | Called when user saves (returns all formats) |
| `readOnly` | `boolean` | `false` | Disable editing |
| `hideToolbar` | `boolean` | `false` | Hide toolbar |
| `hideElementsPanel` | `boolean` | `false` | Hide elements panel |
| `hideSettingsPanel` | `boolean` | `false` | Hide settings panel |
| `hideSaveButton` | `boolean` | `false` | Hide save button |

### Types

```typescript
interface MergeTag {
  id: string;
  label: string;
  value: string;
  category: 'user' | 'system' | 'custom';
  trigger: string;
  description?: string;
}

interface SaveData {
  template: EmailTemplate;
  html: string;
  json: string;
  mjml?: string;
}
```

## Examples

See [examples/LibraryUsage.tsx](./examples/LibraryUsage.tsx) for a complete example.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## License

MIT
