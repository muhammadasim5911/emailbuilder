# Publishing Guide

## 🚀 Quick Publish (Automated Script)

**The easiest way to publish** - just run one command:

```bash
npm run publish:package
# or directly
./publish.sh
```

The script will:
1. ✅ Check for uncommitted changes and commit them
2. ✅ Prompt for version bump type (patch/minor/major)
3. ✅ Run linting
4. ✅ Build the library
5. ✅ Bump version in package.json
6. ✅ Create git tag
7. ✅ Push to GitHub (triggers auto-publish)

**That's it!** GitHub Actions will handle the rest.

---

## 📦 Manual Publishing (Advanced)

This package is published to **GitHub Packages** (private registry). Since the repository is private, authentication is required for both publishing and installing.

---

## 🚀 How to Publish a New Version

### Method 1: Automatic Publishing (Recommended)

1. **Update the version** in `package.json`:
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   # or
   npm version minor  # 1.0.0 -> 1.1.0
   # or
   npm version major  # 1.0.0 -> 2.0.0
   ```

2. **Push the version tag** to GitHub:
   ```bash
   git push --follow-tags
   ```

3. **GitHub Actions will automatically**:
   - Build the library
   - Run linting
   - Publish to GitHub Packages
   - Create a GitHub Release

4. **Check the progress**:
   - Go to: https://github.com/muhammadasim5911/emailbuilder/actions
   - Watch the "Publish to GitHub Packages" workflow

---

### Method 2: Manual Publishing

If you need to publish manually:

```bash
# Build the library
npm run build:lib

# Publish to GitHub Packages
npm publish
```

> **Note**: You must be authenticated with GitHub Packages (see Authentication section below).

---

## 🔐 Authentication for Publishing

GitHub Actions uses the automatic `GITHUB_TOKEN`, so no manual setup is needed for CI/CD.

For **manual publishing** from your local machine:

1. **Create a Personal Access Token (PAT)**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token (classic)"
   - Select scopes:
     - ✅ `write:packages`
     - ✅ `read:packages`
     - ✅ `delete:packages` (optional)
   - Generate and copy the token

2. **Login to GitHub Packages**:
   ```bash
   npm login --scope=@muhammadasim5911 --registry=https://npm.pkg.github.com
   ```
   - Username: `muhammadasim5911`
   - Password: `<YOUR_PERSONAL_ACCESS_TOKEN>`
   - Email: `<YOUR_EMAIL>`

---

## 📥 Installing in Your App

### Step 1: Create .npmrc in Your App

In your consuming project (e.g., `public-circle-latest`), create `.npmrc`:

```
@muhammadasim5911:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
```

> **⚠️ Security Warning**: Never commit your `.npmrc` with the auth token to git. Add it to `.gitignore`.

### Step 2: Install the Package

```bash
npm install @muhammadasim5911/email-template-builder
```

### Step 3: Use in Your Code

```typescript
import { EmailTemplateBuilder } from '@muhammadasim5911/email-template-builder';
import '@muhammadasim5911/email-template-builder/style.css';

// Use the component
<EmailTemplateBuilder
  mergeTags={mergeTags}
  onSave={handleSave}
/>
```

---

## 🔄 Updating to Latest Version

In your consuming app:

```bash
# Update to latest version
npm update @muhammadasim5911/email-template-builder

# Or install specific version
npm install @muhammadasim5911/email-template-builder@1.0.1
```

---

## 📋 Version Management

### Semantic Versioning

Follow semantic versioning (semver):

- **MAJOR** (1.0.0 → 2.0.0): Breaking changes
- **MINOR** (1.0.0 → 1.1.0): New features, backward compatible
- **PATCH** (1.0.0 → 1.0.1): Bug fixes, backward compatible

### Creating Pre-releases

For beta/alpha versions:

```bash
npm version prerelease --preid=beta
# 1.0.0 -> 1.0.1-beta.0

git push --follow-tags
```

Install pre-release in consuming app:
```bash
npm install @muhammadasim5911/email-template-builder@1.0.1-beta.0
```

---

## 🐛 Troubleshooting

### "404 Not Found" when installing

**Cause**: Authentication is not set up correctly.

**Solution**: 
1. Verify `.npmrc` exists in your project with correct registry and auth token
2. Ensure your PAT has `read:packages` permission
3. Check that the token hasn't expired

### "403 Forbidden" when publishing

**Cause**: Insufficient permissions or wrong registry.

**Solution**:
1. Verify you're logged in: `npm whoami --registry=https://npm.pkg.github.com`
2. Check your PAT has `write:packages` permission
3. Ensure package name matches repository name pattern

### GitHub Actions workflow fails

**Cause**: Most commonly build errors or permission issues.

**Solution**:
1. Check the workflow logs in GitHub Actions
2. Test build locally: `npm run build:lib`
3. Ensure `GITHUB_TOKEN` has package write permissions (should be automatic)

### Package not appearing after publish

**Cause**: May take a few moments to appear.

**Solution**:
1. Check: https://github.com/muhammadasim5911?tab=packages
2. Verify the publish workflow completed successfully
3. Check package visibility settings (should be private)

---

## 🔒 Security Best Practices

1. **Never commit tokens**: Add `.npmrc` with tokens to `.gitignore`
2. **Rotate tokens regularly**: Update PATs every 90 days
3. **Use fine-grained PATs**: GitHub's new fine-grained tokens offer better security
4. **Team access**: Use repository secrets for team members

---

## 📚 Additional Resources

- [GitHub Packages Documentation](https://docs.github.com/en/packages)
- [npm Semantic Versioning](https://docs.npmjs.com/about-semantic-versioning)
- [Creating Personal Access Tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
