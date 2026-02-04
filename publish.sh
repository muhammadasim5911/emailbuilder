#!/bin/bash

# Email Template Builder - Automated Publishing Script
# This script handles version bumping, building, committing, and publishing

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}==>${NC} $1"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check if git is clean
check_git_status() {
    if [[ -n $(git status -s) ]]; then
        print_warning "You have uncommitted changes."
        read -p "Do you want to commit them now? (y/n): " commit_now
        if [[ $commit_now == "y" || $commit_now == "Y" ]]; then
            return 0
        else
            print_error "Please commit or stash your changes first."
            exit 1
        fi
    fi
    return 1
}

# Main script
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║   Email Template Builder - Publishing Workflow            ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Step 1: Check git status and commit if needed
print_status "Step 1: Checking git status..."
if check_git_status; then
    read -p "Enter commit message: " commit_message
    if [[ -z "$commit_message" ]]; then
        commit_message="Update email template builder"
    fi
    
    git add .
    git commit -m "$commit_message"
    print_success "Changes committed"
fi

# Step 2: Choose version bump type
echo ""
print_status "Step 2: Version Management"
echo "Current version: $(node -p "require('./package.json').version")"
echo ""
echo "Select version bump type:"
echo "  1) patch (1.0.0 -> 1.0.1) - Bug fixes"
echo "  2) minor (1.0.0 -> 1.1.0) - New features"
echo "  3) major (1.0.0 -> 2.0.0) - Breaking changes"
echo "  4) custom - Enter specific version"
echo ""
read -p "Enter choice [1-4]: " version_choice

case $version_choice in
    1)
        VERSION_TYPE="patch"
        ;;
    2)
        VERSION_TYPE="minor"
        ;;
    3)
        VERSION_TYPE="major"
        ;;
    4)
        read -p "Enter version (e.g., 1.2.3): " custom_version
        VERSION_TYPE="$custom_version"
        ;;
    *)
        print_error "Invalid choice. Exiting."
        exit 1
        ;;
esac

# Step 3: Run tests/linting (optional, non-blocking)
echo ""
print_status "Step 3: Running linter..."
if npm run lint; then
    print_success "Linting passed"
else
    print_warning "Linting found issues (continuing anyway)"
fi

# Step 4: Build the library
echo ""
print_status "Step 4: Building library..."
npm run build:lib

if [ $? -eq 0 ]; then
    print_success "Build successful"
else
    print_error "Build failed. Please fix errors and try again."
    exit 1
fi

# Step 5: Bump version
echo ""
print_status "Step 5: Bumping version..."

if [[ $version_choice == 4 ]]; then
    npm version $VERSION_TYPE --no-git-tag-version
    git add package.json package-lock.json
    git commit -m "Bump version to $VERSION_TYPE"
    NEW_VERSION=$VERSION_TYPE
else
    npm version $VERSION_TYPE -m "Bump version to %s"
    NEW_VERSION=$(node -p "require('./package.json').version")
fi

print_success "Version bumped to v${NEW_VERSION}"

# Step 6: Push to GitHub
echo ""
print_status "Step 6: Pushing to GitHub..."
read -p "Push to GitHub and trigger publish? (y/n): " confirm_push

if [[ $confirm_push != "y" && $confirm_push != "Y" ]]; then
    print_warning "Publish cancelled. Changes are committed locally."
    echo ""
    echo "To publish later, run:"
    echo "  git push --follow-tags"
    exit 0
fi

git push --follow-tags

print_success "Pushed to GitHub"

# Step 7: Summary
echo ""
echo "╔════════════════════════════════════════════════════════════╗"
echo "║                    ✓ PUBLISH STARTED                       ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
print_success "Version v${NEW_VERSION} is being published!"
echo ""
echo "Next steps:"
echo "  1. Monitor GitHub Actions:"
echo "     https://github.com/muhammadasim5911/emailbuilder/actions"
echo ""
echo "  2. After publish completes, install in your app:"
echo "     npm install @muhammadasim5911/email-template-builder@${NEW_VERSION}"
echo ""
echo "  3. Or update to latest:"
echo "     npm update @muhammadasim5911/email-template-builder"
echo ""
