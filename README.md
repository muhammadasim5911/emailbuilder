# EmailBuilder - Professional Email Template Builder

A modern, scalable email template builder inspired by Unlayer. Built with React, TypeScript, and Tailwind CSS. Designed for both free and pro users with a complete feature-based architecture.

## 🚀 Features

### Core Features (Free)
- **Drag & Drop Editor** - Intuitive interface for building emails
- **Multiple Element Types** - Text, images, buttons, dividers, spacers, sections
- **Real-time Preview** - See your changes instantly
- **Responsive Design** - Mobile-first email templates
- **Export Formats** - HTML and JSON export
- **Element Properties** - Complete control over styling and layout
- **Undo/Redo** - Full history management
- **Up to 3 Templates** - Create and save multiple templates

### Pro Features
- **Advanced Elements** - Forms, countdown timers, tables
- **Advanced Layout** - Multi-column layouts with columns and rows
- **Advanced Styling** - Shadows, complex borders, animations
- **Pro Templates** - Pre-built professional templates
- **Additional Exports** - MJML and AMP for Email formats
- **Bulk Export** - Export multiple templates at once
- **Integrations** - Connect with email services
- **Analytics** - Track email performance
- **Unlimited Templates** - Create as many templates as you need

## 📁 Project Structure

```
src/
├── components/
│   ├── base/                 # Reusable UI components (Button, Input, Modal, etc.)
│   ├── editor/               # Email builder components (Canvas, Toolbar, etc.)
│   └── elements/             # Specific element components
├── pages/
│   ├── HomePage.tsx          # Landing page with pricing
│   ├── EditorPage.tsx        # Main email builder editor
│   └── DashboardPage.tsx     # User dashboard (future)
├── store/                    # Zustand state management
│   ├── useEditorStore        # Editor state (templates, elements, history)
│   ├── useUserStore          # User state (subscription, features)
│   └── useTemplateLibraryStore # Template library
├── types/
│   └── index.ts              # TypeScript type definitions
├── utils/
│   └── index.ts              # Utilities (export, validation, element creation)
├── config/
│   └── index.ts              # Configuration (plans, formats, categories)
├── hooks/                    # Custom React hooks
├── App.tsx                   # Main app component
├── index.css                 # Tailwind & global styles
└── main.tsx                  # React entry point
```

## 🏗️ Architecture

### State Management (Zustand)
Three focused stores for clean separation of concerns:
- **useEditorStore** - Editor state (templates, elements, history, zoom, selection)
- **useUserStore** - User state (current user, subscription plan, features)
- **useTemplateLibraryStore** - Template library management

### Component Organization
- **Base Components** - Reusable UI components used throughout the app
- **Editor Components** - Email builder specific components
- **Page Components** - Full page layouts

### Feature Separation
Free and Pro features are controlled via feature flags:
```typescript
interface FeatureFlags {
  advancedElements: boolean;    // Forms, countdown
  advancedLayout: boolean;      // Columns, rows
  advancedStyling: boolean;     // Shadows, complex borders
  proTemplates: boolean;
  bulkExport: boolean;
  integrations: boolean;
  analytics: boolean;
  teamManagement: boolean;
}
```

## 🛠️ Technology Stack

- **React 19** - UI framework with latest features
- **TypeScript** - Type safety throughout the app
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Zustand** - Lightweight state management
- **React DnD** - Drag and drop (prepared)
- **UUID** - Unique ID generation
- **Clsx** - Conditional CSS classes

## 📦 Getting Started

### Installation

