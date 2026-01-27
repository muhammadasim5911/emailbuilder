# Using Email Template Builder in Your Apps

## Setup Guide - npm link (Recommended)

This guide shows you how to use the Email Template Builder in multiple apps while keeping them separate. Changes to the builder will automatically reflect in all apps using it.

---

## Step 1: Link the Email Template Builder (One-time setup)

In the EmailTemplateBuilder directory:

```bash
cd /Users/mac/Desktop/React-Apps/EmailTemplateBuilder
npm link
```

✅ **Done!** The package is now globally linked on your computer.

---

## Step 2: Use in Your Main App

In your main app directory:

```bash
cd /path/to/your/main-app
npm link email-template-builder
```

---

## Step 3: Import and Use

In your main app code:

```typescript
import { EmailTemplateBuilder } from 'email-template-builder';
import type { MergeTag, SaveData } from 'email-template-builder/types';

function MyApp() {
  const mergeTags: MergeTag[] = [
    {
      id: '1',
      label: 'First Name',
      value: '{{firstName}}',
      category: 'user',
      trigger: '@',
      description: "User's first name",
    },
    {
      id: '2',
      label: 'Company Name',
      value: '{{companyName}}',
      category: 'system',
      trigger: '#',
      description: 'Your company name',
    },
  ];

  const handleSave = (data: SaveData) => {
    console.log('Template:', data.template);
    console.log('HTML:', data.html);
    console.log('JSON:', data.json);
    
    // Send to your backend
    fetch('/api/save-template', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  };

  return (
    <EmailTemplateBuilder
      mergeTags={mergeTags}
      mergeTagTriggers={['@', '#']}
      onChange={(template) => {
        // Auto-save draft
        localStorage.setItem('draft', JSON.stringify(template));
      }}
      onSave={handleSave}
    />
  );
}
```

---

## Step 4: Use in Multiple Apps

Repeat Step 2 for each app:

```bash
# App 1
cd /path/to/app1
npm link email-template-builder

# App 2
cd /path/to/app2
npm link email-template-builder

# App 3
cd /path/to/app3
npm link email-template-builder
```

**All apps now use the same EmailTemplateBuilder!** Changes to the builder automatically reflect in all apps.

---

## How It Works

```
EmailTemplateBuilder (Source)
    ↓ npm link
    ↓
Global npm packages
    ↓ npm link email-template-builder
    ├── App 1 ✅
    ├── App 2 ✅
    └── App 3 ✅
```

When you edit EmailTemplateBuilder:
- Changes are immediately available in all linked apps
- No rebuild needed (hot reload works!)
- All apps stay in sync

---

## Troubleshooting

### Issue: "Cannot find module 'email-template-builder'"

**Solution:** Make sure you ran `npm link` in the EmailTemplateBuilder directory first.

```bash
cd /Users/mac/Desktop/React-Apps/EmailTemplateBuilder
npm link
```

### Issue: Changes not reflecting

**Solution:** Restart your dev server in the main app:

```bash
# Stop the dev server (Ctrl+C)
# Start it again
npm run dev
```

### Issue: TypeScript errors

**Solution:** Make sure your main app's tsconfig.json includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

---

## Unlinking (If Needed)

To remove the link from an app:

```bash
cd /path/to/your/app
npm unlink email-template-builder
```

To remove the global link:

```bash
cd /Users/mac/Desktop/React-Apps/EmailTemplateBuilder
npm unlink
```

---

## Benefits

✅ **Separate codebases** - EmailTemplateBuilder stays independent  
✅ **Auto-sync** - Changes reflect immediately in all apps  
✅ **Multiple apps** - Use in as many apps as you want  
✅ **Free** - No GitHub, no npm publish, no cost  
✅ **Easy updates** - Edit once, updates everywhere  

---

## Next Steps

1. Run `npm link` in EmailTemplateBuilder ✅ (Already done!)
2. Run `npm link email-template-builder` in your main app
3. Import and use as shown above
4. Enjoy! 🎉
