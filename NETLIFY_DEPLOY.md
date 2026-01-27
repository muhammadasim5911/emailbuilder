# Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **Build your project:**
```bash
cd /Users/mac/Desktop/React-Apps/EmailTemplateBuilder
npm run build
```

3. **Deploy:**
```bash
netlify deploy
```

Follow the prompts:
- Authorize with your Netlify account
- Create a new site or link to existing
- Set publish directory to: `dist`

4. **Deploy to production:**
```bash
netlify deploy --prod
```

---

### Option 2: Deploy via GitHub (Continuous Deployment)

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

2. **Connect to Netlify:**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

---

### Option 3: Manual Drag & Drop

1. **Build your project:**
```bash
npm run build
```

2. **Deploy:**
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder to the upload area
   - Your site will be live in seconds!

---

## Build Configuration

The `netlify.toml` file is already configured with:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ SPA routing (redirects all routes to index.html)
- ✅ Security headers
- ✅ Asset caching

---

## Environment Variables (if needed)

If your app needs environment variables:

1. Go to Netlify Dashboard → Site settings → Environment variables
2. Add your variables:
   - `VITE_API_URL` - Your backend API URL
   - Any other `VITE_*` variables

---

## Custom Domain (Optional)

After deployment:
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

---

## Troubleshooting

### Build fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check Netlify build logs for errors

### 404 errors on refresh
- Make sure `netlify.toml` is in the root directory
- Check that redirects are configured correctly

### Assets not loading
- Verify `dist` folder contains all built files
- Check that asset paths are relative, not absolute

---

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:
- ✅ Deploy on every push to `main` branch
- ✅ Create preview deployments for pull requests
- ✅ Run build checks before deploying

---

## Your Deployment Checklist

- [ ] Build works locally (`npm run build`)
- [ ] `netlify.toml` is in root directory
- [ ] Code is pushed to GitHub
- [ ] Connected to Netlify
- [ ] Environment variables set (if needed)
- [ ] Custom domain configured (optional)

🚀 **Ready to deploy!**
