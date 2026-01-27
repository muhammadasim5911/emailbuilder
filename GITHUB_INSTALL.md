# GitHub Installation Guide

## Quick Setup

Instead of using `npm link`, you can install the EmailTemplateBuilder directly from GitHub.

### Step 1: Push to GitHub

First, make sure your EmailTemplateBuilder is pushed to GitHub:

```bash
cd /Users/mac/Desktop/React-Apps/EmailTemplateBuilder

# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Email Template Builder"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/EmailTemplateBuilder.git

# Push to GitHub
git push -u origin main
```

### Step 2: Install in Your App

In your `public-circle-latest` project, update `package.json`:

```json
{
  "dependencies": {
    "email-template-builder": "git+https://github.com/YOUR_USERNAME/EmailTemplateBuilder.git"
  }
}
```

Then run:

```bash
cd /Users/mac/Desktop/React-Apps/public-circle-latest
npm install
```

### Step 3: Use in Your App

Import and use as normal:

```typescript
import { EmailTemplateBuilder } from 'email-template-builder';
import type { MergeTag, SaveData } from 'email-template-builder';
```

---

## Updating the Package

When you make changes to EmailTemplateBuilder:

```bash
# In EmailTemplateBuilder directory
git add .
git commit -m "Your update message"
git push

# In your app directory
cd /Users/mac/Desktop/React-Apps/public-circle-latest
npm update email-template-builder
# or
npm install email-template-builder@latest
```

---

## Alternative: Use a Specific Branch or Tag

You can also install from a specific branch or tag:

```json
{
  "dependencies": {
    "email-template-builder": "git+https://github.com/YOUR_USERNAME/EmailTemplateBuilder.git#main",
    // or specific tag
    "email-template-builder": "git+https://github.com/YOUR_USERNAME/EmailTemplateBuilder.git#v1.0.0"
  }
}
```

---

## Benefits

✅ **No npm publish needed** - Install directly from GitHub  
✅ **Free** - Works with public or private repos  
✅ **Version control** - Use tags/branches for versions  
✅ **Team friendly** - Anyone with repo access can install  
✅ **Auto updates** - `npm update` pulls latest changes  

---

## Private Repository

If your repo is private, use SSH:

```json
{
  "dependencies": {
    "email-template-builder": "git+ssh://git@github.com/YOUR_USERNAME/EmailTemplateBuilder.git"
  }
}
```

Make sure your SSH keys are set up with GitHub.
