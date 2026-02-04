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

This package is published to **GitHub Packages** as a private package.

### Step 1: Authentication Setup

Create a Personal Access Token (PAT) with `read:packages` permission:
1. Go to https://github.com/settings/tokens
2. Generate new token (classic)
3. Select `read:packages` scope
4. Copy the token

### Step 2: Configure npm

In your project, create or update `.npmrc`:

```
@muhammadasim5911:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

> ⚠️ **Important**: Add `.npmrc` to `.gitignore` to keep your token secure!

### Step 3: Install the Package

```bash
npm install @muhammadasim5911/email-template-builder
```

### Alternative: Direct GitHub Install

You can also install directly from GitHub without npm:

```bash
npm install git+https://github.com/muhammadasim5911/emailbuilder.git
```

For detailed publishing instructions, see [PUBLISHING.md](./PUBLISHING.md).

## Quick Start

```typescript
import { EmailTemplateBuilder } from '@muhammadasim5911/email-template-builder';
import '@muhammadasim5911/email-template-builder/style.css';
import type { MergeTag, SaveData } from '@muhammadasim5911/email-template-builder';

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

## Publishing

To publish a new version (for package maintainers):

```bash
npm run publish:package
```

The script will guide you through:
- Committing changes
- Version bumping (patch/minor/major)
- Building and testing
- Pushing to GitHub (triggers auto-publish)

See [PUBLISHING.md](./PUBLISHING.md) for detailed instructions.

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