```bash
cd /Users/mac/Desktop/React-Apps/EmailTemplateBuilder
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 📋 Element Types

| Element | Type | Free | Pro | Description |
|---------|------|------|-----|-------------|
| Text | text | ✅ | ✅ | Formatted text with style options |
| Image | image | ✅ | ✅ | Images with alt text and sizing |
| Button | button | ✅ | ✅ | CTA buttons with styling |
| Divider | divider | ✅ | ✅ | Horizontal dividers |
| Spacer | spacer | ✅ | ✅ | Vertical spacing |
| Section | section | ✅ | ✅ | Content container |
| Column | column | ❌ | ✅ | Vertical column layout |
| Row | row | ❌ | ✅ | Horizontal row layout |
| Table | table | ❌ | ✅ | Data tables |
| Form | form | ❌ | ✅ | Interactive forms |
| Countdown | countdown | ❌ | ✅ | Countdown timers |

## 💾 Export Formats

- **HTML** - Standard email HTML (Free)
- **JSON** - Template data structure (Free)
- **MJML** - Responsive Email Markup Language (Pro)
- **AMP** - Google AMP for Email (Pro)

## 🎯 Usage Guide

### Creating a Template

1. Click "Start Building Now" on the homepage
2. The editor opens with a blank canvas
3. Click elements in the left sidebar to add them
4. Click elements on the canvas to select and edit
5. Modify properties in the right sidebar
6. Export your template

### Editing Elements

Each element has properties organized in tabs:
- **Style** - Colors, borders, opacity
- **Layout** - Width, height, padding, margins
- **Content** - Element-specific content (text, images, links, etc.)

### Saving & Exporting

- **Auto-save** - Changes are tracked automatically
- **Undo/Redo** - Full history of all changes
- **Export** - Download in multiple formats
- **Preview** - Live preview before export

## 🔒 Authentication & Subscriptions

Current implementation provides:
- Default free user on first load
- Feature flags based on subscription level
- Plan information in config

Production implementation should add:
- User authentication (email/password, OAuth)
- Subscription management (Stripe, Paddle)
- Backend API integration
- Database persistence

## 🎨 Customization

### Adding New Element Types

1. **Define the type** in `src/types/index.ts`
   ```typescript
   export interface NewElement extends BaseElementProps {
     type: 'newElement';
     // ... properties
   }
   ```

2. **Create rendering component** in `src/components/elements/`

3. **Add to ElementsPanel** in `src/components/editor/ElementsPanel.tsx`
   ```typescript
   { id: 'newElement', label: 'New Element', icon: '🎯', isFree: true }
   ```

4. **Add rendering in CanvasElement** in `src/components/editor/CanvasElement.tsx`

5. **Add settings UI** in `src/components/editor/SettingsPanel.tsx`

### Theming

Customize colors and spacing in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: { /* ... */ },
      dark: { /* ... */ },
    },
    spacing: { /* ... */ },
    borderRadius: { /* ... */ },
  },
}
```

## 📱 Responsive Emails

The builder creates mobile-responsive emails:
- Standard email width: 600px
- All elements scale proportionally
- Responsive HTML generation
- Mobile preview support

## 🚀 Scalability Features

- **Clean Code** - Well-organized, easy to extend
- **Type Safety** - Full TypeScript coverage
- **Modular Design** - Independent components and stores
- **Feature Flags** - Easy to add/remove features
- **Extensible** - Simple to add new elements, stores, and pages
- **Performance** - Optimized rendering and state updates

## 🔄 History Management

Full undo/redo with:
- Unlimited history depth
- Dirty state tracking
- localStorage integration
- Efficient state snapshots

## 🎯 Roadmap

### Phase 1 (MVP) ✅
- Basic editor with core elements
- Free tier features
- Export to HTML/JSON
- Responsive design

### Phase 2
- [ ] Drag and drop implementation
- [ ] Template library
- [ ] Pro elements
- [ ] MJML/AMP export

### Phase 3
- [ ] Backend API
- [ ] Database persistence
- [ ] User authentication
- [ ] Subscription management
- [ ] Email preview testing

### Phase 4
- [ ] Collaboration features
- [ ] Advanced analytics
- [ ] Integrations (Mailchimp, SendGrid)
- [ ] AI-powered content
- [ ] Mobile app (React Native)

## 🤝 Development Guidelines

### Code Organization
- One component per file
- Group related functionality
- Keep components small and focused
- Use custom hooks for logic

### Naming Conventions
- Components: PascalCase (e.g., `EditorPage`)
- Files: Match component name
- Functions: camelCase (e.g., `handleExport`)
- Constants: UPPER_SNAKE_CASE (e.g., `DEFAULT_FREE_FEATURES`)

### Type Safety
- Use TypeScript for all files
- Define interfaces for props
- Avoid `any` types
- Export types from modules

### State Management
- Use Zustand stores for global state
- Keep stores focused and small
- Use React hooks for local state
- Avoid prop drilling

## 📞 Support

For questions or issues:
1. Check existing code comments
2. Review TypeScript types
3. Check Tailwind documentation
4. Review Zustand guide

## 📄 License

MIT License - Free for commercial use

---

**Built with ❤️ for email builders worldwide**
